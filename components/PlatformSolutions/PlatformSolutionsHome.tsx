"use client";
import Image from "next/image";
import Link from "next/link";

import { PlatformSolution } from "./types/platformSolutionsTypes";
import { useLangContext } from "@/helpers/providers/langCtx";
import useComponentAnimation from "@/hooks/useComponentAnimation";

interface PlatformSolutionsHomeProps {
  data: PlatformSolution;
}

const PlatformSolutionsHome = ({ data }: PlatformSolutionsHomeProps) => {
  const { isEnglish } = useLangContext();
  const { isVisible, refElement } = useComponentAnimation();

  const {
    title,
    content,
    content_2,
    button,
    image,
    englishButton,
    englishContent,
    englishTitle,
    englishContent_2,
  } = data;

  const typeOfContent =
    typeof content_2 === "string";

  return (
    <div
      className={`maxDesktop:max-w-[1440px] mx-auto py-8 lg:px-24  ${isVisible ? "animate-fade-components visible" : "invisible"
        }`}
      ref={refElement}
    >
      <div className="bg-skin-default flex flex-col mx-6 tablet:flex-row tablet:max-w-[95%] tablet:mx-auto laptop:max-w-[100%] maxDesktop:justify-between">
        <div className="flex flex-col tablet:justify-center tablet:max-w-[40%] maxDesktop:max-w-[40%]">
          <h2 className="text-[25.92px] leading-[32.4px] text-skin-base font-rajdhani font-bold tablet:leading-[50px] tablet:text-10">
            {isEnglish ? englishTitle : title}
          </h2>
          {content_2 && (
            <span className="text-4 leading-[22.5px] tablet:text-5 tablet:leading-[30px] pt-5 pb-5 text-skin-base-accent font-roboto font-normal">
              {isEnglish ? englishContent : content}
              <br /> <br />
              {typeOfContent ? (
                <>{content_2}</>
              ) : (
                <ul className="font-roboto text-skin-base-medium text-xl list-disc pl-8 font-semibold max-tablet:text-base max-tablet:pl-4">
                  {content_2?.map((item: string) => {
                    return <li key={item}>{item}</li>;
                  })}
                </ul>
              )}
            </span>
          )}
          <Link
            className="bg-skin-default flex justify-center font-rajdhani text-4 font-semibold  text-theme-primary-500 hover:bg-theme-primary-500 hover:transition-all hover:text-skin-primary w-[76%] pt-4 pb-4 mt-4 border border-solid border-theme-primary-500"
            target={data?.button?.target}
            href={isEnglish ? englishButton?.url : button?.url}
          >
            {isEnglish ? englishButton?.title : button?.title}
          </Link>
        </div>
        <div className="mt-9 tablet:mt-0 tablet:max-w-[60%] maxDesktop:max-w-[60%]">
          <Image
            src={image?.url ? image?.url : ""}
            width={image?.width}
            height={image?.height}
            alt="Device"
          />
        </div>
      </div>
    </div>
  );
};
export default PlatformSolutionsHome;
