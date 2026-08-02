import { NextResponse } from "next/server";

const ADMIN_PASSKEY = process.env.CMS_ADMIN_KEY || "hluga2026admin";

export async function POST(req: Request) {
  try {
    const { passkey } = await req.json();

    if (passkey === ADMIN_PASSKEY) {
      const response = NextResponse.json({ success: true, message: "Authenticated successfully" });

      // Set secure HTTP-only cookie valid for 7 days
      response.cookies.set("hluga_cms_session", "authenticated_admin", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });

      return response;
    }

    return NextResponse.json({ error: "Invalid admin passkey" }, { status: 401 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const cookieHeader = req.headers.get("cookie") || "";
  const isAuthenticated = cookieHeader.includes("hluga_cms_session=authenticated_admin");
  return NextResponse.json({ authenticated: isAuthenticated });
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: "Logged out" });
  response.cookies.delete("hluga_cms_session");
  return response;
}
