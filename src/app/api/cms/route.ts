import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

const CONFIG_PATH = path.join(process.cwd(), "src", "data", "cms-config.json");

export async function GET() {
  try {
    if (fs.existsSync(CONFIG_PATH)) {
      const data = fs.readFileSync(CONFIG_PATH, "utf-8");
      return NextResponse.json({ config: JSON.parse(data) });
    }
    return NextResponse.json({ config: null });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (body.action === "git_commit") {
      const commitMessage = body.commitMessage || "CMS Update";
      if (body.config) {
        fs.writeFileSync(CONFIG_PATH, JSON.stringify(body.config, null, 2), "utf-8");
      }

      // Execute git operations
      const cwd = process.cwd();
      await execAsync(`git add .`, { cwd });
      await execAsync(`git commit -m "${commitMessage.replace(/"/g, '\\"')}"`, { cwd }).catch((e) => {
        // Allow if nothing to commit
        console.warn("Git commit output:", e.message);
      });
      await execAsync(`git push origin main`, { cwd }).catch((e) => {
        console.warn("Git push warning:", e.message);
      });

      return NextResponse.json({ success: true, message: "Committed and pushed to GitHub" });
    }

    if (body.config) {
      fs.writeFileSync(CONFIG_PATH, JSON.stringify(body.config, null, 2), "utf-8");
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
