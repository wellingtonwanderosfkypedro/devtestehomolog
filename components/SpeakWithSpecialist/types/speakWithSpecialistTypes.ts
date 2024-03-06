export interface SpeakSpecialistType {
  titulo: string;
  descricao: string;
  image_data: ImageData;
  button: Button;
  items: SpeakWithSpecialistCard[];
}

export type SpeakWithSpecialistCard = {
  title: string;
  description: string;
  image_data: string;
};

interface ImageData {
  url: string;
  width: number;
  height: number;
}

interface Button {
  title: string;
  url: string;
  target: string;
}
