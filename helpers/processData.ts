import { fetchImage } from "@/helpers/fetchImage";
import { fetchImagesForItems } from "@/helpers/fetchImagesForItems";
import { objectValuesToArray } from "@/helpers/objectValuesToArray";

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

  const formOurSolutions = somos_o_maior_hub_de_inteligencia;
  await fetchImage(
    formOurSolutions,
    formOurSolutions?.image_desktop,
    "image_data_desktop"
  );
  await fetchImage(
    formOurSolutions,
    formOurSolutions?.image_mobile,
    "image_data_mobile"
  );

  const platformSolutions = fale_com_um_especialista;
  await fetchImage(platformSolutions, platformSolutions?.image, "image_data");
  if (typeof platformSolutions?.content_2 === "object") {
    platformSolutions.content_2 = objectValuesToArray(
      platformSolutions?.content_2
    );
  }

  const companySegments = conheca_os_nossos_segmentos_de_atuacao;
  const companySegmentsItemsWidthImage = await fetchImagesForItems(
    companySegments?.items
  );
  companySegments.items = companySegmentsItemsWidthImage;

  const customerExperience = como_e_a_experiencia_dos_nossos_clientes;
  const customerExperienceItemsWidthImage = await fetchImagesForItems(
    customerExperience?.items
  );
  customerExperience.items = customerExperienceItemsWidthImage;

  const formAnalyticalSolutions = solucoes_analiticas_disponiveis;
  await fetchImage(
    formAnalyticalSolutions,
    formAnalyticalSolutions?.image_desktop,
    "image_data_desktop"
  );
  await fetchImage(
    formAnalyticalSolutions?.form,
    formAnalyticalSolutions?.form?.icon,
    "image_data"
  );

  const specialistBanner = solucoes_e_dados_unicos_impulsionam;
  await fetchImage(specialistBanner, specialistBanner?.image, "image_data");

  const faq = perguntas_frequentes;
  await fetchImage(faq, faq?.icon, "image_data");
  faq.items = objectValuesToArray(faq?.items);

  const sectionPosBanner = secao_pos_banner;
  await fetchImage(
    sectionPosBanner,
    sectionPosBanner?.banner_secao,
    "image_data"
  );
  const sectionPosBannerItemsImage = await fetchImagesForItems(
    sectionPosBanner?.items
  );

  sectionPosBanner.items = sectionPosBannerItemsImage;

  const nossasSolucoesEstrategicas = nossas_solucoes_estrategicas || {};
  const nossasSolucoesEstrategicasItemsImage = await fetchImagesForItems(
    nossasSolucoesEstrategicas?.items
  );

  if (nossas_solucoes_estrategicas) {
    nossasSolucoesEstrategicas.items = nossasSolucoesEstrategicasItemsImage;
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
