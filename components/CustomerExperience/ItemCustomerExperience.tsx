import Image from "next/image";
import { Item } from "./types/CustomerExperienceTypes";
import { langStore } from "@/helpers/providers/getLang";

interface ItemCustomerExperienceProps {
  customer: Item;
  index: number;
}

const ItemCustomerExperience = ({
  customer,
  index,
}: ItemCustomerExperienceProps) => {
  const isEnglish = langStore.getLang();
  const { content, englishContent, logo } = customer;
  return (
    <div className="bg-white border border-solid border-gray-400 rounded-md pt-[28px] p-[18px] h-[387px] tablet:pt-[18px] tablet:h-[350px] tablet:w-[400px]">
      <div className="tablet:mb-[30px]">
        <Image
          src={logo?.url}
          alt={`${index}`}
          width={logo?.width}
          height={logo?.height}
        />
      </div>
      <span className="text-[16px] font-medium leading-[25.6px] text-neutral-300">
        “
      </span>
      <p className="text-[16px] font-medium leading-[25.6px] text-neutral-300">
        {isEnglish ? englishContent : content} ”
      </p>
    </div>
  );
};

export default ItemCustomerExperience;
