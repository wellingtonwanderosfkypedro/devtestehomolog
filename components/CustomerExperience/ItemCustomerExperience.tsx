import Image from "next/image";
import { Item } from "./types/CustomerExperienceTypes";

interface ItemCustomerExperienceProps {
  customer: Item;
  index: number;
}

const ItemCustomerExperience = ({
  customer,
  index,
}: ItemCustomerExperienceProps) => {
  const { content, image_data } = customer;
  return (
    <div className="bg-white border border-solid border-gray-400 rounded-md pt-[28px] p-[18px] h-[387px] tablet:pt-[18px] tablet:h-[350px] tablet:w-[400px]">
      <div className="tablet:mb-[30px]">
        <Image
          src={image_data?.url}
          alt={`${index}`}
          width={image_data?.width}
          height={image_data?.height}
        />
      </div>
      <span className="text-[16px] font-medium leading-[25.6px] text-neutral-300">
        “
      </span>
      <p className="text-[16px] font-medium leading-[25.6px] text-neutral-300">
        {content}”
      </p>
    </div>
  );
};

export default ItemCustomerExperience;
