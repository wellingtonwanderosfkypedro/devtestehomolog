export interface ClienteExperience {
  title: string;
  description: string;
  items: Item[];
}

export type Item = {
  logo: Image;
  content: string;
};

type Image = {
  url: string;
  width: number;
  height: number;
};
