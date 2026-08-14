import { NextResponse } from "next/server";

export function proxy(request) {
  console.log("🔥🔥 PROXY RUNNING:", request.nextUrl.pathname);

  const token = request.cookies.get("auth_token")?.value;

  console.log("🍪 TOKEN:", token ? "YES" : "NO");

  if (
    request.nextUrl.pathname.startsWith("/recommend") ||
    request.nextUrl.pathname.startsWith("/profile") ||
    request.nextUrl.pathname.startsWith("/premium")
  ) {
    if (!token) {
      console.log("🚫 NO TOKEN → LOGIN");

      return NextResponse.redirect(
        new URL("/login", request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/recommend/:path*",
    "/profile/:path*",
    "/premium/:path*",
  ],
};