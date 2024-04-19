import Image from "next/image";
import { IIcon } from "./types/IRegulation";

interface IRegulationCard {
  title: string;
  description: string;
  icon?: IIcon;
}

const RegulationCard = ({ title, description, icon }: IRegulationCard) => {
  if (!icon) return <></>;

  return (
    <div className="bg-white border border-solid border-gray-400 rounded-md pt-[28px] p-[18px] h-[266px] laptop:pt-[18px] laptop:h-[266px] drop-shadow-xl pb-5 flex flex-col relative">
      {icon && (
        <div className="mb-4">
          <Image
            src={icon.icon?.src ?? "/"}
            alt={icon.icon?.alt ?? "Regulation card"}
            width={60}
            height={60}
          />
        </div>
      )}
      <span
        className={
          "text-gray-500 font-semibold leading-tight font-archivo mini:text-lg laptop:text-lg mb-4"
        }
      >
        {title}
      </span>
      <p className={"text-gray-200 font-medium leading-relaxed font-roboto mini:text-xs laptop:text-base"}>{description}</p>
    </div>
  );
};

export default RegulationCard;
