import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { username } });
  if (!user)
    return Response.json({ success: false, message: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match)
    // لازم الفرونت يعمل trim للباسسورد يجدعان
    return Response.json({ success: false, message: "Wrong Password" });

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET_KEY as string,
    { expiresIn: "7d" }
  );

  return Response.json(
    {
      success: true,
      message: "Login Successful",
      user: { id: user.id, username: user.username, role: user.role },
    },
    {
      status: 200,
      headers: {
        "Set-Cookie": `token=${token}; HttpOnly; Path=/; Max-Age=${
          7 * 24 * 60 * 60
        }`,
        "Content-Type": "application/json",
      },
    }
  );
}
