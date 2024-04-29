"use client";
import { useMedia } from "react-use";
import { ISpecialist } from "../types/ISectionFourC";
import Image from "next/image";
import Link from "next/link";

const Specialist = ({ specialist }: { specialist: ISpecialist }) => {
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
      className="text-white flex flex-col items-center py-16"
    >
      <Image
        src={specialist.logo.url}
        alt={specialist.title}
        width={154}
        height={73}
      />
      <h3 className="tablet:pt-6 tablet:pb-4 mini:pt-9 mini:pb-4 font-radjani tablet:text-5xl mini:text-[28px] max-w-[868px] text-center tablet:leading-normal mini:leading-relaxed font-semibold">
        {specialist.title}
      </h3>
      <p className="pb-12 font-roboto mini:text-[16px] tablet:text-xl leading-8 text-center tablet:max-w-full mini:max-w-[275px]">
        {specialist.text}
      </p>
      <Link
        className="text-theme-primary-500 bg-white py-4 px-12 font-rajdani leading-6 rounded-md font-semibold hover:bg-gray-100"
        href={specialist.button.url}
      >
        {specialist.button.title}
      </Link>
    </div>
  );
};

export default Specialist;
