import Image from "next/image";
import Link from "next/link";
import { Item } from "./types/companySegments";

interface CompanyActionProps {
  action: Item;
}

export const CompanyAction = ({ action }: CompanyActionProps) => {
  const { title, description, logo, button } = action;

  return (
    <div className="bg-blue-500 lg:px-9 px-8 py-7 lg:py-10 lg:max-w-[519px]">
      <div className="flex gap-4">
        <h3 className="font-rajdhani items-center lg:text-[28px] text-lg text-white pb-4 flex gap-4 lg:leading-8 leading-4">
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
      <p className="text-white lg:text-lg text-sm font-roboto pb-6">
        {description}
      </p>
      <Link
        className="bg-orange-300 h-14 flex text-xs items-center justify-center text-white font-rajdhani laptop:w-[60%] laptop:text-[16px]"
        href={button?.url ? button?.url : ""}
        target={button?.target}
      >
        {button?.title}
      </Link>
    </div>
  );
};
