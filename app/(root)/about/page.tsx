import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="w-full md:h-screen flex flex-col md:flex-row justify-center md:justify-evenly items-center p-15">
      <section className="flex flex-col justify-center items-center md:items-start gap-5 w-100 mt-15">
        <h1 className="text-4xl font-bold text-center text-gray-950 dark:text-gray-50">
          About Us
        </h1>
        <p className="text-center md:text-start text-gray-950 dark:text-gray-50">
          This is the about page of our web project for college. Here, we aim to
          provide information about our project, team, and goals.
        </p>
        <button className="btn w-40 h-15 text-xl text-gray-50">
          Read More
        </button>
        <div className="flex gap-5 p-2">
          <a
            href="https://facebook.com"
            target="_blank"
            className="social-link"
          >
            <Image
              src="/icons/facebook.png"
              alt="Facebook"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="social-link"
          >
            <Image
              src="/icons/instagram.png"
              alt="Instagram"
              width={30}
              height={30}
            />
          </a>
          <a href="https://twitter.com" target="_blank" className="social-link">
            <Image
              src="/icons/twitter.png"
              alt="Twitter"
              width={30}
              height={30}
            />
          </a>
        </div>
      </section>
      <section className="flex justify-center w-100">
        <Image src="/about.png" alt="about-image" width={340} height={340} />
      </section>
    </main>
  );
};

export default AboutPage;
