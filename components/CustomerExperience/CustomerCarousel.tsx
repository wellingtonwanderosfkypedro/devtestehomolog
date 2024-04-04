"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import ItemCustomerExperience from "./ItemCustomerExperience";

import NavigationButton from "./Navigation";
import { Item } from "./types/CustomerExperienceTypes";

interface CustomerCarouselProps {
  items: Item[];
  slidesView: number;
}

const CustomerCarousel = ({ items, slidesView }: CustomerCarouselProps) => {
  const isSlidesView =
    slidesView == 2 ? "h-[100%] tablet:w-[824px]" : "h-[100%]";

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={13}
      breakpoints={{
        560: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: slidesView,
        },
      }}
      navigation={{
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
        disabledClass:
          "bg-orange-300 stroke-white hover:bg-white disabled-swiper-track",
      }}
      className={isSlidesView}
    >
      {items?.map((customer, index) => (
        <SwiperSlide key={index}>
          <ItemCustomerExperience customer={customer} index={index} />
        </SwiperSlide>
      ))}
      <NavigationButton />
    </Swiper>
  );
};

export default CustomerCarousel;
