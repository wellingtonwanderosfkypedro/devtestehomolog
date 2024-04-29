import { ImageData, ButtonLink } from "@/helpers/generalTypes";

export interface ILastCases {
  title: string;
  englishTitle: string;
  button: ButtonLink;
  englishBtton: ButtonLink;
  cases: Case[];
}

export interface Case {
  linkCase: string;
  tag: string;
  englishTag: string;
  title: string;
  englishTitle: string;
  description: string;
  englishDescription: string;
  imageCase: ImageData;
}
