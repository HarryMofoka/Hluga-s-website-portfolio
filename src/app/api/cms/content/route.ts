import { NextResponse } from "next/server";
import {
  getCMSConfig,
  updateProfileData,
  saveProjectsData,
  saveServicesData,
  saveExperiencesData,
  saveCMSConfig,
} from "@/lib/cms-db";

export async function GET() {
  try {
    const config = getCMSConfig();
    return NextResponse.json({
      profile: config.profile,
      projects: config.projects,
      services: config.services,
      experiences: config.experiences,
      socials: config.socials,
      stats: config.stats,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, data } = body;

    const config = getCMSConfig();

    if (type === "profile") {
      const updated = updateProfileData(data);
      return NextResponse.json({ success: true, profile: updated.profile });
    }

    if (type === "projects") {
      const updated = saveProjectsData(data);
      return NextResponse.json({ success: true, projects: updated.projects });
    }

    if (type === "services") {
      const updated = saveServicesData(data);
      return NextResponse.json({ success: true, services: updated.services });
    }

    if (type === "experiences") {
      const updated = saveExperiencesData(data);
      return NextResponse.json({ success: true, experiences: updated.experiences });
    }

    // Full config update
    if (body.config) {
      saveCMSConfig(body.config);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid payload type" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
