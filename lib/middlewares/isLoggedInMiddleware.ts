import { NextRequest, NextResponse } from "next/server";

export async function isLoggedInMiddleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    if(token){
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
}