import { ButtonLink, ImageData } from "@/helpers/generalTypes";

export interface BannerProps {
  tag: string;
  englishTag: string;
  title: string;
  englishTitle: string;
  description: string;
  englishDescription: string;
  buttonFaleConosco: ButtonLink;
  englishButtonFaleConosco: ButtonLink;
  buttonSonhecaSolucoes: ButtonLink;
  englishButtonSonhecaSolucoes: ButtonLink;
  image_desktop: ImageData;
  image_mobile: ImageData;
  onlyMobileButton?: boolean;
}

export interface BannerButton {
  text: string;
  url?: string;
  transparent?: boolean;
}

export interface BannerImage {
  url: string;
  height: string;
}
