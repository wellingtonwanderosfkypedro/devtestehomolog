export interface Specialist {
    title: string;
    title_complement_1: string;
    title_complement_2: string;
    title_complement_3: string;
    image_data: ImageData;
    button: Button;
};

type Button = {
    target: string;
    title: string;
    url: string;
}

type ImageData = {
    url: string;
    width: number;
    height: number;
};
