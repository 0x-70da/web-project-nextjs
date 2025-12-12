"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
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
    <header className="flex justify-between items-center h-15 w-full p-5 bg-white/10 backdrop-blur-sm text-gray-950 shadow-lg fixed">
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
      <nav className="w-[60%]">
        <ul className="flex gap-2 md:gap-8 justify-center items-center p-3 w-full">
          <li>
            <Link
              href="/"
              className={pathname === "/" ? "active-link" : "nav-link"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? "active-link" : "nav-link"}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={pathname === "/contact" ? "active-link" : "nav-link"}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={pathname === "/services" ? "active-link" : "nav-link"}
            >
              Services
            </Link>
          </li>
        </ul>
      </nav>
      <section className="flex justify-end gap-4 p-3 w-[20%]">
        <button onClick={toggleTheme} className="cursor-pointer">
          <Image
            src={theme === "light" ? "/icons/light.png" : "/icons/dark.png"}
            alt="Toggle Theme"
            width={40}
            height={40}
          />
        </button>
        <div className="hidden md:flex gap-4">
          <button className="btn">
            <Link href="/login">Login</Link>
          </button>
          <button className="btn">
            <Link href="/sign-up">Sign Up</Link>
          </button>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
