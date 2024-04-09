import Link from "next/link";
import { ProductBanner } from "./types/formOurSolutionsTypes";

interface TitleBannerProps {
  data: ProductBanner;
}

export const TitleBanner = ({ data }: TitleBannerProps) => {
 
  return (
    <div className="font-rajdhani flex flex-col items-center py-10 text-skin-primary max-laptop:px-6">
      <div className="rounded-full border border-theme-secondary-300 bg-theme-secondary-300 bg-opacity-20 w-fit mb-8">
        <p className=" font-medium text-2xl py-1 px-3 max-[768px]:text-base">
          {data?.tag}
        </p>
      </div>
      <h1 className="font-semibold text-5xl  leading-[62px] max-w-[1170px] text-center mb-4 max-laptop:text-4xl max-[768px]:text-3xl max-[768px]:text-start">
        {data?.title}{" "}
        <span className="font-bold text-theme-secondary-300">
          {data?.title_complement_1}{" "}
        </span>{" "}
        {data?.title_complement_2}{" "}
        <span className="font-bold text-theme-secondary-300">
          {data?.title_complement_3}
        </span>{" "}
        {data?.title_complement_4}
      </h1>

      <p className=" font-roboto font-normal text-lg  max-w-[730px] mb-10 max-[768px]:text-xs max-[768px]:leading-[18px]">
        {data?.description}
      </p>

      <Link
        href={data?.button?.url}
        target={data?.button?.target}
        className="text-skin-primary font-semibold font-archivo text-base px-6 py-3 bg-orange-600 rounded-md hover:bg-opacity-70 transition-all duration-300 ease-in max-laptop:text-sm text-center"
      >
        <span>{data?.button?.title}</span>
      </Link>
    </div>
  );
};
