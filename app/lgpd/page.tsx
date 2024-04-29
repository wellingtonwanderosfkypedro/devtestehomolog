import { AppLayout } from "@/components/Layout";
import Banner from "@/components/Banner";
import Solutions from "@/components/Solutions";
import FormAnalyticalSolutions from "@/components/FormAnalyticalSolutions/FormAnalyticalSolutions";
import SectionFourC from "@/components/SectionFourC";
import OurValues from "@/components/OurValues/OurValues";
import Regulation from "@/components/Regulation";
import LastCases from "@/components/LastCases";
import Newsletter from "@/components/Newsletter";

// MOCKS

import { newsletter } from "../../helpers/mocks/fsi/mocks/newsLetter";
import MultipleSolutions from "@/components/MultipleSolutions";
import { lgpdMockBanner } from "@/helpers/mocks/lgpd/mocks/lgpdMockBanner";
import { multipleSolutions, ourValues } from "@/helpers/mocks/about/mock";
import { DadosEPrivacidade } from "@/components/DadosEPrivacidade";
import { lgpdDadosEPrivacidade } from "@/helpers/mocks/lgpd/mocks/lgpdDadosEPrivacidade";
import Transparencia from "@/components/Transparencia";
import { lgpdTransparencia } from "@/helpers/mocks/lgpd/mocks/lgpdTransparencia";
import { ManualLGPD } from "@/components/ManualLGPD";
import { lgpdManualLGPD } from "@/helpers/mocks/lgpd/mocks/lgpdManualLGPD";

const FSI = () => {
  return (
    <>
      <Banner data={lgpdMockBanner} />
      <DadosEPrivacidade {...lgpdDadosEPrivacidade} />
      <Transparencia {...lgpdTransparencia} />
      <OurValues data={ourValues} slidesView={3.3} />
      <ManualLGPD {...lgpdManualLGPD} />

      <MultipleSolutions {...multipleSolutions} />

      <Newsletter data={newsletter} />
    </>
  );
};

export default FSI;
