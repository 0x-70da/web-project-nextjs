import { NextRequest, NextResponse } from "next/server";
import { authMiddleware } from "./lib/middlewares/authMiddleware";
import { adminMiddleware } from "./lib/middlewares/adminMiddleware";
import { isLoggedInMiddleware } from "./lib/middlewares/isLoggedInMiddleware";
import { isAdminLoggedInMiddleware } from "./lib/middlewares/isAdminLoggedInMiddleware";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  try {
    //   if(!token) {
    //     return NextResponse.redirect(new URL("/login", request.url));
    //   }
    //   const decoded = (await jwtVerify(token || "", new TextEncoder().encode(process.env.JWT_SECRET_KEY!))).payload

    // if (pathname.startsWith("/dashboard")) {
    //   if (decoded.role !== "USER" && decoded.role !== "ADMIN") {
    //     return NextResponse.redirect(new URL("/login", request.url));
    //   }
    // } else if (pathname.startsWith("/admin")) {
    //   if (decoded.role !== "ADMIN") {
    //     return NextResponse.redirect(new URL("/not-authorized", request.url));
    //   }
    // }
    // return NextResponse.next();
    if(pathname.startsWith("/dashboard") || pathname.startsWith("/me")) { 
      return authMiddleware(request);
    }
    if(pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) { 
      return adminMiddleware(request);
    }
    if(pathname.startsWith("/login")) {
      return isLoggedInMiddleware(request);
    }
    if(pathname.startsWith("/admin/login")) {
      return isAdminLoggedInMiddleware(request);
    }
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/login", "/admin/login", "/me"],
};