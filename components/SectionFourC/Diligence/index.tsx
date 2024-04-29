import Image from "next/image";
import { IDiligencias } from "../types/ISectionFourC";

const Diligence = ({ diligencias }: { diligencias: IDiligencias }) => {
  return (
    <div className="flex mini:flex-col-reverse tablet:flex-row maxDesktop:max-w-[1440px] px-6 mx-auto mini:py-10 laptop:py-10 mini:pb-16 mini:pt-0 laptop:pb-[150px] lg:px-24 mini:gap-6 tablet:gap-20">
      <div className="tablet:max-w-[42%]">
        <h3 className="font-rajdhani font-bold mini:text-2xl tablet:text-4xl leading-tight text-gray-500 mb-6">
          {diligencias.diligenciasTitle}
        </h3>
        <p className="font-roboto text-neutral-300 leading-relaxed mini:text-sm tablet:text-lg">
          {diligencias.diligenciasText}
        </p>
        <div className="mini:gap-6 tablet:gap-10 flex flex-col mt-12">
          {diligencias.cards.map((card) => (
            <div
              key={card.title}
              className="flex gap-4 mini:pb-6 mini:border-b mini:border-gray-600 last-of-type:border-0 tablet:border-0 last-of-type:pb-0"
            >
              <div className="flex items-center justify-center mini:p-1 tablet:p-2 border border-gray-600 rounded mini:h-[44px] tablet:h-[48px] mini:w-[44px] tablet:w-[48px]">
                <Image
                  src={card.icon.url}
                  alt={card.title}
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <h4 className="text-theme-primary-500 leading-tight mini:text-2xl tablet:text-3xl font-bold font-rajdhani">
                  {card.title}
                </h4>
                <p className="font-roboto leading-relaxed mini:text-base tablet:text-lg text-gray-200 tablet:max-w-[355px] mt-[6px]">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Image
          src={diligencias.image.url}
          alt={diligencias.image.alt ?? ""}
          width={diligencias.image.width}
          height={diligencias.image.height}
        />
      </div>
    </div>
  );
};

export default Diligence;
