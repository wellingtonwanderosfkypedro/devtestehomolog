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
import { fsiMockBanner } from "../../helpers/mocks/fsi/mocks/fsiMockBanner";
import { fsiMockSolutions } from "../../helpers/mocks/fsi/mocks/fsiMockSolutions";
import { fsiMockForm } from "../../helpers/mocks/fsi/mocks/fsiMockForm";
import { fsiMockSectionFourC } from "../../helpers/mocks/fsi/mocks/fsiMockSectionFourC";
import { fsiMockSlideSolutions } from "../../helpers/mocks/fsi/mocks/fsiMockSlideSolutions";
import { fsiMockRegulation } from "../../helpers/mocks/fsi/mocks/fsiMockRegulation";
import { fsiMockLastCases } from "../../helpers/mocks/fsi/mocks/fsiMockLastCases";
import { newsletter } from "../../helpers/mocks/fsi/mocks/newsLetter";
import MultipleSolutions from "@/components/MultipleSolutions";
import { sliderCompanies } from "@/helpers/mocks/fsi/mocks/fsiMockSliderCompanies";
import { NumerosComConfianca } from "@/components/NumerosDeConfiança";
import { mockNumerosConfianca } from "@/helpers/mocks/fsi/mocks/fsiMockNumerosConfiança";

const FSI = () => {
  return (
    <>
      <Banner data={fsiMockBanner} />
      <Solutions {...fsiMockSolutions} />
      <OurValues
        data={fsiMockSlideSolutions}
        slidesView={3.3}
        fsiStyle={true}
      />
      <Regulation {...fsiMockRegulation} />
      <SectionFourC {...fsiMockSectionFourC} />
      <LastCases {...fsiMockLastCases} />
      <NumerosComConfianca {...mockNumerosConfianca} />
      <MultipleSolutions {...sliderCompanies} />

      <Newsletter
        data={newsletter}
        backgroundAcceptImage={false}
        textColor="#1B1B96"
      />
      <FormAnalyticalSolutions data={fsiMockForm} />
    </>
  );
};

export default FSI;
