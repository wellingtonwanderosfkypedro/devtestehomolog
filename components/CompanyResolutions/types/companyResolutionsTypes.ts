import { ButtonLink, ImageData } from "@/helpers/generalTypes";

export interface CompanyResolution {
  title: string;
  englishTitle: string;
  sub_title: string;
  englishSubTitle: string;
  items: Item[];
}

export type Item = {
  title: string;
  englishTitle: string;
  description: string;
  englishDescription: string;
  sub_items: SubItem[];
  button: ButtonLink;
  englishButton: ButtonLink;
  color: "purple" | "blue" | "orange";
};

export type SubItem = {
  logo: ImageData;
  text: string;
  englishText: string;
};
