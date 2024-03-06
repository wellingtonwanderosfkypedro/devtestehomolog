export interface CompanySegmentsData {
    title: string;
    description: string;
    items: Item[];
}

export type Item = {
    logo: number;
    title: string;
    link?: string;
    description?: string;
    image_data: ImageProps | string;
    button?: Button;
}

export type ImageProps = {
    url: string;
    width: number;
    height: number;
}

type Button = {
    target: string;
    title: string;
    url: string;
}
