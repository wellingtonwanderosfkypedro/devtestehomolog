import { Swiper, SwiperSlide } from "swiper/react";
import { SolutionsCard } from "./components/SolutionsCard";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export interface StrategicSolutionsData {
  title: string;
  description: string;
  solutionCards: SolutionCard[];
}

export interface SolutionCard {
  title: string;
  description: string;
  link: string;
  linkHref: string;
}

export function StrategicSolutions({
  title,
  description,
  solutionCards,
}: StrategicSolutionsData) {
  return (
    <div className="maxDesktop:max-w-[1440px] px-5  mx-auto  pt-12 pb-[34px] flex flex-col justify-between self-start  laptop:py-8 laptop:flex-row laptop:mt-[143px] laptop:mb-[56px] maxDesktop:px-0">
      <div className="mb-[30px] laptop:max-w-[502px] laptop:mr-[71px] laptop:mb-0">
        <h1 className="font-rajdhani text-2xl mb-[14px] text-[#28283F] font-bold laptop:text-[38px] laptop:mb-6">
          {title}
        </h1>
        <p className="w-full max-w-[100vw] font-roboto font-medium text-[#7B7B7B] text-lg  desktop:text-2xl  desktop:leading-10">
          {description}
        </p>
      </div>

      <div className="flex  flex-col items-center overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={32}
          breakpoints={{
            560: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
          className="h-[100%]"
          pagination={{
            clickable: true,
            bulletActiveClass: "sliderDotActive",
            bulletClass: "sliderDot",
          }}
        >
          {solutionCards.map((card, index) => (
            <SwiperSlide className="w-[306px] max-w-[306px]" key={index}>
              <SolutionsCard
                key={index}
                title={card.title}
                description={card.description}
                link={card.link}
                linkHref={card.linkHref}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}