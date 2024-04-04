import { CompanyResolutions } from "@/components/CompanyResolutions/CompanyResolutions";
import CompanySegments from "@/components/CompanySegments/CompanySegments";
import CustomerExperience from "@/components/CustomerExperience/CustomerExperience";
import FormAnalyticalSolutions from "@/components/FormAnalyticalSolutions/FormAnalyticalSolutions";
import FormOurSolutions from "@/components/FormOurSolutions/FormOurSolutions";
import PlatformSolutionsHome from "@/components/PlatformSolutions/PlatformSolutionsHome";
import { SEO } from "@/components/Seo";
import fetchPosts from "@/helpers/fetchPost";
import { MenuData, SeoProps } from "@/typings/global";

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

async function getPosts() {
  const posts = await fetchPosts("homepost");
  return {
    seo: posts?.seo,
    formOurSolutions: posts?.somos_o_maior_hub_de_inteligencia,
    platformSolutions: posts?.fale_com_um_especialista,
    companySegments: posts?.conheca_os_nossos_segmentos_de_atuacao,
    customerExperience: posts?.como_e_a_experiencia_dos_nossos_clientes,
    formAnalyticalSolutions: posts?.solucoes_analiticas_disponiveis,
    companyResolutions: posts?.o_que_a_neoway_resolve,
  };
}

export default async function HomePage() {
  const {
    seo,
    formOurSolutions,
    companyResolutions,
    platformSolutions,
    companySegments,
    customerExperience,
    formAnalyticalSolutions,
  } = await getPosts();

  return (
    <>
      <SEO
        title={seo?.title}
        description={seo?.description}
        englishDescription={seo?.englishDescription}
        englishTitle={seo?.englishTitle}
      />
      <FormOurSolutions data={formOurSolutions} />
      <CompanyResolutions data={companyResolutions} />
      <PlatformSolutionsHome data={platformSolutions} />
      <CompanySegments data={companySegments} />
      <CustomerExperience data={customerExperience} />
      <FormAnalyticalSolutions data={formAnalyticalSolutions} />
    </>
  );
}
