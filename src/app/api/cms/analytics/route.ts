import { NextResponse } from "next/server";
import { getCMSConfig, recordPageView } from "@/lib/cms-db";

export async function GET() {
  try {
    const config = getCMSConfig();
    return NextResponse.json({ analytics: config.analytics });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (body.path) {
      recordPageView({
        path: body.path,
        referrer: body.referrer || "",
        userAgent: body.userAgent || "",
        ip: body.ip || "127.0.0.1",
      });
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: "Missing path parameter" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
