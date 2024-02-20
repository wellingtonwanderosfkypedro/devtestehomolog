export interface SolutiionsPageProps {
  items: SolutiionsPage[];
}

export interface SolutiionsPage {
  idPage: string;
  title: string;
  subTitle: string;
  secondSubTitle?: string;
  arrayItems?: string[];
}

export const solutiionsPageItems: SolutiionsPageProps = {
  items: [
    {
      idPage: "sales-marketing",
      title: "Soluções em plataforma ou API com dashboards customizados",
      subTitle:
        "Oferecemos flexibilidade na entrega das soluções, com possibilidade de integração por meio de API ou acesso via plataforma. Além disso, disponibilizamos análises personalizadas em dashboards customizados de acordo com as  necessidades dos nossos clientes.",
      secondSubTitle:
        "Simplifique a sua operação com o apoio de inteligência analítica e dados escaláveis que atendem aos seus objetivos de negócio.",
    },
    {
      idPage: "mercados-capitais",
      title:
        "Formas de consulta de dados do mercado financeiro e integração via APIs",
      subTitle:
        "Aproveite os dados do Mercado de Capitais com facilidade para customizar e acessar as informações de diversas formas, tudo de acordo com as necessidades da instituição:",
      arrayItems: [
        "Integração via APIs",
        "Dashboards padronizados",
        "Dashboards personalizados",
        "Download de relatórios",
        "Enriquecimento de bases de dados",
      ],
    },
    {
      idPage: "prevencao-perdas",
      title: "Soluções em plataforma ou API com dashboards customizados",
      subTitle:
        "Oferecemos flexibilidade na entrega das soluções, com possibilidade de integração por meio de API ou acesso via plataforma. Além disso, disponibilizamos análises personalizadas em dashboards customizados de acordo com as  necessidades dos nossos clientes.",
      secondSubTitle:
        "Simplifique a sua operação com o apoio de inteligência analítica e dados escaláveis que atendem aos seus objetivos de negócio.",
    },
  ],
};
