'use client';
import Link from "next/link";
import Richtext from "../RichText/RichText";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import ItemCustomerExperience from "./ItemCustomerExperience";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Item } from "../OurValues/types/CustomerExperienceTypes";
import NavigationButton from "../Navigation";

export default function Recognition({ title, description, src, alt, linkButton, items }: Readonly<{ title: string, description: string, src: string, alt: string, linkButton?: string, items: Omit<Item, 'title'>[]; }>) {

  const name = "Recognition";

  return (
    <>
      <div className="max-w-screen-xl w-full pb-8 pl-5 lg:mt-24 lg:m-auto mt-9 flex flex-col-reverse lg:flex-row">
        <div className="mr-8">
          <p className="font-rajdhani text-10 text-black-300 font-bold lg:flex mb-4">{title}</p>
          <div className="font-roboto text-4">
            <Richtext colorText="var(--theme-color-text-variation)" text={description} />
          </div>
          {linkButton && <Link href={linkButton} className="bg-theme-secondary-300 h-14 hidden lg:flex items-center justify-center text-white font-rajdhani laptop:w-[60%] text-base font-semibold w-full max-w-96 rounded-md mt-8">Fale com um especialista</Link>}
        </div>
        <Image className="hidden lg:flex" width={592} height={790} alt={alt} src={src} />
      </div>
      <div className="max-w-screen-xl m-auto lg:mt-14 mt-9 lg:px-0 px-6">
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
              slidesPerView: 2.4,
            },
          }}
          navigation={{
            nextEl: `.swiper-button-next-custom-${name}`,
            prevEl: `.swiper-button-prev-custom-${name}`,
            disabledClass:
              "bg-theme-secondary-300 stroke-white hover:bg-white disabled-swiper-track",
          }}
          className={`!pb-7`}
        >
          {items?.map((customer, index) => (
            <SwiperSlide key={customer.description}>
              <ItemCustomerExperience customer={customer} index={index} />
            </SwiperSlide>
          ))}
          <div className="flex mt-8 lg:hidden justify-center">
            <NavigationButton name={name} />
          </div>
        </Swiper>
      </div>
    </>
  )
}