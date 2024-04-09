import Image from "next/image";
import { Item } from "./types/CustomerExperienceTypes";
import Link from "next/link";

interface ItemCustomerExperienceProps {
  customer: Item;
  index: number;
}

const ItemCustomerExperience = ({
  customer,
  index,
}: ItemCustomerExperienceProps) => {
  const { title, description, icon, link } = customer;
  return (
    <div className="bg-white border border-solid border-gray-400 rounded-md pt-[28px] p-[18px] h-[266px] tablet:pt-[18px] tablet:h-[266px] drop-shadow-xl pb-5">
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
      <span className="text-3xl font-medium leading-[25.6px] text-theme-secondary-300 ">
        {title}
      </span>
      <p className="text-[16px] font-normal leading-[25.6px] text-gray-300 mt-4">
        {description}
      </p>
      {link && <Link href={link} className="text-theme-secondary-500 font-bold leading-6 font-roboto tablet:text-lg mini:text-[10.691px]">Saiba mais {">"}</Link>}
    </div>
  );
};

export default ItemCustomerExperience;
