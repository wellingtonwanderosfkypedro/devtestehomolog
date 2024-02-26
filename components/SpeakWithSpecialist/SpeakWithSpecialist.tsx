import Richtext from "../RichText/RichText";
import { SpeakWithSpecialistCard } from "./components/SpeakWithSpecialistCard";

export interface SpeakWithSpecialistData {
  title?: string;
  description?: string;
  speakWithSpecialistCards?: SpeakWithSpecialistCard[];
}

export interface SpeakWithSpecialistCard {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export function SpeakWithSpecialist({
  speakWithSpecialistCards,
  description,
}: SpeakWithSpecialistData) {
  return (
    <div className="bg-[#f4f4fa]">
      <div className="maxDesktop:max-w-[1440px] mx-auto laptop:py-8 pt-12 pb-[34px] laptop:px-0 px-5 lg:px-24 flex laptop:flex-row flex-col justify-between self-start ">
        <div className="laptop:w-5/12 laptop:block hidden">
          <img
            src="/banner-inteligencia-analistiva-prevencao-riscos.png"
            alt="banner-inteligencia-analistiva-prevencao-riscos"
          />
          <button className="w-10/12 bg-[#1B1B96] hover:bg-[#14147b] text-white	py-4 w-4/5 flex justify-center mx-auto mt-1.5 rounded-md text-base font-semibold">
            Fale com um especialista
          </button>
        </div>

        <div className="laptop:w-5/12 font-archivo">
          <div className="font-rajdhani text-left">
            <Richtext
              colorText="#000"
              text={
                "# **Inteligência analítica**  da Neoway para **Prevenção de Perdas** em todas as etapas do seu negócio."
              }
            />
          </div>
          {/* <h2 className="font-rajdhani laptop:text-5xl text-2xl laptop:leading-[58px] font-medium text-[#28283F]">
            <span className="font-bold text-[#1B1B96] "></span>{" "}
            <span className="font-bold text-[#1B1B96] "></span>{" "}
          </h2> */}

          <p className="text-lg text-gray-200 font-normal mt-6 max-tablet:text-base">
            {description}
          </p>

          {/* Container of cards with scroll */}
          <div className="laptop:max-h-[220px] laptop:overflow-y-auto mt-[26px] pr-2 scrollbar-webkit">
            {speakWithSpecialistCards?.map((item, key) => {
              return (
                <SpeakWithSpecialistCard
                  key={key}
                  title={item.title}
                  description={item.description}
                  imgAlt={item.imgAlt}
                  imgSrc={item.imgSrc}
                  linkHref={item.linkHref}
                  linkText={item.linkText}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
