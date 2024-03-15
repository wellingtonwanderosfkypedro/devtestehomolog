import { ButtonLink, ImageData } from "@/helpers/generalTypes";

export interface StrategicSolutionsType {
  title: string;
  description: string;
  items: SolutionCard[];
}

export interface SolutionCard {
  image: ImageData;
  title: string;
  description: string;
  link: ButtonLink;
}
