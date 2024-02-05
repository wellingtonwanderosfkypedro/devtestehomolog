import IconBlue from "@/assets/images/home/resolutions/icon-blue.svg";
import IconOrange from "@/assets/images/home/resolutions/icon-orange.svg";
import IconPurple from "@/assets/images/home/resolutions/icon-purple.svg";

const options = {
  purple: {
    icon: IconPurple,
  },
  blue: {
    icon: IconBlue,
  },
  orange: {
    icon: IconOrange,
  },
};

import Image from "next/image";

export interface ListProps {
  icon: "purple" | "blue" | "orange";
  text: string;
}
interface ListResolutionProps {
  list: ListProps[];
}

const ListResolution = ({ list = [] }: ListResolutionProps) => {
  return (
    <div className="pb-10 gap-5 h-[203px]  flex flex-col justify-between">
      {list.map(({ icon, text }) => (
        <div key={icon} className="flex gap-3 items-center">
          <Image
            alt="icon action"
            width={28}
            height={28}
            src={options[icon].icon}
          ></Image>
          <p className="lg:text-sm text-xs text-gray-200 font-roboto font-medium">{text}</p>
        </div>
      ))}
    </div>
  );
};

export default ListResolution;
