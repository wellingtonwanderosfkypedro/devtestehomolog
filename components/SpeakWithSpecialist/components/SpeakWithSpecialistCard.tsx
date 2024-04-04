import Image from "next/image";
import Link from "next/link";
import { SpeakWithSpecialistCard } from "../types/speakWithSpecialistTypes";
import { langStore } from "@/helpers/providers/getLang";

interface ItemCard {
  item: SpeakWithSpecialistCard;
}

export function SpeakWithSpecialistCard({ item }: ItemCard) {
  const isEnglish = langStore.getLang();

  return (
    <div className="flex flex-row items-start bg-white rounded-lg py-4 px-6 mb-8 gap-6 max-tablet:px-4 max-tablet:gap-4">
      <Image src={item.image.url} alt={""} width={56} height={56} />

      <div className="flex flex-col grow justify-start ">
        <h3 className="font-semibold max-tablet:text-base">
          {isEnglish ? item.englishTitle : item.title}
        </h3>
        <p className="text-lg text-gray-200 font-normal max-tablet:text-sm">
          {isEnglish ? item.englishDescription : item.description}
        </p>
        <Link
          href={""}
          className="hidden max-[1024px]:block font-roboto text-blue-400 underline text-sm font-normal mt-1"
        >
          {isEnglish ? "Read More" : "Ler Mais"}
        </Link>
      </div>
    </div>
  );
}
