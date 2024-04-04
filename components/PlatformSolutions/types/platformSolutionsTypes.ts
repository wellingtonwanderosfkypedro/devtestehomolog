import { ButtonLink, ImageData } from "@/helpers/generalTypes";

export type PlatformSolution = {
  title: string;
  englishTitle: string;
  content: string;
  englishContent: string;
  content_2?: string | string[];
  englishContent_2?: string;
  button: ButtonLink;
  englishButton: ButtonLink;
  image: ImageData;
  isAList?: boolean;
  listItems?: ListItem[];
};

type ListItem = {
  text: string;
  englishText: string;
};
