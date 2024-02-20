import { bannerDatas } from "./mockDataBanner";
import { SolucionsProps } from "./FormOurSolutions";
import Link from "next/link";

export const TitleBanner = ({ idPage }: SolucionsProps) => {
  const infosBanner = bannerDatas.banners
    .filter((banner) => {
      if (idPage === banner.idPage) return banner;
    })
    .reduce((obj, banner) => {
      obj = banner;
      return obj;
    });

  return (
    <div className="font-rajdhani flex flex-col items-center py-10 text-white max-laptop:px-6">
      <div className="rounded-full border border-orange-300 bg-orange-300 bg-opacity-20 w-fit mb-8">
        <p className=" font-medium text-2xl py-1 px-3 max-[768px]:text-base">
          {infosBanner.tag}
        </p>
      </div>
      <h1 className="font-semibold text-5xl  leading-[62px] max-w-[1170px] text-center mb-4 max-laptop:text-4xl max-[768px]:text-3xl max-[768px]:text-start">
        {infosBanner.firstNorlmalText}{" "}
        <span className="font-bold text-orange-300">
          {infosBanner.firstHighlightedText}{" "}
        </span>{" "}
        {infosBanner.secondNorlmalText}{" "}
        <span className="font-bold text-orange-300">
          {infosBanner.secondHighlightedText}
        </span>{" "}
        {infosBanner.thirdNorlmalText}
      </h1>

      <p className=" font-roboto font-normal text-lg  max-w-[730px] mb-10 max-[768px]:text-xs max-[768px]:leading-[18px]">
        {infosBanner.bottomText}
      </p>

      <Link
        href={""}
        className="text-white font-semibold font-archivo text-base px-6 py-3 bg-orange-600 rounded-md hover:bg-opacity-70 transition-all duration-300 ease-in max-laptop:text-sm text-center"
      >
        <span>Quero acelerar meus resultados</span>
      </Link>
    </div>
  );
};
