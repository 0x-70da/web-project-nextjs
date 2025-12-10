import { redirect } from "next/navigation";
import { cookies } from "next/headers"
import jwt from "jsonwebtoken";

const DashboardPage = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if(!token){
        redirect('/login');
    }

    try {
    jwt.verify(token, process.env.JWT_SECRET_KEY as string);
  } catch {
    redirect("/auth/login");
  }

  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage