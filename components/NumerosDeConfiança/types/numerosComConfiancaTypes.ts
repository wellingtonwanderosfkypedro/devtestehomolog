import { ImageData } from "@/helpers/generalTypes";

export interface numerosComConfiancaTypes {
  title: string;
  englishTitle: string;
  subtitle: string;
  englishSubtitle: string;
  ourNumbers: OurNumbers[];
  image: ImageData;
}

interface OurNumbers {
  quantity: string;
  description: string;
  englishDescription: string;
}
