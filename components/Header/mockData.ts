export interface MenuData {
  headerMenus: {
    edges: MenuItem[];
  };
}

export interface MenuItem {
  node: {
    id: string;
    label: string;
    path: string;
    url?: string;
    childItems?: {
      edges: ChildItem[];
    };
  };
}

export interface ChildItem {
  title?: string;
  headerSection?: HeaderSection;
  node?: {
    id: string;
    title?: string;
    label: string;
    url: string;
    path: string;
    icon?: string;
  };
  childs?: ChildItem[];
}

export interface HeaderSection {
  title: String;
  description: string;
  label: string;
  path: string;
  icon?: string;
}

export const mockHeader: MenuData = {
  headerMenus: {
    edges: [
      {
        node: {
          id: "0",
          label: "Inicio",
          path: "#",
        },
      },
      {
        node: {
          id: "1",
          label: "Soluções",
          path: "#",
          childItems: {
            edges: [
              {
                title: "Inteligência Comercial",
                headerSection: {
                  title: "Prospecção de Clientes e Inteligência Comercial",
                  description:
                    "Tecnologias e dados para estratégias eficientes de prospecção e marketing digital. Receba inteligência em todas as fases do seu negócio e acelere sua chegada ao próximo nível.",
                  label: "Saiba Mais",
                  path: "#",
                },
                node: {
                  id: "inteligencia",
                  label: "inteligencia",
                  path: "inteligencia",
                  url: "inteligencia",
                },
                childs: [
                  {
                    node: {
                      id: "in=b2b",
                      label: "B2B Inteligence",
                      path: "b2b",
                      url: "/b2b",
                      icon: "b2b.svg",
                      title:
                        "Acesse dados de alto impacto sobre todas as empresas do Brasil",
                    },
                  },
                  {
                    node: {
                      id: "in=construction",
                      label: "Construction",
                      path: "construction",
                      url: "/construction",
                      icon: "constuction.svg",
                      title:
                        "Acesse dados sobre empresas brasileiras da construção civil e arquitetos",
                    },
                  },
                  {
                    node: {
                      id: "in=b2c",
                      label: "B2C Inteligence",
                      path: "b2c",
                      url: "/b2c",
                      icon: "b2c.svg",
                      title:
                        "Base de dados públicos de Pessoas Físicas do Brasil para estratégias de vendas e marketing",
                    },
                  },
                  {
                    node: {
                      id: "in=motors",
                      label: "Motors",
                      path: "motors",
                      url: "/motors",
                      icon: "motors.svg",
                      title:
                        "Acesse scores veiculares atrelados a dados de pessoas e potencialize a prospecção de clientes",
                    },
                  },
                  {
                    node: {
                      id: "in=health",
                      label: "Health",
                      path: "health",
                      url: "/health",
                      icon: "health.svg",
                      title:
                        "Faça análises estratégicas a partir de dados do mercado de saúde",
                    },
                  },
                ],
              },
              {
                title: "Prevenção de Perdas",
                headerSection: {
                  title: "Risk & Compliance",
                  description:
                    "Faça análises de compliance mais ágeis, completas e seguras com as tecnologias e dados disponibilizados pela Neoway. Nossas soluções entregam tudo o que você precisa para avaliar e monitorar empresas e pessoas.",

                  label: "Saiba Mais",
                  path: "prevencao-perdas",
                },
                node: {
                  id: "compliance",
                  label: "compliance",
                  path: "compliance",
                  url: "compliance",
                },
                childs: [
                  {
                    node: {
                      id: "compli=compliance",
                      label: "compliance",
                      path: "Compliance",
                      url: "/compliance",
                      icon: "compliance.svg",
                      title:
                        "Diligência prévia e gestão de compliance para análise e prevenção de riscos",
                    },
                  },
                  {
                    node: {
                      id: "compli=seeker",
                      label: "Seeker",
                      path: "seeker",
                      url: "/seeker",
                      icon: "seeker.svg",
                      title:
                        "Automatize processos decisórios de compliance e fraude em diferentes níveis de complexidade.",
                    },
                  },
                  {
                    node: {
                      id: "compli=watcher",
                      label: "Watcher",
                      path: "watcher",
                      url: "/watcher",
                      icon: "watcher.svg",
                      title:
                        "Monitore dados públicos sobre empresas e pessoas e receba alertas automáticos",
                    },
                  },
                  {
                    node: {
                      id: "compli=lawsuits",
                      label: "Lawsuits",
                      path: "lawsuits",
                      url: "/lawsuits",
                      icon: "law_suits.svg",
                      title:
                        "Acesse a maior base de processos judiciais do país e aprofunde suas análises",
                    },
                  },
                ],
              },
              {
                title: "Mercado de Capitais",
                headerSection: {
                  title: "Mercado de Capitais",
                  description:
                    "Explore dados confiáveis e tecnologias de ponta para navegar no mercado de capitais e investimentos. Soluções que ajudam a melhorar tomadas de decisão e resultados, além de automatizar processos de monitoramento.",
                  label: "Saiba Mais",
                  path: "mercados-capitais",
                },
                node: {
                  id: "markets",
                  label: "markets",
                  path: "markets",
                  url: "markets",
                },
                childs: [
                  {
                    node: {
                      id: "capital=monitora",
                      label: "Monitora PIP",
                      path: "monitora",
                      url: "/monitora",
                      icon: "pip.svg",
                      title:
                        "Sua Política de Investimentos Pessoais mais segura, eficiente e transparente",
                    },
                  },
                  {
                    node: {
                      id: "capital=data",
                      label: "DataWise +",
                      path: "data",
                      url: "/data",
                      icon: "data_wise.svg",
                      title:
                        "Faça análises e tome decisões estratégicas com muito mais agilidade e eficiência.",
                    },
                  },
                ],
              },
              {
                title: "Ecossistema de Soluções",
                headerSection: {
                  title: "CX.1 - Ecossistema de Soluções",
                  description:
                    "Encontre as melhores soluções para todos os seus desafios de negócio em apenas um lugar. Conheça um ecossistema que conecta dados, serviços e tecnologias para acelerar o seu processo de inovação.",
                  label: "Saiba Mais",
                  path: "#",
                },
                node: {
                  id: "ecosistema",
                  label: "ecosistema",
                  path: "ecosistema",
                  url: "ecosistema",
                },
              },
            ],
          },
        },
      },
      {
        node: {
          id: "2",
          label: "Setores",
          path: "#",
          childItems: {
            edges: [
              {
                node: {
                  id: "se=financa",
                  label: "Serviços Financeiros (FSI)",
                  url: "financa",
                  path: "/financa",
                  icon: "servicos_financeiros.svg",
                },
              },
              {
                node: {
                  id: "se=seguros",
                  label: "Seguros",
                  url: "seguros",
                  path: "/seguros",
                  icon: "seguros.svg",
                },
              },
              {
                node: {
                  id: "se=bens",
                  label: "Bens de Consumo",
                  url: "bens",
                  path: "/bens",
                  icon: "bens_consumo.svg",
                },
              },
              {
                node: {
                  id: "se=auto",
                  label: "Automotivo",
                  url: "auto",
                  path: "/auto",
                  icon: "automotivo.svg",
                },
              },
              {
                node: {
                  id: "se=telecom",
                  label: "Telecom",
                  url: "telecom",
                  path: "/telecom",
                  icon: "telecom.svg",
                },
              },
              {
                node: {
                  id: "se=tec",
                  label: "Tecnologia",
                  url: "tec",
                  path: "/tec",
                  icon: "tecnologia.svg",
                },
              },
              {
                node: {
                  id: "se=varejo",
                  label: "Varejo",
                  url: "varejo",
                  path: "/varejo",
                  icon: "varejo.svg",
                },
              },
            ],
          },
        },
      },
      {
        node: {
          id: "3",
          label: "Institucional",
          path: "#",
          childItems: {
            edges: [
              {
                title: "Sobre",
                node: {
                  id: "sobre",
                  label: "sobre",
                  path: "sobre",
                  url: "sobre",
                },
                childs: [
                  {
                    node: {
                      id: "so=sobre",
                      label: "Sobre nós",
                      path: "sobre",
                      url: "/sobre",
                      icon: "sobre.svg",
                      title: "Conheça a Neoway",
                    },
                  },
                  {
                    node: {
                      id: "so=clientes",
                      label: "Para Clientes",
                      path: "clientes",
                      url: "/clientes",
                      icon: "clientes.svg",
                      title: "Como apoiamos nossos clientes",
                    },
                  },
                  {
                    node: {
                      id: "so=imprensa",
                      label: "Imprensa",
                      path: "imprensa",
                      url: "/imprensa",
                      icon: "imprensa.svg",
                      title: "Principais notícias na mídia.",
                    },
                  },
                ],
              },
              {
                title: "Responsabilidade",
                node: {
                  id: "responsabilidade",
                  label: "responsabilidade",
                  path: "responsabilidade",
                  url: "responsabilidade",
                },
                childs: [
                  {
                    node: {
                      id: "re=lgpd",
                      label: "LGPD",
                      path: "lgpd",
                      url: "/lgpd",
                      icon: "lgpd.svg",
                      title: "Como tratamos dados pessoais",
                    },
                  },
                  {
                    node: {
                      id: "re=governanca",
                      label: "Governança",
                      path: "governanca",
                      url: "/governanca",
                      icon: "governanca.svg",
                      title: "Nosso programa de compliance",
                    },
                  },
                  {
                    node: {
                      id: "re=transparent",
                      label: "Transparência",
                      path: "transparent",
                      url: "/transparent",
                      icon: "transparencia.svg",
                      title: "Concretizando negócios éticos",
                    },
                  },
                  {
                    node: {
                      id: "re=seguro",
                      label: "Segurança",
                      path: "seguro",
                      url: "/seguro",
                      icon: "seguranca.svg",
                      title: "Como protegemos a informação",
                    },
                  },
                ],
              },
              {
                title: "Faça parte",
                node: {
                  id: "trabalhe",
                  label: "trabalhe",
                  path: "trabalhe",
                  url: "trabalhe",
                },
                childs: [
                  {
                    node: {
                      id: "fp=carreiras",
                      label: "Carreiras",
                      path: "carreiras",
                      url: "/carreiras",
                      icon: "carreiras.svg",
                      title: "Faça parte do time Neoway",
                    },
                  },
                  {
                    node: {
                      id: "fp=parceiro",
                      label: "Seja nosso Parceiro",
                      path: "parceiro",
                      url: "/parceiro",
                      icon: "parceiro.svg",
                      title: "Vamos fazer negócio?",
                    },
                  },
                ],
              },
            ],
          },
        },
      },
      {
        node: {
          id: "4",
          label: "Conteúdos",
          path: "#",
          childItems: {
            edges: [
              {
                node: {
                  id: "co=blog",
                  label: "Blog",
                  url: "blog",
                  path: "/blog",
                  icon: "blog.svg",
                },
              },
              {
                node: {
                  id: "co=pod",
                  label: "Podcast",
                  url: "pod",
                  path: "/pod",
                  icon: "podcast.svg",
                },
              },
              {
                node: {
                  id: "co=evento",
                  label: "Eventos",
                  url: "evento",
                  path: "/evento",
                  icon: "eventos.svg",
                },
              },
              {
                node: {
                  id: "co=cases",
                  label: "Cases",
                  url: "cases",
                  path: "/cases",
                  icon: "cases.svg",
                },
              },
              {
                node: {
                  id: "co=materiais",
                  label: "Materiais Educativos",
                  url: "materiais",
                  path: "/materiais",
                  icon: "materiais.svg",
                },
              },
            ],
          },
        },
      },
    ],
  },
};
