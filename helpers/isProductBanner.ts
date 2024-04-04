import { ProductBanner } from "@/components/FormOurSolutions/types/formOurSolutionsTypes";

export const isProductBanner = (data: any): data is ProductBanner => {
  if (data?.tag) {
    return true;
  }
  return false;
};
