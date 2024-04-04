"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SolutionsCard } from "./components/SolutionsCard";
import { StrategicSolutionsType } from "./types/StrategicSolutionsTypes";
import { useLangContext } from "@/helpers/providers/langCtx";

export interface StrategicSolutionsProps {
  data: StrategicSolutionsType;
}

export function StrategicSolutions({ data }: StrategicSolutionsProps) {
  const { isEnglish } = useLangContext();
  data.items = Object.values(data.items);

  return (
    <div className="maxDesktop:max-w-[1440px] px-5  mx-auto  pt-12 pb-[34px] flex flex-col justify-between self-start  laptop:py-8 laptop:flex-row laptop:mt-[143px] laptop:mb-[56px] maxDesktop:px-0 strategicSolutions">
      <div className="mb-[30px] laptop:max-w-[502px] laptop:mr-[71px] laptop:mb-0">
        <h1 className="font-rajdhani text-2xl mb-[14px] text-[#28283F] font-bold laptop:text-[38px] laptop:mb-6">
          {isEnglish ? data.englishTitle : data.title}
        </h1>
        <p className="w-full max-w-[100vw] font-roboto font-medium text-[#7B7B7B] text-lg  desktop:text-2xl  desktop:leading-10">
          {isEnglish ? data.englishDescription : data.description}
        </p>
      </div>

      <div className="flex  flex-col items-center overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={32}
          breakpoints={{
            560: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2.4,
            },
            1024: {
              slidesPerView: 2.4,
            },
          }}
          className="h-[100%]"
          pagination={{
            clickable: true,
            bulletActiveClass: "sliderDotActive",
            bulletClass: "sliderDot",
          }}
        >
          {data.items.map((card, index) => (
            <SwiperSlide className="w-[306px] max-w-[306px]" key={index}>
              <SolutionsCard key={index} item={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
