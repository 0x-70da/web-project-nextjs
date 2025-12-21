import prisma from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const { email, username, password } = await req.json();
  try {
    const doesUserExist = await prisma.user.findUnique({ where: { username }});
    const isEmailTaken = await prisma.user.findUnique({ where: { email }});
    if (doesUserExist || isEmailTaken)
      return Response.json({
        success: false,
        message: "Try a Different Username or Email",
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
  } catch (err) {
    return Response.json({
      success: false,
      message: "Error creating account. Please try again.",
    });
  }

}
