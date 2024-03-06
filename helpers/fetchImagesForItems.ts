import { fetchImage } from "./fetchImage";
import { objectValuesToArray } from "./objectValuesToArray";

export const fetchImagesForItems = async (items:any) => {
    const toArray = objectValuesToArray(items)
    const itemsWithImages = await Promise.all(toArray.map(async (item:any) => {
      const idImage = item?.logo ? item?.logo : item?.image;
      const data = await fetchImage(item, idImage, 'image_data');
      return data;
    }));
    return itemsWithImages;
};