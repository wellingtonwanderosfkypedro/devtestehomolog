export interface ClienteExperience {
  title: string;
  description: string;
  items: Item[];
}

export type Item = {
  icon?: Image;
  title: string;
  description: string;
  link?: string;
};

type Image = {
  url: string;
  width: number;
  height: number;
};
