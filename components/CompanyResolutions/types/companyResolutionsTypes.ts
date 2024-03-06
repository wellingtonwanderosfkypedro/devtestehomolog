export interface CompanyResolution {
    title: string;
    sub_title: string;
    items: Item[];
}

export type Item = {
    title: string;
    description: string;
    sub_items: SubItem[];
    button: Button;
    color: "purple" | "blue" | "orange";
}

export type SubItem = {
    logo: number;
    text: string;
    image_data: Image | string;
}

type Button = {
    title: string;
    url: string;
    target: string;
}

type Image = {
    url: string;
    width: number;
    height: number;
}
