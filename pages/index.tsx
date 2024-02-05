

import { CompanyResolutions } from "@/components/CompanyResolutions/CompanyResolutions";
import CompanySegments from "@/components/CompanySegments/CompanySegments";
import CustomerExperience from "@/components/CustomerExperience/CustomerExperience";
import FormAnalyticalSolutions from "@/components/FormAnalyticalSolutions/FormAnalyticalSolutions";
import FormOurSolutions from "@/components/FormOurSolutions/FormOurSolutions";
import { AppLayout } from "@/components/Layout";
import PlatformSolutions from "@/components/PlatformSolutions/PlatformSolutions";
import { SEO } from "@/components/Seo";

import { MenuData } from "@/typings/global";

interface HomePage {
  footerData: MenuData;
}

const HomePage: React.FC<HomePage> = ({ footerData }) => {
  return (
    <AppLayout>
      <SEO
        title="Neoway | Transforme dados em conhecimento"
        description="A Neoway desenvolve soluções de Big Data Analytics e Inteligência Artificial que geram precisão para tomada de decisão e produtividade para seus processos."
      />
      <FormOurSolutions />
      <CompanyResolutions />
      <PlatformSolutions />
      <CompanySegments />
      <CustomerExperience/>
      <FormAnalyticalSolutions />
    </AppLayout>
  );
};

export default HomePage;
