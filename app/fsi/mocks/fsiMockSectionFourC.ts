import { ISectionFourC } from "@/components/SectionFourC/types/ISectionFourC";

export const fsiMockSectionFourC: ISectionFourC = {
  title: "Os 4 C's da jornada do cliente no setor financeiro",
  description:
    "Ao utilizar as soluções da Neoway, sua instituição financeira acelera estratégias de marketing e vendas.Você poderá segmentar clientes com precisão, priorizando quem tem mais chances de evoluir rápido na jornada de compras e adquirir seus produtos.",
  cards: [
    {
      title: "CADASTRO",
      text:
        "Reduza riscos de fraudes em cadastros de novos clientes e fornecedores. Tenha mais agilidade e segurança no processo de onboarding com as tecnologias antifraude o motor de decisão Neoway.",
    },
    {
      title: "COMPLIANCE",
      text:
        "Reforce os mecanismos de gestão da conformidade e normas regulatórias do setor financeiro. Proteja-se de riscos legais e reputacionais relacionados a indícios de lavagem de dinheiro e outras condutas irregulares.",
    },
    {
      title: "INVESTIMENTO",
      text:
        "Priorize e segmente a carteira de clientes de investimento com uma visão diferenciada do potencial de investimento, perfil de investidor, sazonalidade, entre outros elementos sobre a propensão a investir de pessoas físicas e jurídicas.",
    },
    {
      title: "COBRANÇA",
      text:
        "Use dados sobre bens, direitos e dívidas para otimizar sua régua de cobrança judicial e administrativa. Aplique políticas de cobrança adequadas e recupere saldos mais rápido.",
    },
  ],
  diligencias: {
    title: "5X Mais velocidade em diligências",
    text: "Os números abaixo refletem resultados alcançados em cases de sucesso da Neoway com instituições financeiras",
    image: {
      url: "/mocks/fsi/FourC/FourCDiligence.png",
      alt: "mulher de negócios",
      width: 592,
      height: 538,
    },
    cards: [
        {
            src: "/mocks/fsi/FourC/paymentPen.svg",
            title: "97%",
            text: "Redução do tempo no cadastro e onboarding de clientes",
        },
        {
            src: "/mocks/fsi/FourC/creditCard.svg",
            title: "60X",
            text: "ROI sobre recuperação de créditos",
        },
        {
            src: "/mocks/fsi/FourC/group.svg",
            title: "800%",
            text: "ROI sobre a conquista de novos clientes",
        },
    ],
  },
  specialist: {
    src: "/mocks/fsi/FourC/diligenciasneoway.svg",
    title: "A Neoway ajuda instituições financeiras a gerarem mais resultados",
    text: "Fale com nossos especialistas e saiba como",
    button: {
      text: "Fale com um especialista",
      link: "/",
    },
  },
};
