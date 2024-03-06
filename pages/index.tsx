import { CompanyResolutions } from "@/components/CompanyResolutions/CompanyResolutions";
import CompanySegments from "@/components/CompanySegments/CompanySegments";
import CustomerExperience from "@/components/CustomerExperience/CustomerExperience";
import FormAnalyticalSolutions from "@/components/FormAnalyticalSolutions/FormAnalyticalSolutions";
import FormOurSolutions from "@/components/FormOurSolutions/FormOurSolutions";
import { AppLayout } from "@/components/Layout";
//import { PlatformSolutions } from "@/components/PlatformSolutions/PlatformSolutions";
import PlatformSolutionsHome from "@/components/PlatformSolutions/PlatformSolutionsHome";
import { SEO } from "@/components/Seo";
import { fetchImage } from "@/helpers/fetchImage";
import { fetchImagesForItems } from "@/helpers/fetchImagesForItems";
import fetchPosts from "@/helpers/fetchPost";
import { objectValuesToArray } from "@/helpers/objectValuesToArray";

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
}

type HomePageData = {
  seo: any;
  somos_o_maior_hub_de_inteligencia: any;
  o_que_a_neoway_resolve: any;
  fale_com_um_especialista: any;
  conheca_os_nossos_segmentos_de_atuacao: any;
  como_e_a_experiencia_dos_nossos_clientes: any;
  solucoes_analiticas_disponiveis: any;
}

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
    formAnalyticalSolutions 
  } = homePostData;
 
  return (
    <AppLayout>
      <SEO
        title={seo?.title}
        description={seo?.description}
      />
      <FormOurSolutions data={formOurSolutions}/>
      <CompanyResolutions data={companyResolutions} />
      <PlatformSolutionsHome data={platformSolutions} />
      <CompanySegments data={companySegments} />
      <CustomerExperience data={customerExperience} />
      <FormAnalyticalSolutions data={formAnalyticalSolutions}/>
    </AppLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data: HomePageData = await fetchPosts('homepost');

    const seo = data?.seo;

    const formOurSolutions = data.somos_o_maior_hub_de_inteligencia;
    await fetchImage(formOurSolutions, formOurSolutions?.image_desktop, 'image_data_desktop');
    await fetchImage(formOurSolutions, formOurSolutions?.image_mobile, 'image_data_mobile');
    await fetchImage(formOurSolutions?.form, formOurSolutions?.form?.icon, 'image_data');
  
    const companyResolutions = data?.o_que_a_neoway_resolve;
    const companyResolutionsSubItemsWidthImage = await Promise.all(objectValuesToArray(companyResolutions?.items)?.map(async (item) => ({
      ...item,
      sub_items: await fetchImagesForItems(item?.sub_items)
    })));
    companyResolutions.items = companyResolutionsSubItemsWidthImage;

    const platformSolutions = data?.fale_com_um_especialista;
    await fetchImage(platformSolutions, platformSolutions?.image, 'image_data');

    const companySegments = data?.conheca_os_nossos_segmentos_de_atuacao;
    const companySegmentsItemsWidthImage = await fetchImagesForItems(companySegments?.items);
    companySegments.items = companySegmentsItemsWidthImage;

    const customerExperience = data?.como_e_a_experiencia_dos_nossos_clientes;
    const customerExperienceItemsWidthImage = await fetchImagesForItems(customerExperience?.items);
    customerExperience.items = customerExperienceItemsWidthImage;

    const formAnalyticalSolutions = data?.solucoes_analiticas_disponiveis;
    await fetchImage(formAnalyticalSolutions, formAnalyticalSolutions?.image_desktop, 'image_data_desktop');
    await fetchImage(formAnalyticalSolutions?.form, formAnalyticalSolutions?.form?.icon, 'image_data');
  
    return {
      props: {
        homePostData: {
          seo,
          formOurSolutions,
          companyResolutions,
          platformSolutions,
          companySegments,
          customerExperience,
          formAnalyticalSolutions
        }
      },
      revalidate: 60
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        homePostData: null
      },
      revalidate: 60
    };
  }
};

export default HomePage;
