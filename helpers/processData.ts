export const processData = async (data: any) => {
  const {
    seo,
    somos_o_maior_hub_de_inteligencia,
    secao_pos_banner,
    nossas_solucoes_estrategicas,
    fale_com_um_especialista,
    conheca_os_nossos_segmentos_de_atuacao,
    como_e_a_experiencia_dos_nossos_clientes,
    solucoes_analiticas_disponiveis,
    solucoes_e_dados_unicos_impulsionam,
    perguntas_frequentes,
  } = data || {};

  const platformSolutions = fale_com_um_especialista;

  if (typeof platformSolutions?.content_2 === "object") {
    platformSolutions.content_2 = Object.values(platformSolutions?.content_2);
  }

  const faq = perguntas_frequentes;
  faq.items = Object.values(faq?.items);

  const sectionPosBanner = secao_pos_banner;

  sectionPosBanner.image = {
    url: sectionPosBanner?.banner_secao?.url,
    width: sectionPosBanner?.banner_secao?.width,
    height: sectionPosBanner?.banner_secao?.height,
    alt: sectionPosBanner?.banner_secao?.alt,
  };

  sectionPosBanner.items = Object.values(sectionPosBanner?.items);

  const nossasSolucoesEstrategicas = nossas_solucoes_estrategicas || {};

  if (nossas_solucoes_estrategicas) {
    nossasSolucoesEstrategicas.items = Object.values(
      nossasSolucoesEstrategicas.items
    );
  }

  return {
    seo: seo,
    formOurSolutions: somos_o_maior_hub_de_inteligencia,
    sectionPosBanner: secao_pos_banner,
    strategicSolutions: nossas_solucoes_estrategicas || null,
    platformSolutions: fale_com_um_especialista,
    companySegments: conheca_os_nossos_segmentos_de_atuacao,
    customerExperience: como_e_a_experiencia_dos_nossos_clientes,
    formAnalyticalSolutions: solucoes_analiticas_disponiveis,
    specialistBanner: solucoes_e_dados_unicos_impulsionam,
    faq: perguntas_frequentes,
  };
};
