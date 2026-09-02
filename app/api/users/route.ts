import prisma from "@/lib/db";
import { jwtVerify } from "jose";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    if (!token) {
        return Response.json({success: false, message: "Unauthorized"}, { status: 401 });
    }
    const { role } = (await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET_KEY!))).payload;
    if (role !== "ADMIN") { 
        return Response.json({success: false, message: "Forbidden"}, { status: 403 });
    }

    const users = await prisma.user.findMany({select: { id: true, username: true, email: true, role: true, messagesSent: true, blocked: true }, orderBy: { id: "asc" }});
    return Response.json({ success: true, users }, { status: 200 });
}