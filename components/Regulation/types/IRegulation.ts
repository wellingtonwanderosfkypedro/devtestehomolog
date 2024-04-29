import { ImageData } from "@/helpers/generalTypes";

export interface IRegulation {
  title: string;
  englishTitle: string;
  text: string;
  englishText: string;
  selosCertificacoes: ImageData[];
  certifications: Certification[];
  slidesView: number;
}

export interface Certification {
  icon?: ImageData;
  title: string;
  englishTitle: string;
  text: string;
  englishText: string;
}
