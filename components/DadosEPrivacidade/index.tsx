import Image from "next/image";
import { DadosEPrivacidadeTypes } from "./types/dadosEPrivacidadeTypes";
import Link from "next/link";

export const DadosEPrivacidade = ({
  tag,
  title,
  text,
  button,
  image,
}: DadosEPrivacidadeTypes) => {
  return (
    <section className="maxDesktop:max-w-[1440px] px-6 mx-auto ">
      <div className="mt-[60px] flex justify-between max-laptop:flex-col max-laptop:gap-5 max-laptop:items-center">
        <div className="w-[55%] max-laptop:w-full">
          <p className="text-4 font-bold text-theme-secondary-600">{tag}</p>
          <h3 className="text-[50px] font-bold text-black-300 my-3  max-tablet:text-6">
            {title}
          </h3>
          <p className="text-5 text-gray-200 my-3 max-tablet:text-4">{text}</p>
          <div className="flex gap-2">
            <Link
              href={button.url}
              className="bg-theme-secondary-600 text-white px-[60px] py-3 rounded-md font-semibold flex items-center"
            >
              <span>{button.title}</span>
            </Link>

            <button className="border border-theme-secondary-600 rounded-md w-[60px] h-[60px] flex items-center justify-center">
              <Arrow />
            </button>
          </div>
        </div>
        <Image src={image.url} alt="" width={500} height={410} />
      </div>
    </section>
  );
};

const Arrow = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 19.5V5.5"
        stroke="#E96024"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.001 14.499L12 19.5L6.99902 14.499"
        stroke="#E96024"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
