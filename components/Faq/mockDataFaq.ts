export interface DataFaqPage {
  pageDataFaq: DataFaq[];
}

export interface DataFaq {
  idPage: string;
  page: string;
  qas: Questions[];
}

export interface Questions {
  question: string;
  answer: string;
}

export const faqDatas: DataFaqPage = {
  pageDataFaq: [
    {
      idPage: "prevencao-perdas",
      page: "Prevenção de Perdas",
      qas: [
        {
          question:
            "É necessário ter uma área de Compliance na minha empresa para estar em conformidade?",
          answer:
            "A construção de uma esteira eficaz de prevenção contra atividades fraudulentas é o marco inicial de um processo que consiste em diversas etapas: onboarding, verificação e monitoramento de clientes e terceiros. Integrar em sua esteira tecnologias avançadas como OCR de documentos, documentoscopia, facematch, quiz antifraude, entre outras formas de verificação de identidade, é um passo fundamental para proteger seu negócio contra potenciais fraudadores.",
        },
        {
          question:
            "Como otimizar meu processo de diligência com um sistema de compliance?",
          answer:
            "A construção de uma esteira eficaz de prevenção contra atividades fraudulentas é o marco inicial de um processo que consiste em diversas etapas: onboarding, verificação e monitoramento de clientes e terceiros. Integrar em sua esteira tecnologias avançadas como OCR de documentos, documentoscopia, facematch, quiz antifraude, entre outras formas de verificação de identidade, é um passo fundamental para proteger seu negócio contra potenciais fraudadores.",
        },
        {
          question:
            "Como proteger minha empresa de atividades fraudulentas com inteligência analítica?",
          answer:
            "A construção de uma esteira eficaz de prevenção contra atividades fraudulentas é o marco inicial de um processo que consiste em diversas etapas: onboarding, verificação e monitoramento de clientes e terceiros. Integrar em sua esteira tecnologias avançadas como OCR de documentos, documentoscopia, facematch, quiz antifraude, entre outras formas de verificação de identidade, é um passo fundamental para proteger seu negócio contra potenciais fraudadores.",
        },
        {
          question:
            "Como é feito o monitoramento de fornecedores, clientes, parceiros e colaboradores?",
          answer:
            "A construção de uma esteira eficaz de prevenção contra atividades fraudulentas é o marco inicial de um processo que consiste em diversas etapas: onboarding, verificação e monitoramento de clientes e terceiros. Integrar em sua esteira tecnologias avançadas como OCR de documentos, documentoscopia, facematch, quiz antifraude, entre outras formas de verificação de identidade, é um passo fundamental para proteger seu negócio contra potenciais fraudadores.",
        },
        {
          question:
            "Qual a diferença entre contratar as soluções em plataforma ou via API?",
          answer:
            "A construção de uma esteira eficaz de prevenção contra atividades fraudulentas é o marco inicial de um processo que consiste em diversas etapas: onboarding, verificação e monitoramento de clientes e terceiros. Integrar em sua esteira tecnologias avançadas como OCR de documentos, documentoscopia, facematch, quiz antifraude, entre outras formas de verificação de identidade, é um passo fundamental para proteger seu negócio contra potenciais fraudadores.",
        },
      ],
    },
    {
      idPage: "sales-marketing",
      page: "Marketing e Vendas",
      qas: [
        {
          question:
            "Como a Inteligência Artificial e o aprendizado de máquina são aplicadas nas soluções de Marketing e Vendas?",
          answer:
            "Sim, a Neoway possui integração nativa com Salesforce e Dynamics. Além disso, desenvolvemos integrações personalizadas para outros sistemas e CRMs de mercado, adaptando-nos às necessidades específicas dos clientes. ",
        },
        {
          question:
            "Quais são as fontes de dados que a Neoway utiliza para fornecer insights relevantes para o meu negócio?",
          answer:
            "Sim, a Neoway possui integração nativa com Salesforce e Dynamics. Além disso, desenvolvemos integrações personalizadas para outros sistemas e CRMs de mercado, adaptando-nos às necessidades específicas dos clientes. ",
        },
        {
          question: "A Neoway possui integração com CRM e outros sistemas?  ",
          answer:
            "Sim, a Neoway possui integração nativa com Salesforce e Dynamics. Além disso, desenvolvemos integrações personalizadas para outros sistemas e CRMs de mercado, adaptando-nos às necessidades específicas dos clientes. ",
        },
        {
          question:
            "Como as soluções da Neoway podem ajudar minha empresa na geração de demanda?",
          answer:
            "Sim, a Neoway possui integração nativa com Salesforce e Dynamics. Além disso, desenvolvemos integrações personalizadas para outros sistemas e CRMs de mercado, adaptando-nos às necessidades específicas dos clientes. ",
        },
        {
          question:
            "Qual a diferença entre contratar as soluções em plataforma ou via API?",
          answer:
            "Sim, a Neoway possui integração nativa com Salesforce e Dynamics. Além disso, desenvolvemos integrações personalizadas para outros sistemas e CRMs de mercado, adaptando-nos às necessidades específicas dos clientes. ",
        },
      ],
    },
    {
      idPage: "mercados-capitais",
      page: "Mercados de Capitais",
      qas: [
        {
          question:
            "Como a Inteligência Artificial e o aprendizado de máquina são aplicadas nas soluções de Marketing e Vendas?",
          answer:
            "Sim, a Neoway possui integração nativa com Salesforce e Dynamics. Além disso, desenvolvemos integrações personalizadas para outros sistemas e CRMs de mercado, adaptando-nos às necessidades específicas dos clientes. ",
        },
        {
          question:
            "Quais são as fontes de dados que a Neoway utiliza para fornecer insights relevantes para o meu negócio?",
          answer:
            "Sim, a Neoway possui integração nativa com Salesforce e Dynamics. Além disso, desenvolvemos integrações personalizadas para outros sistemas e CRMs de mercado, adaptando-nos às necessidades específicas dos clientes. ",
        },
        {
          question: "A Neoway possui integração com CRM e outros sistemas?  ",
          answer:
            "Sim, a Neoway possui integração nativa com Salesforce e Dynamics. Além disso, desenvolvemos integrações personalizadas para outros sistemas e CRMs de mercado, adaptando-nos às necessidades específicas dos clientes. ",
        },
        {
          question:
            "Como as soluções da Neoway podem ajudar minha empresa na geração de demanda?",
          answer:
            "Sim, a Neoway possui integração nativa com Salesforce e Dynamics. Além disso, desenvolvemos integrações personalizadas para outros sistemas e CRMs de mercado, adaptando-nos às necessidades específicas dos clientes. ",
        },
        {
          question:
            "Qual a diferença entre contratar as soluções em plataforma ou via API?",
          answer:
            "Sim, a Neoway possui integração nativa com Salesforce e Dynamics. Além disso, desenvolvemos integrações personalizadas para outros sistemas e CRMs de mercado, adaptando-nos às necessidades específicas dos clientes. ",
        },
      ],
    },
  ],
};
