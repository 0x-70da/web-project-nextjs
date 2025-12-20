import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
export async function POST(req: Request) {
    const token = (await cookies()).get("token")?.value;
    if (!token) {
        return Response.json({success: false, message: "Unauthorized"}, {status: 401});
    }
    try {
        const decoded = (await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET_KEY!))).payload;
        const userId = decoded.id as number;
        
        const { password, newPassword } = await req.json(); // I know there might be a vulnaribility here but this is just a test
        const user = await prisma.user.findUnique({where: {id: userId}});
        const match = await bcrypt.compare(password, user?.password || "");
        if (!match) {
            return Response.json({success: false, message: "Current password is incorrect"}, {status: 400});
        }
        const newHashedPassword = await bcrypt.hash(newPassword, 10);
    
        await prisma.user.update({
            where: {id: userId},
            data: {password: newHashedPassword},
        });
        return Response.json({success: true, message: "Password changed successfully"});
    } catch (err) {
        return Response.json({success: false, message: "Internal Server Error"}, {status: 500});
    }

}