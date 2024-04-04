import { ButtonLink, ImageData } from "@/helpers/generalTypes";
export interface FormOurSolucion {
  title: string;
  englishTitle: string;
  title_complement_1: string;
  title_complement_2: string;
  description: string;
  englishDescription: string;
  image_desktop: ImageData;
  image_mobile: ImageData;
  form: Form;
}

export interface ProductBanner {
  tag: string;
  englishTag: string;
  title: string;
  englishTitle: string;
  title_complement_1: string;
  title_complement_2: string;
  title_complement_3: string;
  title_complement_4: string;
  description: string;
  englishDescription: string;
  image_desktop: ImageData;
  image_mobile: ImageData;
  button: ButtonLink;
  englishButton: ButtonLink;
}

export type Form = {
  title_form_step_1: string;
  title_form_step_complement_1: string;
  text_button_step_1: string;
  englishTextButtonStep_1: string;
  title_form_step_2: string;
  text_button_step_2: string;
  englishTextButtonStep_2: string;
  title_form_step_complement_2: string;
  information: Information;
  icon: ImageData;
  security_title: string;
  englishSecurityTitle: string;
};

export type Information = {
  text: string;
  englishText: string;
  link_1: ButtonLink;
  englishLink_1: ButtonLink;
  link_2: ButtonLink;
  englishLink_2: ButtonLink;
};

export type Security = {
  icon: string;
  text: string;
};
