"use client";
import Image from "next/image";
import Link from "next/link";

import { useMedia } from "react-use";

import Arrow from "./Arrow";

import { Specialist } from "./types/specialistBannerTypes";
import { useLangContext } from "@/helpers/providers/langCtx";
import useComponentAnimation from "@/hooks/useComponentAnimation";

interface SpecialistBannerProps {
  data: Specialist;
}

export const SpecialistBanner = ({ data }: SpecialistBannerProps) => {
  const { isEnglish } = useLangContext();
  const { isVisible, refElement } = useComponentAnimation();

  const isMob = useMedia("(max-width: 1024px)", false);

  return (
    <>
      {!isMob && (
        <div
          className={`w-full flex p-24 pb-10 relative h-[550px] max-desktop:p-14 max-desktop:pb-10 ${
            isVisible ? "animate-fade-components visible" : "invisible"
          }`}
          ref={refElement}
        >
          <Image
            alt={data.title}
            width={data?.image?.width}
            height={data?.image?.height}
            src={data?.image?.url}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="w-full z-[2] flex flex-col justify-around max-desktop:pt-8">
            <div className=" flex font-rajdhani text-skin-primary max-w-[780px]">
              <h3 className="font-semibold text-5xl max-desktop:text-4xl max-desktop:max-w-[600px]">
                {isEnglish ? data.englishTitle : data.title}{" "}
                <span className="font-bold">{data.title_complement_1}</span>{" "}
                {data.title_complement_2}{" "}
                <span className="text-theme-secondary-300 font-bold">
                  {data.title_complement_3}
                </span>
              </h3>
            </div>
            <Link
              href={isEnglish ? data?.englishButton?.url : data?.button?.url}
              target={data?.button?.target}
              className="bg-theme-secondary-300 max-w-[400px] w-full rounded-md py-4 flex gap-2 justify-center  border border-transparent group hover:bg-transparent hover:border-theme-secondary-300 transition-all duration-300 ease-in"
            >
              <span className="text-skin-primary font-semibold text-base font-archivo group-hover:text-theme-secondary-300 transition-all duration-300 ease-in">
                {isEnglish ? data.englishButton.title : data?.button?.title}
              </span>
              <Arrow />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
