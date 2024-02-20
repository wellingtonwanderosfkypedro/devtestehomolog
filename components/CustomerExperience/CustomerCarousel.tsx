import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import ItemCustomerExperience from "./ItemCustomerExperience";

interface CustomerCarouselProps {
  customers: Customer[];
}

export type Customer = {
  image: string;
  text: string;
};

const CustomerCarousel: React.FC<CustomerCarouselProps> = ({ customers }) => {
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
          slidesPerView: 3,
        },
      }}
      navigation={{
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
        disabledClass: "bg-orange-300 stroke-white",
      }}
      className="h-[100%]"
    >
      {customers?.map((customer, index) => (
        <SwiperSlide key={index}>
          <ItemCustomerExperience customer={customer} index={index} />
        </SwiperSlide>
      ))}
      <div className="flex items-center justify-center pt-[20px] gap-[20px] tablet:pt-[30px]">
        <div className="swiper-button-prev-custom cursor-pointer hover:opacity-70 p-[16px] border border-solid border-orange-100 w-[50px] h-[50px] flex items-center justify-center">
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="swiper-button-prev-custom"
              d="M5 9L1 5L5 1"
              stroke="#F0680A"
              strokeOpacity="0.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="swiper-button-next-custom cursor-pointer hover:opacity-70 p-[16px] border border-solid border-orange-100 w-[50px] h-[50px] flex items-center justify-center">
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="swiper-button-next-custom"
              d="M1 9L5 5L1 1"
              stroke="#F0680A"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Swiper>
  );
};

export default CustomerCarousel;
