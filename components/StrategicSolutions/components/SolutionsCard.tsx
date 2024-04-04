import Link from "next/link";
import { SolutionCard } from "../types/StrategicSolutionsTypes";
import { langStore } from "@/helpers/providers/getLang";

interface SolutionsCardProps {
  item: SolutionCard;
}

export function SolutionsCard({ item }: SolutionsCardProps) {
  const isEnglish = langStore.getLang();
  const bgImage = { backgroundImage: `url(${item?.image?.url})` };

  return (
    <div
      style={bgImage}
      className=" max-w-[306px] h-[359px] flex flex-col justify-between pt-[50px] p-6 "
    >
      <>
        <h3 className="font-rajdhani font-bold text-xl text-white pb-4">
          {isEnglish ? item.englishTitle : item.title}
        </h3>

        <span className="font-roboto text-white text-xs leading-[17.64px]">
          {isEnglish ? item.englishDescription : item.description}
        </span>
      </>

      <Link
        className="font-roboto text-white text-xs leading-[17.64px] underline"
        href={isEnglish ? item?.englishLink?.url : item?.link?.url}
      >
        {isEnglish ? item.englishLink.title : item.link.title}
      </Link>
    </div>
  );
}
