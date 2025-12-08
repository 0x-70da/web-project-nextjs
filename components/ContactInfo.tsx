import Image from "next/image";

const ContactInfo = ({
  iconURL,
  title,
  info,
}: {
  iconURL: string;
  title: string;
  info: string;
}) => {
  return (
    <div className="flex gap-3 items-start">
      <div>
        <Image src={iconURL} alt={title} width={40} height={40} />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-green-600">{title}</h2>
        <p className="text-gray-950 dark:text-gray-50">{info}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
