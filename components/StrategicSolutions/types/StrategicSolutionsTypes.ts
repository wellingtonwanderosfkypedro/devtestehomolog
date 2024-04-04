import { ButtonLink, ImageData } from "@/helpers/generalTypes";

export interface StrategicSolutionsType {
  title: string;
  englishTitle: string;
  description: string;
  englishDescription: string;
  items: SolutionCard[];
}

export interface SolutionCard {
  image: ImageData;
  title: string;
  englishTitle: string;
  description: string;
  englishDescription: string;
  link: ButtonLink;
  englishLink: ButtonLink;
}
