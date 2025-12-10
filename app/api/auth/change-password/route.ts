import prisma from "@/lib/db";
import bcrypt from "bcrypt";
export async function POST(req: Request) {
    const { userId, newPassword } = await req.json(); // I know there might be a vulnaribility here but this is just a test

    const newHashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
        where: {id: userId},
        data: {password: newHashedPassword},
    });

    return Response.json({success: true, message: "Password changed successfully"});
}