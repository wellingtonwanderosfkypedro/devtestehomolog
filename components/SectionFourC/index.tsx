import Cards from "./Cards";
import Diligence from "./Diligence";
import Specialist from "./Specialist";
import { ISectionFourC } from "./types/ISectionFourC";

const SectionFourC = ({
  title,
  description,
  cards,
  diligencias,
  specialist,
}: ISectionFourC) => {
  return (
    <section>
      <Cards title={title} description={description} cards={cards} />
      <Diligence diligencias={diligencias} />
      <Specialist specialist={specialist} />
    </section>
  );
};

export default SectionFourC;
