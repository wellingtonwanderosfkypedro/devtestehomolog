import { ButtonLink } from "@/helpers/generalTypes";

export interface CompanySegmentsData {
  title: string;
  description: string;
  items: Item[];
}

export type Item = {
  logo: ImageProps;
  title: string;
  link?: string;
  description?: string;
  button?: ButtonLink;
};

export type ImageProps = {
  url: string;
  width: number;
  height: number;
};
