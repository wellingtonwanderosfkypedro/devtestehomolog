import CompanySegments from "@/components/CompanySegments/CompanySegments";
import CustomerExperience from "@/components/CustomerExperience/CustomerExperience";
import { Faq } from "@/components/Faq";
import FormAnalyticalSolutions from "@/components/FormAnalyticalSolutions/FormAnalyticalSolutions";
import FormOurSolutions from "@/components/FormOurSolutions/FormOurSolutions";
import { AppLayout } from "@/components/Layout";
import { PlatformSolutions } from "@/components/PlatformSolutions/PlatformSolutions";
import { SEO } from "@/components/Seo";
import { SpeakWithSpecialist } from "@/components/SpeakWithSpecialist/SpeakWithSpecialist";
import { SpecialistBanner } from "@/components/SpecialistBanner";
import { mockSpeakWithSpecialistSales as Mock } from "@/components/SpeakWithSpecialist/mockData";

const PrevencaoPerdas = () => {
  const idPage = "sales-marketing";
  return (
    <AppLayout>
      <SEO
        title="Neoway | Transforme dados em conhecimento"
        description="A Neoway desenvolve soluções de Big Data Analytics e Inteligência Artificial que geram precisão para tomada de decisão e produtividade para seus processos."
      />
      <FormOurSolutions idPage={idPage} />
      <SpeakWithSpecialist
        title={Mock.title}
        description={Mock.description}
        speakWithSpecialistCards={Mock.speakWithSpecialistCards}
      />
      <PlatformSolutions />
      <PlatformSolutions idPage={idPage} />

      <CustomerExperience />
      <SpecialistBanner />
      <CompanySegments />
      <Faq idPage={idPage} />
      <FormAnalyticalSolutions />
    </AppLayout>
  );
};

export default PrevencaoPerdas;
