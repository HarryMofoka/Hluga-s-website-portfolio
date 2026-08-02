import { NextResponse } from "next/server";
import { getCMSConfig, saveThemeData } from "@/lib/cms-db";

export async function GET() {
  try {
    const config = getCMSConfig();
    return NextResponse.json({ theme: config.theme });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (body.theme) {
      const updated = saveThemeData(body.theme);
      return NextResponse.json({ success: true, theme: updated.theme });
    }
    return NextResponse.json({ error: "Missing theme object" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
