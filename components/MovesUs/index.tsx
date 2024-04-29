import Image from "next/image";
import Richtext from "../RichText/RichText";

import { MoveUsTypes } from "./types/moveUsTypes";

interface MoveUsProps {
  data: MoveUsTypes;
}

export const MoveUs = ({ data }: MoveUsProps) => {
  return (
    <>
      <div className="max-w-screen-xl pb-8 mx-12 ml-12 lg:mt-24 lg:m-auto mt-9">
        <p className="text-orange-600 font-roboto text-3 font-semibold uppercase pb-4">
          {data.tag}
        </p>
        <p className="font-rajdhani text-6 text-gray-500 font-bold lg:text-11 leading-7 lg:leading-[3.9rem]">
          {data.title}
        </p>
      </div>
      <div className="max-w-screen-xl pb-8 mx-12 ml-12 lg:mt-24 lg:m-auto mt-9 flex flex-col-reverse lg:flex-row">
        <div className="mr-8">
          <p className="font-rajdhani text-4xl text-black-300 font-bold hidden lg:flex mb-4">
            {data.ourHistoryTitle}
          </p>
          <Richtext
            colorText="var(--theme-color-text-variation)"
            text={data.ourHistoryText}
          />
          {/* {linkButton && <Link href={linkButton} className="bg-theme-secondary-300 h-14 hidden lg:flex items-center justify-center text-white font-rajdhani laptop:w-[60%] text-base font-semibold w-full max-w-96 rounded-md mt-8">Fale com um especialista</Link>} */}
        </div>
        <Image
          className="mb-9 lg:mb-0"
          width={592}
          height={790}
          alt={"alt"}
          src={"/bf30207d77c1c196d5b5c3370876267c.png"}
        />
      </div>
    </>
  );
};
