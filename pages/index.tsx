import { CompanyResolutions } from "@/components/CompanyResolutions/CompanyResolutions";
import CompanySegments from "@/components/CompanySegments/CompanySegments";
import CustomerExperience from "@/components/CustomerExperience/CustomerExperience";
import FormAnalyticalSolutions from "@/components/FormAnalyticalSolutions/FormAnalyticalSolutions";
import FormOurSolutions from "@/components/FormOurSolutions/FormOurSolutions";
import { AppLayout } from "@/components/Layout";
import PlatformSolutionsHome from "@/components/PlatformSolutions/PlatformSolutionsHome";
import { SEO } from "@/components/Seo";
import fetchPosts from "@/helpers/fetchPost";

import { MenuData, SeoProps } from "@/typings/global";
import { GetStaticProps } from "next";

type HomePostData = {
  seo: SeoProps;
  formOurSolutions: any;
  companyResolutions: any;
  platformSolutions: any;
  companySegments: any;
  customerExperience: any;
  formAnalyticalSolutions: any;
};

type HomePageData = {
  seo: any;
  somos_o_maior_hub_de_inteligencia: any;
  o_que_a_neoway_resolve: any;
  fale_com_um_especialista: any;
  conheca_os_nossos_segmentos_de_atuacao: any;
  como_e_a_experiencia_dos_nossos_clientes: any;
  solucoes_analiticas_disponiveis: any;
};

interface HomePage {
  footerData: MenuData;
  homePostData: HomePostData;
}

const HomePage = ({ homePostData }: HomePage) => {
  const {
    seo,
    formOurSolutions,
    companyResolutions,
    platformSolutions,
    companySegments,
    customerExperience,
    formAnalyticalSolutions,
  } = homePostData;

  return (
    <AppLayout>
      <SEO title={seo?.title} description={seo?.description} />
      <FormOurSolutions data={formOurSolutions} />
      <CompanyResolutions data={companyResolutions} />
      <PlatformSolutionsHome data={platformSolutions} />
      <CompanySegments data={companySegments} />
      <CustomerExperience data={customerExperience} />
      <FormAnalyticalSolutions data={formAnalyticalSolutions} />
    </AppLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data: HomePageData = await fetchPosts("homepost");

    const seo = data?.seo;

    const formOurSolutions = data.somos_o_maior_hub_de_inteligencia;
    const companyResolutions = data?.o_que_a_neoway_resolve;
    const platformSolutions = data?.fale_com_um_especialista;
    const companySegments = data?.conheca_os_nossos_segmentos_de_atuacao;
    const customerExperience = data?.como_e_a_experiencia_dos_nossos_clientes;
    const formAnalyticalSolutions = data?.solucoes_analiticas_disponiveis;

    return {
      props: {
        homePostData: {
          seo,
          formOurSolutions,
          companyResolutions,
          platformSolutions,
          companySegments,
          customerExperience,
          formAnalyticalSolutions,
        },
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        homePostData: null,
      },
      revalidate: 60,
    };
  }
};

export default HomePage;
