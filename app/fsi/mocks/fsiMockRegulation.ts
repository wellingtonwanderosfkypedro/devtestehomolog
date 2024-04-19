import { IRegulation } from "@/components/Regulation/types/IRegulation";

export const fsiMockRegulation: IRegulation = {
    title: "Garantimos o cumprimento de regras de conformidade e regulação",
    subtitle: "Desenvolvemos projetos em conformidade comum conjunto de regras legais, para garantirsegurança ao seu negócio. A Neoway é certificada pelo ISO 37001 (Sistema de Gestão Antissuborno),ISO 27001 (Segurança da Informação), ISO 27017e 27018 (Segurança para Serviços em Nuvem).",
    slidesView: 4,
    selos: [
        {
            alt:"Selo 1",
            src: "/mocks/fsi/Regulation/regulation-selo1.png"
        },
        {
            alt:"Selo 2",
            src: "/mocks/fsi/Regulation/regulation-selo2.png"
        },
        {
            alt:"Selo 3",
            src: "/mocks/fsi/Regulation/regulation-selo3.png"
        },
        {
            alt:"Selo 4",
            src: "/mocks/fsi/Regulation/regulation-selo4.png"
        },
    ],
    icons: [
        {
            title: "BACEN 3978",
            description: "Combate à lavagem de dinheiro e financiamento do terrorismo",
            icon: {
                alt: "Selo Bacen 3978",
                src: "/mocks/fsi/Regulation/regulationIcon.png"
            }
        },
        {
            title: "BACEN 4327",
            description: "Governança socioambiental para instituições financeiras",
            icon: {
                alt: "Selo Bacen 4327",
                src: "/mocks/fsi/Regulation/regulationIcon.png"
            }
        },
        {
            title: "BACEN 4557",
            description: "Regras para gerenciamento integrado de risco e capital dos Bancos",
            icon: {
                alt: "Selo Bacen 4557",
                src: "/mocks/fsi/Regulation/regulationIcon.png"
            }
        },
        {
            title: "CVM 50",
            description: "Prevenção à lavagem de dinheiro e ao financiamento do terrorismo (PLDFT)",
            icon: {
                alt: "Selo CVM 50",
                src: "/mocks/fsi/Regulation/regulationIcon.png"
            }
        },
        {
            title: "COAF 29",
            description: "Ampliação do conceito de PEP para novos cargos",
            icon: {
                alt: "Selo COAF 29",
                src: "/mocks/fsi/Regulation/regulationIcon.png"
            }
        },
    ]
}