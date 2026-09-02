import { cookies } from "next/headers";

export async function POST(req: Request) {
    const token = (await cookies()).get("token")?.value;
    if (!token) {
        return Response.json({success: false, message: "Unauthorized"}, {status: 401});
    }

  try {
    (await cookies()).delete("token");
    return Response.json({
      success: true,
      message: "Logout Successful",
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: "Logout Failed",
    });
  }
}
