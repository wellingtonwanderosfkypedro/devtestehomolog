import { useEffect, useState } from "react";
import Image from "next/image";

import { SubItem } from "./types/companyResolutionsTypes";

interface ListResolutionProps {
  subItem: SubItem;
}

const ListResolution = ({ subItem }: ListResolutionProps) => {

  const [valuesImage, setValuesImage] = useState({ width: 28, height: 28, url: '' });

  useEffect(() => {
    if (typeof subItem.image_data === 'string') {
      setValuesImage({ width: 28, height: 28, url: subItem?.image_data });
    }
  }, [subItem?.image_data]);

  const { url, width, height } = typeof subItem?.image_data === 'string' ? valuesImage : subItem?.image_data;

  return (
    <div key={subItem?.logo} className="h-[54px] flex gap-3 items-center">
      <Image
        alt={'Icon'}
        width={width}
        height={height}
        src={url}
      />
      <p className="lg:text-sm text-xs text-gray-200 font-roboto font-medium">{subItem.text}</p>
    </div>
  );
};

export default ListResolution;
