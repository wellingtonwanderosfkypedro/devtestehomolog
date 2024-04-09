export interface IFourC {
    title: string
    description: string
    cards: ICard[]
    diligencias: IDiligencias
    specialist: ISpecialist
}

export interface ICard {
    title: string
    text: string
}

export interface IDiligencias {
    title: string
    text: string
    cards: IDiligenciasCard[]
    image: IImage
}

interface IDiligenciasCard {
    src: string
    title: string
    text: string
}

export interface ISpecialist {
    src: string
    title: string
    text: string
    button: IButton
}

interface IButton {
    text: string
    link: string
}

interface IImage {
    url: string
    alt: string
    width: number
    height: number
}