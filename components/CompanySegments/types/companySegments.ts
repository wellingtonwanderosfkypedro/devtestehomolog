import { ButtonLink } from "@/helpers/generalTypes";

export interface CompanySegmentsData {
  title: string;
  englishTitle: string;
  description: string;
  englishDescription: string;
  items: Item[];
}

export type Item = {
  logo: ImageProps;
  title: string;
  englishTitle: string;
  link?: string;
  englishLink?: string;
  description?: string;
  englishDescription?: string;
  button?: ButtonLink;
  englishButton?: ButtonLink;
};

export type ImageProps = {
  url: string;
  width: number;
  height: number;
};
