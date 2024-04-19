"use client"
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import NavigationButton from "../Navigation";

import RegulationCard from "./RegulationCard";
import { IIcon } from "./types/IRegulation";

const RegulationCards = ({
  icons,
  slidesView,
}: {
  icons: IIcon[];
  slidesView: number;
}) => {

  const name = "RegulationCards";

  const isSlidesView =
    slidesView == 2 ? "h-[100%] laptop:w-[824px]" : "h-[100%]";

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      breakpoints={{
        280: {
            slidesPerView: 1.8,
        },
        560: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: slidesView,
        },
      }}
      navigation={{
        nextEl: `.swiper-button-next-custom-${name}`,
        prevEl: `.swiper-button-prev-custom-${name}`,
        disabledClass:
          "bg-orange-300 stroke-white hover:bg-white disabled-swiper-track",
      }}
      className={`${isSlidesView} !pb-7`}
    >
      {icons?.map((icon) => (
        <SwiperSlide key={icon.title}>
          <RegulationCard
            title={icon.title}
            description={icon.description}
            icon={icon}
          />
        </SwiperSlide>
      ))}
      <div className="flex mt-10 justify-center">
          <NavigationButton name={name} />
      </div>
    </Swiper>
  );
};

export default RegulationCards;
