export type PlatformSolution = {
    title: string;
    content: string;
    content_2?: string | string[];
    button: Button;
    image_data: Image;
}

type Button = {
    target: string;
    title: string;
    url: string;
}

type Image = {
    url: string;
    width: number;
    height: number;
}
