import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import ItemCustomerExperience from "./ItemCustomerExperience";

import NavigationButton from "../Navigation";
import { Item } from "./types/CustomerExperienceTypes";

interface OurValuesProps {
  title: string;
  items: Item[];
  slidesView: number;
}

const OurValues = ({ title, items, slidesView }: OurValuesProps) => {
  const isSlidesView =
    slidesView == 2 ? "h-[100%] tablet:w-[824px]" : "h-[100%]";

  return (
    <div className="max-w-screen-xl pb mx-5 lg:m-auto">
      <div className="flex justify-between items-center mt-28 mb-8">
        <p className="font-rajdhani font-bold text-4xl tablet:max-w-[605px]">{title}</p>
        <div className="hidden lg:flex">
          <NavigationButton />
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
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
          disabledClass:
          "bg-disabled stroke-white disabled-swiper-track",
        }}
        className={`${isSlidesView} !pb-7`}
      >
        {items?.map((customer, index) => (
          <SwiperSlide key={customer.title}>
            <ItemCustomerExperience customer={customer} index={index} />
          </SwiperSlide>
        ))}
        <div className="flex mt-8 lg:hidden justify-center">
          <NavigationButton />
        </div>
      </Swiper>
    </div>
  );
};

export default OurValues;
