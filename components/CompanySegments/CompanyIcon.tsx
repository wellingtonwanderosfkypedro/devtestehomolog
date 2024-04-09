"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ImageProps } from "./types/companySegments";

interface CompanyIconProps {
  image: ImageProps | string;
  title: string;
}

export const CompanyIcon = ({ image, title }: CompanyIconProps) => {
  const [valuesImage, setValuesImage] = useState({
    width: 38,
    height: 60,
    url: "",
  });

  useEffect(() => {
    if (typeof image === "string") {
      setValuesImage({ width: 59.26, height: 59.26, url: image });
    }
  }, [image]);

  const { url, width, height } =
    typeof image === "string" ? valuesImage : image;

  return (
    <div className="bg-skin-default flex flex-col lg:gap-7 gap-4 max-w-[232px] px-6 py-8 lg:p-10 max-h-[147px] lg:h-[209px] lg:max-h-[209px]">
      <Image
        className="w-[38px] lg:w-[60px]"
        src={url}
        width={width}
        height={height}
        alt={title}
      />
      <p className="font-semibold lg:text-2xl text-lg font-rajdhani text-skin-base leading-5">
        {title}
      </p>
    </div>
  );
};
