"use client"
import Image from "next/image";
import Link from "next/link";
import Richtext from "../RichText/RichText";
import { SpeakWithSpecialistCard } from "./components/SpeakWithSpecialistCard";
import { SpeakSpecialistType } from "./types/speakWithSpecialistTypes";
import { langStore } from "@/helpers/providers/getLang";
import { Arrow } from "./assets/Arrow";
import { useAccessibilityContext } from "@/contexts/AccessibilityContetxt";

export interface SpeakWithSpecialistData {
  data: SpeakSpecialistType;
}

export function SpeakWithSpecialist({ data }: SpeakWithSpecialistData) {
  const { cookieItem } = useAccessibilityContext();
  const isEnglish = langStore.getLang();
  
  const portugueseMessage = data?.button?.title ?? 'Fale com um especialista';
  const englishMessage = data?.englishButton?.title ?? 'Talk to a specialist';

  data.items = Object.values(data.items);

  return (
    <div className="bg-skin-distinct">
      <div className="maxDesktop:max-w-[1440px] mx-auto laptop:py-24 pt-12 pb-[34px] laptop:px-0 px-5 lg:px-24 flex laptop:flex-row flex-col justify-between self-start ">
        <div className="laptop:w-5/12 laptop:block hidden">
          <Image
            src={data.image.url}
            width={data.image.width}
            height={data.image.height}
            alt=""
          />
          <button className="buttonTalkToASpecialist w-10/12 bg-[#1B1B96] hover:bg-skin-default text-skin-primary	py-4 w-4/5 flex justify-center mx-auto mt-1.5 rounded-md text-base font-semibold border border-[#1B1B96] hover:text-[#1B1B96] transition-all duration-300">
            <Link className="flex justify-center items-center gap-6" href={"isEnglish ? data.englishButton.url : data.button.url"}>
              {isEnglish ? englishMessage : portugueseMessage}
              <Arrow />
            </Link>
          </button>
        </div>

        <div className="laptop:w-5/12 font-archivo">
          <div className="font-rajdhani text-left">
            <Richtext
              colorText="var(--theme-color-text-distinct)"
              text={
                "# **Inteligência analítica**  da Neoway para **Prevenção de Perdas** em todas as etapas do seu negócio."
              }
            />
          </div>

          <p className="text-lg text-skin-base-accent font-normal mt-6 max-tablet:text-base">
            {data.descricao}
          </p>

          {/* Container of cards with scroll */}
          <div className="laptop:max-h-[220px] laptop:overflow-y-auto mt-[26px] pr-2 scrollbar-webkit">
            {data?.items.map((item, key) => {
              return <SpeakWithSpecialistCard key={key} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
