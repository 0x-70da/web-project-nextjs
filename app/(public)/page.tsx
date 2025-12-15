import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center p-15 md:p-0">
      <section className="flex flex-col justify-center items-center gap-15 text-center h-screen w-full">
        <div>
          <h1 className="text-5xl font-bold bg-linear-to-r from-green-500 to-yellow-600 bg-clip-text text-transparent">
            Welcome to the Web Project for College
          </h1>
          <p className="text-xl text-gray-950 dark:text-gray-50 font-semibold mt-10">
            This is a simple web project built with Next.js.
          </p>
        </div>
        <button className="btn w-50 h-20 text-2xl text-gray-50 hover:bg-yellow-600">
          <Link href="/login">Get Started</Link>
        </button>
      </section>
      <section className="h-screen w-full flex flex-col justify-center items-center gap-5">
        <div>
          <Image
            src="/icons/security.png"
            alt="home-image"
            width={100}
            height={100}
          />
        </div>
        <div className="text-center w-120 px-10 md:px-0">
          <h2 className="text-4xl text-gray-950 dark:text-gray-50 font-bold">
            Built-in application security where found means fixed
          </h2>
          <p className="text-gray-950 dark:text-gray-50 mt-5">
            Use AI to find and fix vulnerabilities so your team can ship more
            secure software faster.
          </p>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
