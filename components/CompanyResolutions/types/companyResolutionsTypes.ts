import { ButtonLink, ImageData } from "@/helpers/generalTypes";

export interface CompanyResolution {
  title: string;
  sub_title: string;
  items: Item[];
}

export type Item = {
  title: string;
  description: string;
  sub_items: SubItem[];
  button: ButtonLink;
  color: "purple" | "blue" | "orange";
};

export type SubItem = {
  logo: ImageData;
  text: string;
};
