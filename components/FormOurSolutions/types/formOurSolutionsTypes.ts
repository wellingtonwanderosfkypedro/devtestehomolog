export interface FormOurSolucion {
    title: string;
    title_complement_1: string;
    title_complement_2: string;
    description: string;
    image_desktop: number;
    image_mobile: number;
    image_data_desktop: ImageData;
    image_data_mobile: ImageData;
    form: Form;
};

export interface ProductBanner {
    tag: string;
    title: string;
    title_complement_1: string;
    title_complement_2: string;
    title_complement_3: string;
    title_complement_4: string;
    description: string;
    image_desktop: number;
    image_mobile: number;
    button: Button;
    image_data_desktop: ImageData;
    image_data_mobile: ImageData;
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


type Button = {
    target: string;
    title: string;
    url: string;
}

export type ImageData = {
    url: string;
    width: number;
    height: number;
};

export type Security = {
    icon: string;
    text: string;
}