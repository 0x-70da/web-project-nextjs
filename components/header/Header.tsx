import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import NavbarSection from "./Navbar";
import ProfileSection from "./ProfileSection";

const Navbar = async () => {
  let isLoggedIn = false;
  const token = (await cookies()).get("token")?.value;
  if (token) {
    isLoggedIn = true;
  }

  return (
    <header className="flex justify-between items-center h-15 w-full py-5 bg-white/10 backdrop-blur-sm text-gray-950 shadow-lg fixed z-1">
      <section className="flex items-center p-3 w-[20%]">
        <Link href="/" className="flex items-center">
          <Image
            src="/myLogo.png"
            alt="logo"
            width={50}
            height={50}
            style={{ borderRadius: "50%" }}
          />
          <span className="hidden md:inline text-3xl font-bold text-green-700 ml-2">
            WebProject
          </span>
        </Link>
      </section>
      <NavbarSection />
      <ProfileSection isLoggedIn={isLoggedIn} />
    </header>
  );
};

export default Navbar;
