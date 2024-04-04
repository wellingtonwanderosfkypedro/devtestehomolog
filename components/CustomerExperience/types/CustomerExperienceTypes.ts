export interface ClienteExperience {
  title: string;
  englishTitle: string;
  description: string;
  englishDescription: string;
  items: Item[];
}

export type Item = {
  logo: Image;
  content: string;
  englishContent: string;
};

type Image = {
  url: string;
  width: number;
  height: number;
};
