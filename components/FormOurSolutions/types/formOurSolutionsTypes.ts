import { ButtonLink, ImageData } from "@/helpers/generalTypes";
export interface FormOurSolucion {
  title: string;
  title_complement_1: string;
  title_complement_2: string;
  description: string;
  image_desktop: ImageData;
  image_mobile: ImageData;
  form: Form;
}

export interface ProductBanner {
  tag: string;
  title: string;
  title_complement_1: string;
  title_complement_2: string;
  title_complement_3: string;
  title_complement_4: string;
  description: string;
  image_desktop: ImageData;
  image_mobile: ImageData;
  button: ButtonLink;
}

export type Form = {
  title_form_step_1: string;
  title_form_step_complement_1: string;
  text_button_step_1: string;
  title_form_step_2: string;
  text_button_step_2: string;
  title_form_step_complement_2: string;
  information: Information;
  icon: ImageData;
  security_title: string;
};

export type Information = {
  text: string;
  link_1: ButtonLink;
  link_2: ButtonLink;
};

export type Security = {
  icon: string;
  text: string;
};
