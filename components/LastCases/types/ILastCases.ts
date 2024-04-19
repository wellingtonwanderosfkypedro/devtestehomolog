import { IImage } from "@/components/Regulation/types/IRegulation";

export interface ILastCases {
    title: string;
    link: string;
    cases: Case[];
}

export interface Case {
    imageDescription: string;
    title: string;
    description: string;
    image: IImage;
}