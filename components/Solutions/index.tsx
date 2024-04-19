'use client';
import { useMedia } from "react-use";

import Image from "next/image";
import { ISolutions } from "./types/ISolutions";

const Solutions = ({ title, companies }: ISolutions) => {
  const isMob = useMedia("(max-width: 500px)", false);

  return (
    <section className="flex flex-col items-center maxDesktop:max-w-[1440px] px-6 mx-auto mini:py-10 mini:pb-0 laptop:py-12 laptop:pb-2 lg:px-24 mini:gap-2 tablet:gap-12 mini:pr-0">
      <h3 className="font-rajdhani font-bold text-2xl text-center mini:pr-6 tablet:pr-0">{title}</h3>
      <div className="flex w-full mini:overflow-x-scroll tablet:overflow-x-hidden">
        <div className="flex w-full justify-between border border-solid border-neutral-100 py-6 px-10 rounded-md mini:min-w-[792px]">
          {companies.map((company) => {
            const { src, width, height } = isMob
              ? company.mobile
              : company.desktop;
            return (
              <div key={company.nome} className="relative flex items-center" style={{ height: `${height}px` }}>
                <Image
                  src={src}
                  alt={company.nome}
                  width={width}
                  height={height}
                  className="object-contain tablet:object-none"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
