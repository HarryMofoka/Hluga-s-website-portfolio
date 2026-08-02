import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore static assets, api routes, and cms admin page from traffic tracking
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/cms") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Trigger tracking asynchronously via internal API or direct record
  try {
    const trackingPayload = {
      path: pathname,
      referrer: request.headers.get("referer") || "",
      userAgent: request.headers.get("user-agent") || "",
      ip: request.headers.get("x-forwarded-for") || "127.0.0.1",
    };

    const origin = request.nextUrl.origin;
    fetch(`${origin}/api/cms/analytics`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(trackingPayload),
    }).catch(() => {});
  } catch (e) {
    // Fail silently so page rendering is never blocked
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
