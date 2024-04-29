import Image from "next/image";

import { Certification } from "./types/recognitionTypes";

interface ItemCustomerExperienceProps {
  customer: Certification;
  index: number;
}

const ItemCustomerExperience = ({
  customer,
  index,
}: ItemCustomerExperienceProps) => {
  const { text, icon } = customer;
  return (
    <div className="bg-white border border-solid border-gray-400 rounded-md pt-[28px] p-[18px] h-72 tablet:pt-[18px] tablet:h-72 drop-shadow-xl pb-5">
      {icon && (
        <div className="mb-[10px]">
          <Image
            src={icon?.url}
            alt={`${index}`}
            width={icon?.width}
            height={icon?.height}
          />
        </div>
      )}
      <p className="text-base font-normal leading-[25.6px] text-gray-300 mt-4">
        {text}
      </p>
    </div>
  );
};

export default ItemCustomerExperience;
