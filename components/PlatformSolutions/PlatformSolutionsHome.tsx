import Image from "next/image";
import Link from "next/link";

import { PlatformSolution } from "./types/platformSolutionsTypes";

interface PlatformSolutionsHomeProps {
  data: PlatformSolution;
}

const PlatformSolutionsHome = ({ data }: PlatformSolutionsHomeProps) => {
  const { title, content, content_2, button, image_data } = data;

  const typeOfContent =
    typeof content_2 === "string" || content_2?.length === 1;

  return (
    <div className="maxDesktop:max-w-[1440px] mx-auto py-8 lg:px-24">
      <div className="bg-white flex flex-col mx-6 tablet:flex-row tablet:max-w-[95%] tablet:mx-auto laptop:max-w-[100%] maxDesktop:justify-between">
        <div className="flex flex-col tablet:justify-center tablet:max-w-[40%] maxDesktop:max-w-[40%]">
          <h2 className="text-[25.92px] leading-[32.4px] text-gray-500 font-rajdhani font-bold tablet:leading-[50px] tablet:text-[40px]">
            {title}
          </h2>
          {content_2 && (
            <span className="text-[15px] leading-[22.5px] tablet:text-[20px] tablet:leading-[30px] pt-5 pb-5 text-gray-200 font-roboto font-normal">
              {content}
              <br /> <br />
              {typeOfContent ? (
                <>{content_2}</>
              ) : (
                <ul className="font-roboto text-blue-700 text-xl list-disc pl-8 font-semibold max-tablet:text-base max-tablet:pl-4">
                  {content_2?.map((item, key) => {
                    return <li key={key}>{item}</li>;
                  })}
                </ul>
              )}
            </span>
          )}
          <Link
            className="bg-white flex justify-center font-rajdhani text-[16px] font-semibold  text-blue-500 hover:bg-blue-500 hover:transition-all hover:text-white w-[76%] pt-4 pb-4 mt-4 border border-solid border-blue-500"
            target={data?.button?.target}
            href={button?.url}
          >
            {button?.title}
          </Link>
        </div>
        <div className="mt-9 tablet:mt-0 tablet:max-w-[60%] maxDesktop:max-w-[60%]">
          <Image
            src={image_data?.url ? image_data?.url : ""}
            width={image_data?.width}
            height={image_data?.height}
            alt="Device"
          />
        </div>
      </div>
    </div>
  );
};

export default PlatformSolutionsHome;
