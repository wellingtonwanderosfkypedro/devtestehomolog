'use client';
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BigImages({ images }: Readonly<{ images: { src: string, alt: string, width: number, height: number }[] }>) {
  return (
    <div className="mt-28 ml-2 lg:ml-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={32}
        breakpoints={{
          560: {
            slidesPerView: 1.5,
            spaceBetween: 8
          },
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 2.4,
          },
        }}
      >
        {images?.map((image) => (
          <SwiperSlide key={image.alt}>
            <Image {...image} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}