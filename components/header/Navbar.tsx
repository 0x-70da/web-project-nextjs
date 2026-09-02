"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarSection = () => {
  const pathname = usePathname();

  return (
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
  );
};

export default NavbarSection;
