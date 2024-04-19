'use client';
import { useMedia } from "react-use";

import { BannerProps } from "./types/BannerProps";
import Flag from "./Flag";
import Buttons from "./Buttons";
import Richtext from "../RichText/RichText";

const Banner = ({
  title,
  description,
  flag,
  buttons,
  image_desktop,
  image_mobile,
  onlyMobileButton = false
}: BannerProps) => {
  const isMob = useMedia("(max-width: 500px)", false);

  const backgroundDesktop = {
    backgroundImage: `url(${image_desktop?.url})`,
  };
  const backgroundMobile = {
    backgroundImage: `url(${image_mobile?.url})`,
  };

  return (
    <section
      style={isMob ? backgroundMobile : backgroundDesktop}
      className={` relative bg-no-repeat w-[100%] bg-cover desktop:h-[${image_desktop?.height}px] bg-center`}
    >
      <div className="flex tablet:max-w-[1440px] min-[1120px]:w-11/12 mx-auto">
        <div className="relative flex flex-wrap flex-col tablet:pt-[180px] tablet:pb-[148px] laptop:px-2 mini:px-6 mini:py-20 mini:pt-[100px] desktop:justify-between tablet:gap-6 tablet:max-w-[660px] mini:gap-3 laptop:gap-0">
          <Flag flag={flag} />

          <div>
            <div className="font-rajdhani text-white font-semibold text-[34px] leading-[42px] tablet:text-[49px] tablet:leading-tight">
              <Richtext text={title} colorText="#FFF" />
            </div>

            <div className="text-white text-[12px] font-roboto font-normal leading-[18px] tablet:text-4.5 tablet:leading-[27px] laptop:w-[574px] mini:mt-3 laptop:mt-5">
              <Richtext text={description} colorText="#FFF" />
            </div>
          </div>

          <Buttons buttons={buttons} onlyMobileButton={onlyMobileButton} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
