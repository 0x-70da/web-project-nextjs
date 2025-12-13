import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value;
  try {
      if(!token) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
      const decoded = (await jwtVerify(token || "", new TextEncoder().encode(process.env.JWT_SECRET_KEY!))).payload

    if (pathname.startsWith("/dashboard")) {
      if (decoded.role !== "USER" && decoded.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/login", request.url));
      }
    } else if (pathname.startsWith("/admin")) {
      if (decoded.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/not-authorized", request.url));
      }
    }
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};