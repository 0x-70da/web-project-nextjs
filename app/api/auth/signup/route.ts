import prisma from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const { email, username, password } = await req.json();

  const doesUserExist = await prisma.user.findUnique({ where: { username } });
  if (doesUserExist)
    return Response.json({
      success: false,
      message: "Try a Different Username",
    });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { email, username, password: hashedPassword },
  });

  return Response.json({
    success: true,
    message: "Acount Created Successfully!",
    user: { id: user.id, email, username },
  });
}
