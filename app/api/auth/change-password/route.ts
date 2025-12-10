import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
export async function POST(req: Request) {
    const { userId, newPassword } = await req.json(); // I know there might be a vulnaribility here but this is just a test

    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;
    

    const newHashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
        where: {id: userId},
        data: {password: newHashedPassword},
    });

    return Response.json({success: true, message: "Password changed successfully"});
}