import Link from "next/link";
import { ILastCases } from "./types/ILastCases";
import LCSlider from "./LCSlider";

const LastCases = ({ title, link, cases }: ILastCases) => {

  return (
    <section className="maxDesktop:max-w-[1440px] px-6 mx-auto mini:py-10 laptop:py-10 mini:pb-16 mini:pt-0 laptop:pb-[150px] lg:px-24 mini:gap-6 tablet:gap-20">
      <div className="flex mini:flex-col tablet:flex-row justify-between items-center w-full mb-10">
        <h3 className="font-rajdhani font-bold mini:text-6 tablet:text-9 leading-tight text-gray-500 max-w-[356px]">
          {title}
        </h3>
        <Link
          href={link}
          className="text-orange-500 font-rajdhani leading-tight tablet:text-lg mini:text-4 mt-20"
        >
          <span className="text-gray-500 underline-offset-1 underline font-bold">Veja nossos cases</span> {">"}
        </Link>
      </div>
      <LCSlider cases={cases} slidesView={4} />
    </section>
  );
};

export default LastCases;
