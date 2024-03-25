import CompanySegments from "@/components/CompanySegments/CompanySegments";
import CustomerExperience from "@/components/CustomerExperience/CustomerExperience";
import { Faq } from "@/components/Faq";
import FormAnalyticalSolutions from "@/components/FormAnalyticalSolutions/FormAnalyticalSolutions";
import FormOurSolutions from "@/components/FormOurSolutions/FormOurSolutions";
import { AppLayout } from "@/components/Layout";
import PlatformSolutionsHome from "@/components/PlatformSolutions/PlatformSolutionsHome";
import { SEO } from "@/components/Seo";
import { SpeakWithSpecialist } from "@/components/SpeakWithSpecialist/SpeakWithSpecialist";
import { SpecialistBanner } from "@/components/SpecialistBanner";
import { StrategicSolutions } from "@/components/StrategicSolutions/StrategicSolutions";
import fetchPosts from "@/helpers/fetchPost";
import { SeoProps } from "@/typings/global";
import type { GetServerSideProps } from "next";
import { processData } from "../../helpers/processData";

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

const Page = ({ pagePostData }: PageProps) => {
  if (!pagePostData) {
    return (
      <AppLayout>
        <h1>...oops, page not found!</h1>
      </AppLayout>
    );
  }

  const {
    seo,
    formOurSolutions,
    sectionPosBanner,
    strategicSolutions,
    platformSolutions,
    companySegments,
    customerExperience,
    formAnalyticalSolutions,
    specialistBanner,
    faq,
  } = pagePostData;



  return (
    <AppLayout>
      <SEO title={seo?.title} description={seo?.description} />
      {formOurSolutions && <FormOurSolutions data={formOurSolutions} />}

      {sectionPosBanner && <SpeakWithSpecialist data={sectionPosBanner} />}

      {strategicSolutions && <StrategicSolutions data={strategicSolutions} />}

      {platformSolutions && <PlatformSolutionsHome data={platformSolutions} />}

      {customerExperience && (
        <CustomerExperience data={customerExperience} slidesView={2} />
      )}

      {specialistBanner && <SpecialistBanner data={specialistBanner} />}

      {companySegments && <CompanySegments data={companySegments} />}

      {faq && <Faq data={faq} />}

      {formAnalyticalSolutions && (
        <FormAnalyticalSolutions data={formAnalyticalSolutions} />
      )}
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pageId = query?.slug as string;

  try {
    const data: PagePostData = await fetchPosts(pageId);
    const pagePostData = processData(data);

    return {
      props: {
        pagePostData,
      },
    };
  } catch (error) {
    return {
      props: {
        pagePostData: null,
      },
    };
  }
};

export default Page;
