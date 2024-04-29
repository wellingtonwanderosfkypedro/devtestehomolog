"use client";
import { useMedia } from "react-use";
import { TransparenciaTypes } from "./types/transparenciaTypes";
import Image from "next/image";
import Link from "next/link";

export default function Transparencia({
  title,
  text,
  logo,
  buttonNeowayTrata,
  buttonPolitica,
}: TransparenciaTypes) {
  const isMob = useMedia("(max-width: 500px)", false);

  const backgroundDesktop = {
    backgroundImage: `url(/mocks/fsi/FourC/FourCBannerBottom.png)`,
  };
  const backgroundMobile = {
    backgroundImage: `url(/mocks/fsi/FourC/FourCBannerBottom-mobile.png)`,
  };

  return (
    <div
      style={isMob ? backgroundMobile : backgroundDesktop}
      className="text-white flex flex-col items-center py-16 mt-[60px]"
    >
      <Image src={logo.url} alt={""} width={154} height={73} />
      <h3 className="tablet:pt-6 tablet:pb-4 mini:pt-9 mini:pb-4 font-radjani tablet:text-5xl mini:text-[28px] max-w-[868px] text-center tablet:leading-normal mini:leading-relaxed font-semibold">
        {title}
      </h3>
      <p className="pb-12 font-roboto mini:text-[16px] tablet:text-xl leading-8 text-center w-[820px] tablet:max-w-full mini:max-w-[275px] max-tablet:leading-6">
        {text}
      </p>
      <div className="flex gap-5 max-laptop:flex-col max-laptop:px-4">
        <Link
          className="text-theme-primary-400 bg-white py-4 px-10 font-rajdani leading-6 rounded-md underline hover:bg-gray-100 max-tablet:px-6 max-tablet:leading-4"
          href={buttonNeowayTrata.url}
        >
          {buttonNeowayTrata.title}
        </Link>
        <Link
          className="text-theme-primary-400 bg-white py-4 px-10 font-rajdani leading-6 rounded-md underline hover:bg-gray-100 max-tablet:px-6 max-tablet:leading-4"
          href={buttonPolitica.url}
        >
          {buttonPolitica.title}
        </Link>
      </div>
    </div>
  );
}
