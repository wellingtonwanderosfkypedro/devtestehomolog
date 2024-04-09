import Image from "next/image";

import { SubItem } from "./types/companyResolutionsTypes";

interface ListResolutionProps {
  subItem: SubItem;
}

const ListResolution = ({ subItem }: ListResolutionProps) => {
  const { url, width, height } = subItem.logo;

  return (
    <div className="h-[54px] flex gap-3 items-center">
      <Image alt={"Icon"} width={width} height={height} src={url} />
      <p className="lg:text-sm text-xs text-skin-base-accent font-roboto font-medium">
        {subItem.text}
      </p>
    </div>
  );
};

export default ListResolution;
