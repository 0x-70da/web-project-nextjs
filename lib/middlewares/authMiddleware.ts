import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function authMiddleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    if (!token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    const isValid = jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET_KEY!));
    if (!isValid) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
}