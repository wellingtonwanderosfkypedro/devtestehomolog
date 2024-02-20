import Image from "next/image";
import Link from "next/link";

interface SpeakWithSpecialistCard {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export function SpeakWithSpecialistCard({
  title,
  description,
  imgSrc,
  imgAlt,
  linkHref,
  linkText,
}: SpeakWithSpecialistCard) {
  return (
    <div className="flex flex-row items-start bg-white rounded-lg py-4 px-6 mb-8 gap-6 max-tablet:px-4 max-tablet:gap-4">
      <Image src={`/icons/${imgSrc}`} alt={imgAlt} width={56} height={56} />

      <div className="flex flex-col grow justify-start ">
        <h3 className="font-semibold max-tablet:text-base">{title}</h3>
        <p className="text-lg text-gray-200 font-normal max-tablet:text-sm">
          {description}
        </p>
        <Link
          href={linkHref}
          className="hidden max-[1024px]:block font-roboto text-blue-400 underline text-sm font-normal mt-1"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
}
