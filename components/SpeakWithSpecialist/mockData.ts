export interface SpeakWithSpecialistData {
  title: string;
  description: string;
  speakWithSpecialistCards: SpeakWithSpecialistCard[];
}

export interface SpeakWithSpecialistCard {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export const mockSpeakWithSpecialistMarket: SpeakWithSpecialistData = {
  title: "Nossas Soluções Estratégicas",
  description:
    "Oferecemos soluções para quem busca profundidade nas análises. Com dados únicos possibilitamos o entendimento do mercado financeiro, a segmentação da carteira de clientes e o monitoramento de riscos de negócio. Entregamos insights profundos com eficiência, garantindo autonomia na análise.",
  speakWithSpecialistCards: [
    {
      title: "Sell Side (Intermediários)",
      description:
        "Soluções que impulsionam a criação e comercialização de instrumentos financeiros e ajudam no desenvolvimento de ofertas mais aderentes aos seus clientes.",
      linkText: "Ler Mais",
      linkHref: "",
      imgSrc: "sell-side.svg",
      imgAlt: "",
    },
    {
      title: "Buy Side (Investidores)",
      description:
        "Suporte a instituições financeiras e agentes com atuação em aplicações financeiras, para aprimorar suas estratégias de recomendações de investimentos.",
      linkText: "Ler Mais",
      linkHref: "#",
      imgSrc: "buy-side.svg",
      imgAlt: "",
    },
    {
      title: "Corporate (Listadas)",
      description:
        "Suporte a instituições financeiras e agentes com atuação em aplicações financeiras, para aprimorar suas estratégias de recomendações de investimentos.",
      linkText: "Ler Mais",
      linkHref: "#",
      imgSrc: "corporate-listed.svg",
      imgAlt: "",
    },
  ],
};

export const mockSpeakWithSpecialistSales: SpeakWithSpecialistData = {
  title: "Nossas Soluções Estratégicas",
  description:
    "A Neoway utiliza algoritmos avançados para extrair insights valiosos de grandes conjuntos de dados, proporcionando uma compreensão profunda do setor. Colaboramos na identificação de padrões, criando estratégias inovadoras para simplificar a complexidade dos dados e impulsionar a excelência operacional.",
  speakWithSpecialistCards: [
    {
      title: "Recomendação das melhores oportunidades de negócio",
      description:
        "Descubra quais empresas são aderentes ao seu negócio com o On Target...",
      linkText: "Ler Mais",
      linkHref: "",
      imgSrc: "recomendacao.svg",
      imgAlt: "",
    },
    {
      title: "Análise de Potencial de Mercado",
      description:
        "Faça análises completas do tamanho potencial do seu mercado, como análises de TAM, SAM, SOM, com o Neoway Intelligence...",
      linkText: "Ler Mais",
      linkHref: "#",
      imgSrc: "analise-potencial.svg",
      imgAlt: "",
    },
    {
      title: "Enriquecimento de Dados",
      description:
        "Tenha acesso a modelagens únicas de dados B2B segmentados por diferentes indústrias...",
      linkText: "Ler Mais",
      linkHref: "#",
      imgSrc: "enriquecimento-dados.svg",
      imgAlt: "",
    },
    {
      title: "Segmentação da Carteira de Clientes",
      description:
        "Faça segmentações na sua base de clientes e analise as características comuns da sua...",
      linkText: "Ler Mais",
      linkHref: "#",
      imgSrc: "segmentacao-carteiras.svg",
      imgAlt: "",
    },
    {
      title: "Relatórios Analíticos",
      description:
        "Crie relatórios para gerar insights rápidos e acelerar a tomada de decisão baseada em...",
      linkText: "Ler Mais",
      linkHref: "#",
      imgSrc: "relatorios-analiticos.svg",
      imgAlt: "",
    },
    {
      title: "Otimização de processos de qualificação Analíticos",
      description:
        "Personalize e automatize a qualificação dos leads que visitam o seu site. Em parceria com ...",
      linkText: "Ler Mais",
      linkHref: "#",
      imgSrc: "otimiza-processos.svg",
      imgAlt: "",
    },
  ],
};

export const mockSpeakWithSpecialistCompliance: SpeakWithSpecialistData = {
  title: "Nossas Soluções Estratégicas",
  description:
    "A Neoway utiliza algoritmos avançados para extrair insights valiosos de grandes conjuntos de dados, proporcionando uma compreensão profunda do setor. Colaboramos na identificação de padrões, criando estratégias inovadoras para simplificar a complexidade dos dados e impulsionar a excelência operacional.",
  speakWithSpecialistCards: [
    {
      title: "Análise cadastral",
      description:
        "Utilize inteligência de dados para realizar background check de pessoas físicas e jurídicas. Conte com a tecnologia antifraude para detectar e prevenir contas laranjas e furto de identidade, utilizando as soluções Neoway: Compliance, Lawsuits, Check e Seeker",
      linkText: "Ler Mais",
      linkHref: "",
      imgSrc: "analise-cadastral.svg",
      imgAlt: "",
    },
    {
      title: " Identificação de relacionamentos e conflito de interesses",
      description:
        "Descubra conexões entre pessoas físicas e jurídicas, identifique...",
      linkText: "Ler Mais",
      linkHref: "#",
      imgSrc: "identifica-conflito.svg",
      imgAlt: "",
    },
    {
      title: "Análise de mídias negativas",
      description:
        "Identifique na web notícias e registros com menções negativas...",
      linkText: "Ler Mais",
      linkHref: "#",
      imgSrc: "analise-midias.svg",
      imgAlt: "",
    },
    {
      title: "Monitoramento de riscos contínuo",
      description:
        "Monitore informações sobre empresas e sócios e receba alertas...",
      linkText: "Ler Mais",
      linkHref: "#",
      imgSrc: "monitor-risco.svg",
      imgAlt: "",
    },
    {
      title: "Gestão de relatórios",
      description:
        "Armazene evidências por até cinco anos e obtenha acesso aos... ",
      linkText: "Ler Mais",
      linkHref: "#",
      imgSrc: "gestao-relatorios.svg",
      imgAlt: "",
    },
  ],
};
