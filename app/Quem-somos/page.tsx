import Banner from "@/components/Banner";
import BigImages from "@/components/BigImages";
import LastCases from "@/components/LastCases";
import { MoveUs } from "@/components/MovesUs";
import MultipleSolutions from "@/components/MultipleSolutions";
import Newsletter from "@/components/Newsletter";
import OurValues from "@/components/OurValues/OurValues";
import Recognition from "@/components/Recognition";
import { TeamCarrousel } from "@/components/TeamCarrousel";
import fetchPosts from "@/helpers/fetchPost";
import { SeoProps } from "@/typings/global";
import {
  banner,
  bigImages,
  moveUsMock,
  multipleSolutions,
  newsletter,
  ourValues,
  recognitionMocks,
  teamCarrousel,
} from "../../helpers/mocks/about/mock";
import { fsiMockLastCases } from "../../helpers/mocks/fsi/mocks/fsiMockLastCases";

type PageData = {
  seo: SeoProps;
  formOurSolutions: any;
  sectionPosBanner: any;
  strategicSolutions: any;
  platformSolutions: any;
  companySegments: any;
  customerExperience: any;
  formAnalyticalSolutions: any;
  specialistBanner: any;
  faq: any;
  fullBackground: any;
};

type PagePostData = {
  seo: any;
  somos_o_maior_hub_de_inteligencia: any;
  secao_pos_banner: any;
  nossas_solucoes_estrategicas: any;
  fale_com_um_especialista: any;
  conheca_os_nossos_segmentos_de_atuacao: any;
  como_e_a_experiencia_dos_nossos_clientes: any;
  solucoes_analiticas_disponiveis: any;
  solucoes_e_dados_unicos_impulsionam: any;
  perguntas_frequentes: any;
};

interface PageProps {
  pagePostData: PageData;
}

async function getPosts() {
  const posts = await fetchPosts("quem_somos");
  return {
    seo: posts?.seo,
    bannerQuemSomos: posts?.bannerQuemSomos,
    oQueNosMove: posts?.oQueNosMove,
    valores: posts?.valores,
    oTime: posts?.oTime,
    reconhecimento: posts?.reconhecimento,
    sliderImagensNeoway: posts?.sliderImagensNeoway,
    confiamNeoway: posts?.confiamNeoway,
    ultimosCases: posts?.ultimosCases,
    newsletter: posts?.newsletter,
  };
}

export default async function Page() {
  const datas = await getPosts();

  return (
    <>
      <Banner data={banner} />
      <MoveUs data={moveUsMock} />
      <OurValues data={ourValues} slidesView={3.3} />
      <TeamCarrousel data={teamCarrousel} />
      <Recognition data={recognitionMocks} />
      <BigImages {...bigImages} />
      <MultipleSolutions {...multipleSolutions} />
      <LastCases {...fsiMockLastCases} />
      <Newsletter data={newsletter} />
    </>
  );
}
