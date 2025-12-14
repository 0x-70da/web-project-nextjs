import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function isAdminLoggedInMiddleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    if(!token) {
        return NextResponse.next();
    }
    const { role } = (await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET_KEY!))).payload;
    if(token && role === "ADMIN") {
        return NextResponse.redirect(new URL("/admin/users", request.url));
    }
    return NextResponse.next();
}