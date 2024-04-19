import Image from "next/image";
import Link from "next/link";
import { Item } from "./types/companySegments";
import useComponentAnimation from "@/hooks/useComponentAnimation";

interface CompanyActionProps {
  action: Item;
  isEnglish: boolean;
}

export const CompanyAction = ({ action, isEnglish }: CompanyActionProps) => {
  const { isVisible, refElement } = useComponentAnimation();
  const {
    title,
    description,
    logo,
    button,
    englishButton,
    englishDescription,
  } = action;

  return (
    <div
      className={`bg-theme-primary-500 lg:px-9 px-8 py-7 lg:py-10 lg:max-w-[519px] ${
        isVisible ? "animate-fade-components visible" : "invisible"
      }`}
      ref={refElement}
    >
      <div className="flex gap-4">
        <h3 className="font-rajdhani items-center lg:text-[28px] text-lg text-skin-primary pb-4 flex gap-4 lg:leading-8 leading-4">
          <Image
            src={logo.url}
            height={logo.height}
            width={logo.width}
            className="lg:w-[60px] w-[38px] "
            alt="segment action"
          />
          {title}
        </h3>
      </div>
      <p className="text-skin-primary lg:text-lg text-sm font-roboto pb-6">
        {isEnglish ? englishDescription : description}
      </p>
      <Link
        className="bg-theme-secondary-300 h-14 flex text-xs items-center justify-center text-skin-primary font-rajdhani laptop:w-[60%] laptop:text-4 font-semibold transition-all duration-500 hover:text-theme-secondary-300 hover:bg-white"
        href={button?.url ? button?.url : ""}
        target={isEnglish ? englishButton?.target : button?.target}
      >
        {isEnglish ? englishButton?.title : button?.title}
      </Link>
    </div>
  );
};
