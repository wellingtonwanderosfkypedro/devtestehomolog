import { ButtonLink, ImageData } from "@/helpers/generalTypes";

export interface TrustedNeowayTypes {
  title: string;
  englishTitle: string;
  sliderEmpresas: ImageData[];
  button: ButtonLink;
  englishButton: ButtonLink;
}

interface ICompany {
  nome: string;
  desktop: IDevice;
  mobile: IDevice;
}

interface IDevice {
  src: string;
  width: number;
  height: number;
}
