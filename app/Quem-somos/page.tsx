import Banner from "@/components/Banner";
import OurValues from "@/components/OurValues/OurValues";
import TextArea from "@/components/TextArea/TextArea";
import { TextWithSideImage } from "@/components/TextWithSideImage";
import { SeoProps } from "@/typings/global";
import { GetStaticProps } from "next";
import {
  banner,
  bigImages,
  multipleSolutions,
  newsletter,
  ourValues,
  teamCarrousel,
  textArea,
  textWithSideImage,
  textWithSideImage2,
} from "./mock";
import { TeamCarrousel } from "@/components/TeamCarrousel";
import Recognition from "@/components/Recognition";
import BigImages from "@/components/BigImages";
import MultipleSolutions from "@/components/MultipleSolutions";
import Newsletter from "@/components/Newsletter";
import LastCases from "@/components/LastCases";
import { fsiMockLastCases } from "../fsi/mocks/fsiMockLastCases";

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

export default function Page() {
  return (
    <>
      <Banner {...banner} />
      <TextArea {...textArea} />
      <TextWithSideImage {...textWithSideImage} />
      <OurValues {...ourValues} />
      <TeamCarrousel {...teamCarrousel} />
      <Recognition {...textWithSideImage2} />
      <BigImages {...bigImages} />
      <MultipleSolutions {...multipleSolutions} />
      <LastCases {...fsiMockLastCases} />
      <Newsletter {...newsletter} />
    </>
  );
}
