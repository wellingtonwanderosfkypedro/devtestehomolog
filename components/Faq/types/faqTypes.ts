import { ButtonLink, ImageData } from "@/helpers/generalTypes";

export interface FAQInterface {
  title: string;
  englishTitle: string;
  subTitle: string;
  englishSubTitle: string;
  description: string;
  englishDescription: string;
  button: ButtonLink;
  englishButton: ButtonLink;
  icon: ImageData;
  items: ItemsFAQ[];
}

type ItemsFAQ = {
  title: string;
  englishTitle: string;
  description: string;
  englishDescription: string;
};
