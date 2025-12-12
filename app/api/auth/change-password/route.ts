import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
export async function POST(req: Request) {
    const token = (await cookies()).get("token")?.value;
    if (!token) {
        return Response.json({success: false, message: "Unauthorized"}, {status: 401});
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {id: number, username: string, role: string};
    const userId = decoded.id;
    
    const { newPassword } = await req.json(); // I know there might be a vulnaribility here but this is just a test

    const newHashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
        where: {id: userId},
        data: {password: newHashedPassword},
    });

    return Response.json({success: true, message: "Password changed successfully"});
}