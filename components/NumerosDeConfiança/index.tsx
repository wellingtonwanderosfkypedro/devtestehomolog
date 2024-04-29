import Image from "next/image";
import { numerosComConfiancaTypes } from "./types/numerosComConfiancaTypes";

export const NumerosComConfianca = ({
  title,
  image,
  ourNumbers,
  subtitle,
}: numerosComConfiancaTypes) => {
  return (
    <>
      <section className="maxDesktop:max-w-[1440px] px-6 mx-auto">
        <div className="flex justify-between rounded-md  border-gray-600 border max-laptop:flex-col">
          <div className="font-rajdhani py-11 pl-10 pr-6 max-desktop:w-[50%] max-laptop:w-full max-tablet:px-4 max-tablet:py-6">
            <h4 className="text-10 font-bold mb-3 text-skin-base max-tablet:text-5">
              {title}
            </h4>
            <p className="font-semibold max-w-[80%] text-5 mt-3 text-skin-base max-tablet:text-3">
              {subtitle}
            </p>
            <div className="flex border-t border-b border-gray-600 mt-6">
              {ourNumbers.map((item, key) => {
                return (
                  <div
                    key={key}
                    className={`py-5 ${
                      key === 1 && " border-l border-r border-gray-600"
                    } ${key !== 0 && "pl-10 max-tablet:pl-5"} ${
                      key !== 2 && "pr-10 max-tablet:pr-5"
                    }`}
                  >
                    <div className="w-40 max-tablet:max-w-28">
                      <p className="font-semibold text-[56px] text-theme-primary-500 mb-2 max-tablet:text-[28px]">
                        {item.quantity}
                      </p>
                      <span className="font-roboto text-skin-variation-light text-[18px] max-tablet:text-[10px]">
                        {item.description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Image
            className="max-desktop:w-[40%] max-laptop:w-full"
            alt=""
            src={image.url}
            width={546}
            height={432}
          />
        </div>
      </section>
    </>
  );
};
