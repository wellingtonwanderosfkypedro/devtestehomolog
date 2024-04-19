export interface ISection {
    title: string;
    sections: {
        companies: ICompany[]
    }[];
    button: {
        text: string
        link: string
    }
}

interface ICompany {
    nome: string;
    desktop: IDevice;
    mobile: IDevice;
}

interface IDevice {
    src: string;
    width: number;
    height: number;
}