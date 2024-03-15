import { ButtonLink, ImageData } from "@/helpers/generalTypes";

export interface FAQInterface {
  title: string;
  subTitle: string;
  description: string;
  button: ButtonLink;
  icon: ImageData;
  items: ItemsFAQ[];
}

type ItemsFAQ = {
  title: string;
  description: string;
};
