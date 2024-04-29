import { ButtonLink, ImageData } from "@/helpers/generalTypes";

export interface OurValuesType {
  title: string;
  englishTitle: string;
  description?: string;
  englishDescription?: string;
  items: Item[];
}

export type Item = {
  title: string;
  englishTitle: string;
  text: string;
  englishText: string;
  link?: ButtonLink;
  fsiStyle?: boolean;
  icon?: ImageData;
};
