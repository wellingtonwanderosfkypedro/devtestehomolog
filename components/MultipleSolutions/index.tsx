"use client";
import { useMedia } from "react-use";

import Image from "next/image";
import { TrustedNeowayTypes } from "./types/ISolutions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Arrow from "../SpecialistBanner/Arrow";
import NavigationButton from "../Navigation";

const MultipleSolutions = ({
  title,
  button,
  sliderEmpresas,
}: TrustedNeowayTypes) => {
  const isMob = useMedia("(max-width: 500px)", false);
  const name = "MultipleSolutions";

  const sliderMap = Object.values(sliderEmpresas);

  return (
    <section className="flex flex-col items-center maxDesktop:max-w-[1440px] px-6 mx-auto mini:py-10 laptop:py-12 lg:px-24 mini:gap-2 tablet:gap-12 mini:pr-0">
      <div className="flex justify-between w-full items-center">
        <h3 className="font-rajdhani font-bold text-8  text-gray-500 max-w-[50%] text-left">
          {title}
        </h3>
        <div className="hidden lg:flex">
          <NavigationButton name={name} />
        </div>
      </div>
      <div className="flex w-full mini:overflow-x-scroll tablet:overflow-x-hidden">
        <div className="flex w-full justify-between border border-solid border-neutral-100 py-6 px-10 rounded-md mini:min-w-[792px]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={5}
            navigation={{
              nextEl: ".swiper-button-next-custom-MultipleSolutions",
              prevEl: ".swiper-button-prev-custom-MultipleSolutions",
              disabledClass:
                "bg-orange-300 stroke-white hover:bg-white disabled-swiper-track",
            }}
          >
            {sliderMap.map((companies, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    key={index}
                    className="relative flex items-center max-w-[180px]"
                  >
                    <Image
                      src={companies.url}
                      alt={"company.nome"}
                      width={companies.width}
                      height={companies.height}
                      className="object-contain tablet:object-none"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <a
        href={button?.url}
        className="max-w-[274px] lg:max-w-96 bg-theme-secondary-300 flex text-white py-4 w-full justify-center items-center rounded-md font-semibold text-base font-archivo"
      >
        {button?.title} <Arrow />
      </a>
    </section>
  );
};

export default MultipleSolutions;
