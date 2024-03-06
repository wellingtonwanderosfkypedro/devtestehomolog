export interface ClienteExperience {
    title: string;
    description: string;
    items: Item[];
}

export type Item = {
    logo: number;
    content: string;
    image_data: Image;
}

type Image = {
    url: string;
    width: number;
    height: number;
}
