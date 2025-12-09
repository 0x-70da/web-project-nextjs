import prisma from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { username } });
  if (!user)
    return Response.json(
      { success: false, message: "User not found" },
    );

  const match = await bcrypt.compare(password, user.password);
  if (!match)
    // لازم الفرونت يعمل trim للباسسورد يجدعان
    return Response.json({ success: false, message: "Wrong Password" });

  return Response.json({
    success: true,
    message: "Login Successful",
    user: { id: user.id, username: user.username, role: user.role },
  });
}
