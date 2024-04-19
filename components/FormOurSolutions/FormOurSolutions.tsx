"use client";
import Image from "next/image";
import { useMedia } from "react-use";
import Form from "./Form/Form";
import TextArea from "./TextArea/TextArea";

import { isProductBanner } from "@/helpers/isProductBanner";
import ArrowDown from "@/public/arrow-down.svg";
import { TitleBanner } from "./TitleBanner";
import { FormOurSolucion, ProductBanner } from "./types/formOurSolutionsTypes";
import { useLangContext } from "@/helpers/providers/langCtx";

export interface FormOurSolucionsProps {
  data: FormOurSolucion | ProductBanner;
}

const FormOurSolutions = ({ data }: FormOurSolucionsProps) => {
  const { isEnglish } = useLangContext();

  const isMob = useMedia("(max-width: 500px)", false);

  const backgroundDesktop = {
    backgroundImage: `url(${data?.image_desktop?.url})`,
  };
  const backgroundMobile = {
    backgroundImage: `url(${data?.image_mobile?.url})`,
  };

  const typeOfContent = isProductBanner(data);

  return (
    <>
      <div
        style={isMob ? backgroundMobile : backgroundDesktop}
        className={` relative bg-no-repeat w-[100%] bg-cover desktop:h-[${data?.image_desktop?.height}px] bg-center`}
      >
        <div className="z-20 relative top-0 left-0  flex flex-wrap justify-center items-center pt-[120px]  mx-6 py-8  tablet:max-w-[95%] tablet:mx-auto laptop:max-w-[100%] lg:px-24 laptop:pt-[160px] laptop:flex-nowrap desktop:justify-between laptop:gap-6 maxDesktop:max-w-[1440px]">
          {!typeOfContent ? (
            <>
              <TextArea
                message1={
                  <>
                    {isEnglish ? data.englishTitle : data?.title}{" "}
                    <strong className="text-theme-secondary-300 laptop:flex laptop:w-[500px]">
                      {data?.title_complement_1}
                    </strong>{" "}
                    {data?.title_complement_2}
                  </>
                }
                message2={
                  <span className="text-skin-primary text-[12px] font-roboto font-normal leading-[18px] tablet:text-4.5 tablet:leading-[27px] laptop:flex laptop:w-[574px]">
                    {isEnglish ? data.englishDescription : data?.description}
                  </span>
                }
              />
              <Form form={data?.form} />
              <div className="absolute left-[45%] laptop:bottom-[16px] brightness-75 bottom-0">
                <Image src={ArrowDown} alt="icon scroll page" />
              </div>
            </>
          ) : (
            <TitleBanner data={data} />
          )}
        </div>
      </div>
    </>
  );
};

export default FormOurSolutions;
