import { NextResponse } from "next/server";
import { getCMSConfig, saveSectionsData } from "@/lib/cms-db";

export async function GET() {
  try {
    const config = getCMSConfig();
    return NextResponse.json({ sections: config.sections });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (body.sections) {
      const updated = saveSectionsData(body.sections);
      return NextResponse.json({ success: true, sections: updated.sections });
    }
    return NextResponse.json({ error: "Missing sections array" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
