import { ImageData } from "@/helpers/generalTypes";

export interface TeamCarrouselType {
  tag: string;
  englishTag: string;
  title: string;
  englishTitle: string;
  subtitle: string;
  englishSubtitle: string;
  time: Member[];
}

export interface Member {
  name: string;
  position: string;
  image: ImageData;
}
