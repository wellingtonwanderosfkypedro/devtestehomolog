import Image from "next/image";
import { useMedia } from "react-use";
import BannerSpecialist from "@/assets/images/pages/banner-especialista.png";
import Link from "next/link";

const Arrow = () => {
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className=" group-hover:stroke-orange-300 transition-all duration-300 ease-in"
          d="M10 16L14 12L10 8"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const SpecialistBanner = () => {
  const isMob = useMedia("(max-width: 1024px)", false);

  return (
    <>
      {!isMob && (
        <div className="w-full flex p-24 pb-10 relative h-[550px] max-desktop:p-14 max-desktop:pb-10">
          <Image
            alt=""
            src={BannerSpecialist}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="w-full z-[2] flex flex-col justify-between max-desktop:pt-8">
            <div className=" flex font-rajdhani text-white max-w-[780px]">
              <h3 className="font-semibold text-5xl max-desktop:text-4xl max-desktop:max-w-[600px]">
                Soluções e dados únicos{" "}
                <span className="font-bold">
                  impulsionam a inteligência de negócios
                </span>{" "}
                para sua empresa{" "}
                <span className="text-orange-300 font-bold">
                  vender mais e perder menos.
                </span>
              </h3>
            </div>

            <Link
              href={""}
              className="bg-orange-300 max-w-[400px] w-full rounded-md py-4 flex gap-2 justify-center self-center border border-transparent group hover:bg-transparent hover:border-orange-300 transition-all duration-300 ease-in"
            >
              <span className="text-white font-semibold text-base font-archivo group-hover:text-orange-300 transition-all duration-300 ease-in">
                Fale com um especialista
              </span>
              <Arrow />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
