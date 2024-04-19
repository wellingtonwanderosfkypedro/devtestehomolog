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
import { fsiMockBanner } from "./mocks/fsiMockBanner";
import { fsiMockSolutions } from "./mocks/fsiMockSolutions";
import { fsiMockForm } from "./mocks/fsiMockForm";
import { fsiMockSectionFourC } from "./mocks/fsiMockSectionFourC";
import { fsiMockSlideSolutions } from "./mocks/fsiMockSlideSolutions";
import { fsiMockRegulation } from "./mocks/fsiMockRegulation";
import { fsiMockLastCases } from "./mocks/fsiMockLastCases";
import { newsletter } from "./mocks/newsLetter";

const FSI = () => {
  return (
    <>
      <Banner {...fsiMockBanner} />
      <Solutions {...fsiMockSolutions}/>
      <OurValues {...fsiMockSlideSolutions} />
      <Regulation {...fsiMockRegulation} />
      <SectionFourC {...fsiMockSectionFourC}/>
      <LastCases {...fsiMockLastCases} />
      <FormAnalyticalSolutions data={fsiMockForm} />
      <Newsletter {...newsletter} />
    </>
  );
};

export default FSI;
