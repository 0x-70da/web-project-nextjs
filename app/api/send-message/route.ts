import prisma from "@/lib/db";
import { jwtVerify } from "jose";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { message } = await request.json();
        const token = request.cookies.get("token")?.value;
    
        if (!token) {
            return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }
        const { id } = (await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET_KEY))).payload;
    
        await prisma.message.create({
            data: {
                senderId: id as number,
                content: message as string,
                recipientId: 3,
            },
        });
        return Response.json({ success: true, message: "Message sent successfully" }, { status: 200 });
    } catch (err) {
        return Response.json({ success: false, message: "Internal Server Error" }, { status: 500 });
    }
 }