import { ButtonLink, ImageData } from "@/helpers/generalTypes";
export interface SpeakSpecialistType {
  titulo: string;
  descricao: string;
  image: ImageData;
  button: ButtonLink;
  items: SpeakWithSpecialistCard[];
}

export type SpeakWithSpecialistCard = {
  title: string;
  description: string;
  image: ImageData;
};
