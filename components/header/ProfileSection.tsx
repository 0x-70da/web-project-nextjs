"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProfileSection = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <section className="flex justify-end gap-4 p-3 w-[20%]">
      <button onClick={toggleTheme} className="cursor-pointer hidden md:block">
        <Image
          src={theme === "light" ? "/icons/light.png" : "/icons/dark.png"}
          alt="Toggle Theme"
          width={40}
          height={40}
        />
      </button>
      {isLoggedIn ? (
        <Link href="/me" className="block">
          <Image src="/icons/account.png" alt="Profile" width={40} height={40} />
        </Link>
      ) : (
        <div className="flex flex-col md:flex-row gap-0 md:gap-4">
          <button className="btn h-8 w-16 md:h-10 md:w-20 font-normal md:font-bold">
            <Link href="/login">Login</Link>
          </button>
          <button className="btn h-8 w-16 md:h-10 md:w-20 font-normal md:font-bold">
            <Link href="/sign-up">Sign Up</Link>
          </button>
        </div>
      )}
    </section>
  );
};

export default ProfileSection;
