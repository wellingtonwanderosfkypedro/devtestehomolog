"use client";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderImagesNeowwayTypes } from "./types/sliderImagesNeoway";

export default function BigImages({ images }: SliderImagesNeowwayTypes) {
  const imagesMap = Object.values(images);
  return (
    <div className="mt-28 ml-2 lg:ml-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={32}
        breakpoints={{
          560: {
            slidesPerView: 1.5,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 2.4,
          },
        }}
      >
        {imagesMap?.map((image) => (
          <SwiperSlide key={image.alt}>
            <Image
              src={image.url}
              alt={"image?.alt"}
              width={image.width}
              height={image.height}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
