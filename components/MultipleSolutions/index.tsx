'use client';
import { useMedia } from "react-use";

import Image from "next/image";
import { ISection } from "./types/ISolutions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Arrow from "../SpecialistBanner/Arrow";
import NavigationButton from "../Navigation";

const MultipleSolutions = ({ title, sections, button }: ISection) => {
  const isMob = useMedia("(max-width: 500px)", false);
  const name = "MultipleSolutions";

  return (
    <section className="flex flex-col items-center maxDesktop:max-w-[1440px] px-6 mx-auto mini:py-10 laptop:py-12 lg:px-24 mini:gap-2 tablet:gap-12 mini:pr-0">
      <div className="flex justify-between w-full items-center">
        <h3 className="font-rajdhani font-bold text-2xl text-center">{title}</h3>
        <div className="hidden lg:flex">
          <NavigationButton name={name} />
        </div>
      </div>
      <div className="flex w-full mini:overflow-x-scroll tablet:overflow-x-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-custom-MultipleSolutions",
            prevEl: ".swiper-button-prev-custom-MultipleSolutions",
            disabledClass:
              "bg-orange-300 stroke-white hover:bg-white disabled-swiper-track",
          }}
        >
          {sections.map(({ companies }, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex w-full justify-between border border-solid border-neutral-100 py-6 px-10 rounded-md mini:min-w-[792px]">
                  {companies.map((company) => {
                    const { src, width, height } = isMob
                      ? company.mobile
                      : company.desktop;
                    return (
                      <div key={company.nome} className="relative flex items-center" style={{ height: `${height}px` }}>
                        <Image
                          src={src}
                          alt={company.nome}
                          width={width}
                          height={height}
                          className="object-contain tablet:object-none"
                        />
                      </div>
                    );
                  })}
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <a href={button?.link} className="max-w-[274px] lg:max-w-96 bg-theme-secondary-300 flex text-white py-4 w-full justify-center items-center rounded-md font-semibold text-base font-archivo">
        {button?.text} <Arrow />
      </a>
    </section>
  );
};

export default MultipleSolutions;
