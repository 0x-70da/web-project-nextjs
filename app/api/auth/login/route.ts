import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { username, password, rememberMe } = await req.json();

  const user = await prisma.user.findUnique({ where: { username } });
  if (!user)
    return Response.json(
      { success: false, message: "User not found" }, {status: 404 },
    );

  const match = await bcrypt.compare(password, user.password);
  if (!match)
    // لازم الفرونت يعمل trim للباسسورد يجدعان
    return Response.json({ success: false, message: "Wrong Password" }, {status: 401 });

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: rememberMe ? "7d" : "1d" },
  );

  (await cookies()).set('token', token, {
    httpOnly: true,
    maxAge: rememberMe ? 7 * 24 * 60 * 60 : 24 * 60 * 60, // 7 days or 1 day
  });

  return Response.json({
    success: true,
    message: "Login Successful",
    user: { id: user.id, username: user.username, role: user.role },
  });
}
