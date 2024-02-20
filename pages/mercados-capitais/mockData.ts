export interface StrategicSolutionsData {
  title: string;
  description: string;
  solutionCards: SolutionCard[];
}

export interface SolutionCard {
  title: string;
  description: string;
  link: string;
  linkHref: string;
}

export const mockStrategicSolutions: StrategicSolutionsData = {
  title: "Nossas Soluções Estratégicas",
  description:
    "Apresentamos um conjunto abrangente de soluções projetadas sob medida para atender às suas necessidades específicas. Desde a análise de dados até a implementação de estratégias avançadas, as nossas ferramentas proporcionam um impulso decisivo para a excelência operacional do seu negócio.",
  solutionCards: [
    {
      title:
        "Proteja-se de práticas irregulares, como insider trading e front running",
      description:
        "O Monitora PIP é uma ferramenta direcionada ao cumprimento de políticas de investimentos de pessoas vinculadas e monitoramento de operações com ativos de própria emissão. Fortaleça as diretrizes de compliance e evite riscos legais e reputacionais",
      link: "Saiba mais sobre Monitora PIP",
      linkHref: "www.teste.com",
    },
    {
      title: "Priorize e segmente a carteira de clientes de investimento",
      description:
        "A Segmentação de Investidores traz uma visão diferenciada de potencial de investimento, perfil de investidor, sazonalidade, entre outros elementos sobre a propensão a investir de pessoas físicas e jurídicas.",
      link: "Saiba mais sobre Segmentação de Investidores",
      linkHref: "#",
    },
    {
      title: "Priorize e segmente a carteira de clientes de investimento",
      description:
        "A Segmentação de Investidores traz uma visão diferenciada de potencial de investimento, perfil de investidor, sazonalidade, entre outros elementos sobre a propensão a investir de pessoas físicas e jurídicas.",
      link: "Saiba mais sobre Segmentação de Investidores",
      linkHref: "#",
    },
  ],
};
