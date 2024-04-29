"use client";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import NavigationButton from "../Navigation";
import { TeamCarrouselType, Member } from "./types/teamCarrouselTypes";

interface TeamProps {
  data: TeamCarrouselType;
}

export function TeamCarrousel({ data }: TeamProps) {
  const { time } = data;
  const name = "TeamCarrousel";

  const persons = Object.values(time);

  return (
    <div className="px-6 lg:px-28 py-12 bg-theme-primary-500">
      <div className="max-w-screen-xl m-auto">
        <div className="flex flex-col lg:flex-row lg:items-center mb-16">
          <div className="flex-[1]">
            <p className="text-4 font-bold font-rajdhani text-theme-secondary-300">
              {data?.tag}
            </p>
            <p className="text-9 lg:text-10 font-bold text-white font-rajdhani text-left  mb-4 lg:mb-0">
              {data?.title}
            </p>
          </div>
          <p className="flex-[1] text-white font-roboto text-lg">
            {data?.subtitle}
          </p>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={33}
          breakpoints={{
            560: {
              slidesPerView: 1.3,
            },
            768: {
              slidesPerView: 2.3,
            },
            1024: {
              slidesPerView: 3.3,
            },
          }}
          navigation={{
            nextEl: `.swiper-button-next-custom-${name}`,
            prevEl: `.swiper-button-prev-custom-${name}`,
            disabledClass:
              "bg-disabled border-disabled stroke-white disabled-swiper-track",
          }}
        >
          {persons.map((person) => {
            return (
              <SwiperSlide
                key={person.name}
                className="max-w-96 rounded-md overflow-hidden relative"
              >
                <PersonCard {...person} key={person.name} />
              </SwiperSlide>
            );
          })}
          <div className="flex mt-8 lg:hidden justify-center">
            <NavigationButton name={name} />
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export function PersonCard({ name, image, position }: Member) {
  return (
    <div className="overflow-hidden">
      <Image alt={"image.alt"} src={"/person1.png"} width={384} height={386} />
      <div className="bg-gradient-to-t from-black-100 from-20% py-4 absolute bottom-0 z-10 w-full h-full">
        <div className="flex h-fit w-fit px-4 py-1 rounded-md items-center font-archivo text-white bg-black-300 absolute bottom-4 left-4">
          <p>{name}</p> <span className="mx-2">/</span>{" "}
          <p className="text-blue-600">{position}</p>
        </div>
      </div>
    </div>
  );
}
