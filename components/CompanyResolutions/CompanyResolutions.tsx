import { ActionResolution, Actions } from "./ActionResolution";

export const CompanyResolutions = () => {
  const mockResolutions: Actions[] = [
    {
      textcolor: "purple",
      href: "/",
      title: "Prevenção de Perdas",
      subtitle:
        "Reduza riscos e reforce a conformidade regulatória com nossas soluções de Prevenção de Perdas, que abrangem Compliance, Gestão de Riscos, Detecção de Fraudes e Análise de Processos Judiciais.",
      list: [
        {
          icon: "purple",
          text: "Diligências de PF e PJ automatizadas (KYC, KYE, KYP e KYS) e detecção de alterações de comportamento com recebimento de alertas",
        },
        {
          icon: "purple",
          text: "Prevenção à lavagem de dinheiro e financiamento ao terrorismo (PLDFT).",
        },
        {
          icon: "purple",
          text: "Prevenção de fraudes no onboarding digital e nas transações financeiras.",
        },
      ],
    },
    {
      textcolor: "blue",
      href: "/",
      title: "Mercado de Capitais",
      subtitle:
        "Explore ferramentas analíticas e bases de dados únicos do mercado de capitais para aumentar a rentabilidade da carteira, mitigar riscos de negócios e gerar insights para estratégias comerciais e de investimentos.",
      list: [
        {
          icon: "blue",
          text: "Monitoramento do market share por visualização de rankings.",
        },
        {
          icon: "blue",
          text: "Tendências dos instrumentos financeiros e comportamento das categorias de investidores.",
        },
        {
          icon: "blue",
          text: "Indicação da propensão a investir da carteira de clientes de investimentos.",
        },
      ],
    },
    {
      textcolor: "orange",
      href: "/",
      title: "Marketing e Vendas",
      subtitle:
        "Acelere seu crescimento usando inteligência analítica para compreender o mercado, maximizar a rentabilidade da carteira de clientes e definir as melhores estratégias comerciais com tecnologia de IA.",
      list: [
        {
          icon: "orange",
          text: "Recomendação de oportunidades de negócios.",
        },
        {
          icon: "orange",
          text: "Previsibilidade de vendas.",
        },
        {
          icon: "orange",
          text: "Geração de demanda.",
        },
      ],
    },
  ];
  return (
    <div className="maxDesktop:max-w-[1440px] px-6 mx-auto py-8 lg:px-24">
      <div className="max-w-[1128px] pb-8">
        <h3 className="text-blue-800 font-roboto text-xs font-semibold uppercase pb-4">
          O que a neoway resolve?
        </h3>
        <p className="font-rajdhani text-gray-500 font-bold text-lg lg:text-4xl leading-5 lg:leading-10">
          Auxiliamos empresas a ganharem mais e reduzirem riscos de negócio, com
          o uso de Data Analytics e Inteligência Artificial
        </p>
      </div>
      <ActionResolution resolutions={mockResolutions} />
    </div>
  );
};
