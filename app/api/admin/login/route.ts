import { NextRequest } from "next/server";
import { SignJWT } from "jose";
import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { username } });

  const match = await bcrypt.compare(password, user?.password || "");
  const isAdmin = user?.role === "ADMIN" ? true : false;

  if (match && isAdmin) {
    const token = await new SignJWT({
      id: user!.id,
      username: user!.username,
      role: user!.role,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1d")
      .sign(new TextEncoder().encode(process.env.JWT_SECRET_KEY!));

      (await cookies()).set('token', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60, // 1 day
      });

    return Response.json({
      success: true,
      message: "Login Successful",
      user: { id: user!.id, username: user!.username, role: user!.role },
    });
  }

  else {
    return Response.json(
      { success: false, message: "Unauthorized Access or Wrong Password" }, { status: 401 },
    );
  }

}
