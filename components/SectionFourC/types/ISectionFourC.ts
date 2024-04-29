import { ButtonLink, ImageData } from "@/helpers/generalTypes";

export interface ISectionFourC {
  title: string;
  englishTitle: string;
  subtitle: string;
  englishSubtitle: string;
  cards: ICard[];
  itemsDiligencias: IDiligencias;
  neowayAjudaGerarResultado: ISpecialist;
}

export interface ICard {
  title: string;
  englishTitle: string;
  text: string;
  englishText: string;
}

export interface IDiligencias {
  diligenciasTitle: string;
  diligenciasEnglishTitle: string;
  diligenciasText: string;
  diligenciasEnglishText: string;
  cards: IDiligenciasCard[];
  image: ImageData;
}

interface IDiligenciasCard {
  icon: ImageData;
  title: string;
  englishTitle: string;
  text: string;
  englishText: string;
}

export interface ISpecialist {
  logo: ImageData;
  title: string;
  englishTitle: string;
  text: string;
  englishText: string;
  button: ButtonLink;
  englishButton: ButtonLink;
}

interface IButton {
  text: string;
  link: string;
}
