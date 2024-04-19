import Image from "next/image";
import { Item } from "./types/CustomerExperienceTypes";
import Link from "next/link";

interface ItemCustomerExperienceProps {
  customer: Item;
  index: number;
  fsiStyle?: boolean;
}

const ItemCustomerExperience = ({
  customer,
  index,
  fsiStyle,
}: ItemCustomerExperienceProps) => {
  const { title, description, icon, link } = customer;

  const fsiTitle = fsiStyle
    ? "mini:text-gray-500 mini:font-bold mini:leading-tight mini:font-rajdhani mini:text-lg tablet:text-2xl"
    : "";
  const fsiText = fsiStyle
    ? "mini:text-gray-200 mini:font-normal mini:leading-normal mini:font-roboto tablet:text-base mini:text-sm"
    : "";

  return (
    <div className="bg-white border border-solid border-gray-400 rounded-md pt-[28px] p-[18px] h-[266px] tablet:pt-[18px] tablet:h-[266px] drop-shadow-xl pb-5 flex flex-col relative">
      {fsiStyle && (
        <span
          className="absolute w-full h-1.5 border-top bg-theme-primary-500 top-0 start-0"
          style={{
            borderRadius: "6px 6px 0px 0px",
          }}
        />
      )}
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
      <span
        className={`text-8 font-medium leading-[25.6px] text-theme-secondary-300 ${fsiTitle}`}
      >
        {title}
      </span>
      <p
        className={`text-4 font-normal leading-[25.6px] text-gray-300 mt-4 ${fsiText}`}
      >
        {description}
      </p>
      {link && (
        <Link
          href={link}
          className="text-theme-secondary-500 font-bold leading-6 font-roboto tablet:text-lg mini:text-[10.691px] mt-auto"
        >
          Saiba mais {">"}
        </Link>
      )}
    </div>
  );
};

export default ItemCustomerExperience;
