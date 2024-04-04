import { ButtonLink, ImageData } from "@/helpers/generalTypes";
export interface SpeakSpecialistType {
  isActive: any;
  titulo: string;
  englishTitle: string;
  descricao: string;
  englishDescription: string;
  image: ImageData;
  button: ButtonLink;
  englishButton: ButtonLink;
  items: SpeakWithSpecialistCard[];
}

export type SpeakWithSpecialistCard = {
  title: string;
  englishTitle: string;
  description: string;
  englishDescription: string;
  image: ImageData;
};
