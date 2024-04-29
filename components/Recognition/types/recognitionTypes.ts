import { ButtonLink, ImageData } from "@/helpers/generalTypes";

export interface RecognitionTypes {
  title: string;
  englishTitle: string;
  text: string;
  englishText: string;
  image: ImageData;
  button: ButtonLink;
  englishButton: ButtonLink;
  certifications: Certification[];
}

export interface Certification {
  text: string;
  englishText: string;
  icon: ImageData;
}
