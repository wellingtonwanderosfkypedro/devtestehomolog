export interface IRegulation {
  title: string;
  subtitle: string;
  selos: IImage[];
  icons: IIcon[]
  slidesView: number;
}

export interface IImage {
  src: string;
  alt: string;
}

export interface IIcon {
  icon?: IImage;
  title: string;
  description: string;
}
