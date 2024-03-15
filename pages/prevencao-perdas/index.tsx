import { AppLayout } from "@/components/Layout";
import { SEO } from "@/components/Seo";

const PrevencaoPerdas = () => {
  const idPage = "prevencao-perdas";

  return (
    <AppLayout>
      <SEO
        title="Neoway | Transforme dados em conhecimento"
        description="A Neoway desenvolve soluções de Big Data Analytics e Inteligência Artificial que geram precisão para tomada de decisão e produtividade para seus processos."
      />
      {/* <FormOurSolutions idPage={idPage} />
      <SpeakWithSpecialist
        title={Mock.title}
        description={Mock.description}
        speakWithSpecialistCards={Mock.speakWithSpecialistCards}
      />
      <PlatformSolutions />

      <CustomerExperience />
      <SpecialistBanner />
      <CompanySegments />
      <Faq idPage={idPage} />
      <FormAnalyticalSolutions /> */}
    </AppLayout>
  );
};

export default PrevencaoPerdas;
