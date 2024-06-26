import { ButtonLink, ImageData } from "@/helpers/generalTypes";
export interface FormAnalyticalSolution {
  title: string;
  englishTitle: string;
  title_complement_1: string;
  englishTitleComplement_1: string;
  image_desktop: ImageData;
  form: Form;
}

export type Form = {
  title_form_step_1: string;
  title_form_step_complement_1: string;
  text_button_step_1: string;
  title_form_step_2: string;
  text_button_step_2: string;
  title_form_step_complement_2: string;
  information: Information;
  image_data_desktop: ImageData;
  image_data_mobile: ImageData;
  image_data: string;
  security_title: string;
  englishSecurityTitle: string;
  icon: ImageData;
  englishTextButtonStep_1: string;
  englishTextButtonStep_2: string;
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
