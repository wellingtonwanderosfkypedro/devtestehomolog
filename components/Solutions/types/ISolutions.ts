export interface ISolutions {
    title: string;
    companies: ICompany[];
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