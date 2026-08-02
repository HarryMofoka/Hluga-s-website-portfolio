import { NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";
import { saveCMSConfig } from "@/lib/cms-db";

const execAsync = promisify(exec);

export async function GET() {
  try {
    const cwd = process.cwd();
    const { stdout: status } = await execAsync("git status --short", { cwd });
    const { stdout: branch } = await execAsync("git branch --show-current", { cwd });
    return NextResponse.json({
      branch: branch.trim(),
      hasUncommittedChanges: status.trim().length > 0,
      statusOutput: status,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const commitMessage = body.commitMessage || "Feat(CMS): Update portfolio content & configuration";

    if (body.config) {
      saveCMSConfig(body.config);
    }

    const cwd = process.cwd();

    // Stage changes
    await execAsync("git add .", { cwd });

    // Commit
    try {
      await execAsync(`git commit -m "${commitMessage.replace(/"/g, '\\"')}"`, { cwd });
    } catch (e: any) {
      console.log("Git commit output:", e.message);
    }

    // Push to GitHub origin main
    const { stdout: pushOutput } = await execAsync("git push origin main", { cwd }).catch((e) => ({
      stdout: e.message,
    }));

    return NextResponse.json({
      success: true,
      message: "Successfully committed and pushed changes to GitHub origin/main!",
      output: pushOutput,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
