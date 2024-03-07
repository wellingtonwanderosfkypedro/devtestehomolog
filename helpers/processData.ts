import { fetchImage } from "./fetchImage";
import { fetchImagesForItems } from "./fetchImagesForItems";
import { objectValuesToArray } from "./objectValuesToArray";

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

  const promises = [];

  const formOurSolutions = somos_o_maior_hub_de_inteligencia;
  promises.push(fetchImage(formOurSolutions, formOurSolutions?.image_desktop, "image_data_desktop"));
  promises.push(fetchImage(formOurSolutions, formOurSolutions?.image_mobile, "image_data_mobile"));

  const platformSolutions = fale_com_um_especialista;
  promises.push(fetchImage(platformSolutions, platformSolutions?.image, "image_data"));
  if (typeof platformSolutions?.content_2 === "object") {
    platformSolutions.content_2 = objectValuesToArray(platformSolutions?.content_2);
  }

  const companySegments = conheca_os_nossos_segmentos_de_atuacao;
  promises.push(fetchImagesForItems(companySegments?.items).then(images => companySegments.items = images));

  const customerExperience = como_e_a_experiencia_dos_nossos_clientes;
  promises.push(fetchImagesForItems(customerExperience?.items).then(images => customerExperience.items = images));

  const formAnalyticalSolutions = solucoes_analiticas_disponiveis;
  promises.push(fetchImage(formAnalyticalSolutions, formAnalyticalSolutions?.image_desktop, "image_data_desktop"));
  promises.push(fetchImage(formAnalyticalSolutions?.form, formAnalyticalSolutions?.form?.icon, "image_data"));

  const specialistBanner = solucoes_e_dados_unicos_impulsionam;
  promises.push(fetchImage(specialistBanner, specialistBanner?.image, "image_data"));

  const faq = perguntas_frequentes;
  promises.push(fetchImage(faq, faq?.icon, "image_data").then(() => faq.items = objectValuesToArray(faq?.items)));

  const sectionPosBanner = secao_pos_banner;
  promises.push(fetchImage(sectionPosBanner, sectionPosBanner?.banner_secao, "image_data"));
  promises.push(fetchImagesForItems(sectionPosBanner?.items).then(images => sectionPosBanner.items = images));

  const nossasSolucoesEstrategicas = nossas_solucoes_estrategicas || {};
  promises.push(fetchImagesForItems(nossasSolucoesEstrategicas?.items).then(images => {
    if (nossas_solucoes_estrategicas) {
      nossasSolucoesEstrategicas.items = images;
    }
  }));

  await Promise.all(promises);

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