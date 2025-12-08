import ContactInfo from "@/components/ContactInfo";

const ContactPage = () => {
  return (
    <main className="w-full flex flex-col items-center gap-10 p-15">
      <section className="flex flex-col gap-4 mt-15">
        <h1 className="text-4xl font-bold text-gray-950 dark:text-gray-50">
          Contact Us
        </h1>
        <p className="text-gray-950 dark:text-gray-50">
          Please feel free to reach out to us with any questions or comments.
        </p>
      </section>
      <div className="flex flex-col md:flex-row justify-center md:justify-around w-full">
        <section className="flex flex-col gap-10 p-10">
          <ContactInfo
            iconURL="/icons/location.png"
            title="Location"
            info="123 Main St, Anytown, USA"
          />
          <ContactInfo
            iconURL="/icons/phone.png"
            title="Phone"
            info="+1 234 567 890"
          />
          <ContactInfo
            iconURL="/icons/email.png"
            title="Email"
            info="contact@example.com"
          />
        </section>

        <section className="w-full md:w-[30%] h-100">
          <form action="" className="form">
            <p className="text-2xl font-semibold text-gray-950 dark:text-gray-50">
              Send Message
            </p>
            <input type="text" placeholder="Full Name" className="input" />
            <input type="text" placeholder="Email" className="input" />
            <textarea placeholder="Your Message" className="input h-20" />
            <button type="submit" className="btn text-gray-50">
              Submit
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
