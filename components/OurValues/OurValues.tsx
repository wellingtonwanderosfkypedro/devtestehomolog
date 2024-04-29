"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import ItemCustomerExperience from "./ItemCustomerExperience";

import { OurValuesType, Item } from "./types/CustomerExperienceTypes";
import NavigationButton from "../Navigation";
import { TransformObjToArray } from "@/helpers/utils";

interface OurValuesProps {
  data: OurValuesType;
  fsiStyle?: boolean;
  slidesView: number;
}

const OurValues = ({ fsiStyle, data, slidesView }: OurValuesProps) => {
  const { items, title } = data;
  const name = "OurValues";

  const itemsMap = Object.values(items);

  const isSlidesView =
    slidesView == 2 ? "h-[100%] tablet:w-[824px]" : "h-[100%]";

  return (
    <div className="max-w-screen-xl pb mx-5 lg:m-auto">
      <div className="flex justify-between items-center mini:mt-12 tablet:mt-28 mb-8">
        <p className="font-rajdhani text-10 font-bold mini:text-2xl tablet:text-10 tablet:max-w-[605px]">
          {title}
        </p>
        <div className="hidden lg:flex">
          <NavigationButton name={name} />
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={31}
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
          nextEl: `.swiper-button-next-custom-${name}`,
          prevEl: `.swiper-button-prev-custom-${name}`,
          disabledClass: "bg-disabled stroke-white disabled-swiper-track",
        }}
        className={`${isSlidesView} !pb-7`}
      >
        {itemsMap?.map((customer, index) => (
          <SwiperSlide key={customer.title}>
            <ItemCustomerExperience
              customer={customer}
              index={index}
              fsiStyle={fsiStyle}
            />
          </SwiperSlide>
        ))}
        <div className="flex mt-8 lg:hidden justify-center">
          <NavigationButton name={name} />
        </div>
      </Swiper>
    </div>
  );
};

export default OurValues;
