export interface StrategicSolutionsType {
  title: string;
  description: string;
  items: SolutionCard[];
}

export interface SolutionCard {
  image_data: ImageData;
  title: string;
  description: string;
  link: Link;
}

interface Link {
  title: string;
  url: string;
}

interface ImageData {
  url: string;
  width: number;
  height: number;
}
