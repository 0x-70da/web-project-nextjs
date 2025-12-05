import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center h-15 w-full p-5 bg-gray-200 text-gray-950">
      <div className="flex items-center p-3 w-[15%]">Logo</div>
      <nav className="w-[70%]">
        <ul className="flex gap-8 justify-center items-center p-3 w-full">
          <li>
            <Link href="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link href="/contact" className="nav-link">Contact</Link>
          </li>
          <li>
            <Link href="/services" className="nav-link">Services</Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-end gap-4 p-3 w-[15%]">
        <button className="nav-btn">
          Login
        </button>
        <button className="nav-btn">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Navbar;
