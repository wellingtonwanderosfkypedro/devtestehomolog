"use client";
import { useMedia } from "react-use";
import { ManualLGPDTypes } from "./types/manualLGPDTypes";
import Link from "next/link";

export const ManualLGPD = ({
  tag,
  title,
  text,
  button,
  image,
  imageMob,
}: ManualLGPDTypes) => {
  const isMob = useMedia("(max-width: 600px)", false);

  const backgroundDesktop = {
    backgroundImage: `url(${image.url})`,
  };
  const backgroundMobile = {
    backgroundImage: `url(${imageMob.url})`,
  };

  return (
    <div
      style={isMob ? backgroundMobile : backgroundDesktop}
      className="text-white flex flex-col items-center py-16 mt-[60px] bg-no-repeat w-[100%] bg-cover desktop:h-[990px] laptop:h-[700px] tablet:py-8 tablet:h-[600px] max-tablet:h-[700px]"
    >
      <div className="flex flex-col items-center max-w-[700px]">
        <span className="uppercase text-theme-secondary-300 text-7 font-bold mt-3  tablet:text-5">
          {tag}
        </span>
        <h3 className="text-black-300 font-bold text-11  tablet:text-10 max-tablet:text-8">
          {title}
        </h3>
        <p className="text-theme-primary-700 text-5 mt-4 text-center tablet:text-4">
          {text}
        </p>

        <Link
          href={button.url}
          className="mt-4 bg-theme-secondary-600 text-white px-[60px] py-3 rounded-md font-semibold flex items-center"
        >
          <span>{button.title}</span>
        </Link>
      </div>
    </div>
  );
};
