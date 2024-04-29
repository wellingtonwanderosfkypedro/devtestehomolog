import { ImageData } from "@/helpers/generalTypes";

export interface ConfiamNeowayTypes {
  title: string;
  englishTitle: string;
  sliderEmpresas: ICompany[];
}

interface ICompany {
  nameCompany: string;
  icon: ImageData;
}

interface IDevice {
  src: string;
  width: number;
  height: number;
}
