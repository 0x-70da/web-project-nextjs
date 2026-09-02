import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function adminMiddleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    if (!token) {
        return NextResponse.redirect(new URL("/not-authorized", request.url));
    }
    const { role } = (await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET_KEY!))).payload;
    if (role !== "ADMIN") {
        return NextResponse.redirect(new URL("/not-authorized", request.url));
    }
    return NextResponse.next();
}