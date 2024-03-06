export interface FormAnalyticalSolution {
    title: string;
    title_complement_1: string;
    image_desktop: number;
    image_data_desktop: ImageData;
    form: Form;
};

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
}

export type Information = {
    text: string;
    link_1: Link;
    link_2: Link;
};

type Link = {
    title: string;
    url: string;
    target: string; 
};

export type ImageData = {
    url: string;
    width: number;
    height: number;
};

export type Security = {
    icon: string;
    text: string;
}