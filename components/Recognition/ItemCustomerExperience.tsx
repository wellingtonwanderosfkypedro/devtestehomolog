import Image from "next/image";
import Link from "next/link";
import { Item } from "../OurValues/types/CustomerExperienceTypes";

interface ItemCustomerExperienceProps {
  customer: Omit<Item, 'title'>;
  index: number;
}

const ItemCustomerExperience = ({
  customer,
  index,
}: ItemCustomerExperienceProps) => {
  const { description, icon, link } = customer;
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
        {description}
      </p>
      {link && <Link href={link} className="text-orange-500 font-bold leading-6 font-roboto tablet:text-lg mini:text-[10.691px]">Saiba mais {">"}</Link>}
    </div>
  );
};

export default ItemCustomerExperience;
