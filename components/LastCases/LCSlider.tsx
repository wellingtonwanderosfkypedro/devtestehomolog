"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import NavigationButton from "../Navigation";

import Image from "next/image";
import { Case } from "./types/ILastCases";
import Link from "next/link";

const LCSlider = ({
  cases,
  slidesView,
}: {
  cases: Case[];
  slidesView: number;
}) => {
  const name = "LCSlider";

  const casesMap = Object.values(cases);

  const isSlidesView =
    slidesView == 2 ? "h-[100%] tablet:w-[824px]" : "h-[100%]";

  return (
    <div className="max-w-screen-xl pb mx-5 lg:m-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={31}
        breakpoints={{
          280: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
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
        {casesMap?.map((item) => (
          <SwiperSlide key={item.title}>
            <Link href={item?.linkCase ?? ""}>
              <div className="flex flex-col items-start justify-center max-w-[280px]">
                <div className="relative">
                  <Image
                    src={"/mocks/fsi/LastCases/lastCases1.png"}
                    alt={"item.image.alt"}
                    height={340}
                    width={280}
                  />
                </div>
                <p className="mt-6 mb-4 text-left text-theme-secondary-300 font-bold font-rajdhani text-4">
                  {item.tag}
                </p>
                <h3 className="font-rajdhani font-bold text-6 mb-3">
                  {item.title}
                </h3>
                <p className="font-roboto text-4">{item.description}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <div className="flex mt-8 justify-center">
          <NavigationButton name={name} />
        </div>
      </Swiper>
    </div>
  );
};

export default LCSlider;
