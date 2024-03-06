import Link from "next/link";
import { SolutionCard } from "../types/StrategicSolutionsTypes";

interface SolutionsCardProps {
  item: SolutionCard;
}

export function SolutionsCard({ item }: SolutionsCardProps) {
  const bgImage = { backgroundImage: `url(${item?.image_data?.url})` };

  return (
    <div
      style={bgImage}
      className=" max-w-[306px] h-[359px] flex flex-col justify-between pt-[50px] p-6 "
    >
      <>
        <h3 className="font-rajdhani font-bold text-xl text-white pb-4">
          {item.title}
        </h3>

        <span className="font-roboto text-white text-xs leading-[17.64px]">
          {item.description}
        </span>
      </>

      <Link
        className="font-roboto text-white text-xs leading-[17.64px] underline"
        href={item.link.url}
      >
        {item.link.title}
      </Link>
    </div>
  );
}
