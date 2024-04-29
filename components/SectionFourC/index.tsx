import Cards from "./Cards";
import Diligence from "./Diligence";
import Specialist from "./Specialist";
import { ISectionFourC } from "./types/ISectionFourC";

const SectionFourC = ({
  title,
  subtitle,
  cards,
  itemsDiligencias,
  neowayAjudaGerarResultado,
}: ISectionFourC) => {
  return (
    <section>
      <Cards title={title} description={subtitle} cards={cards} />
      <Diligence diligencias={itemsDiligencias} />
      <Specialist specialist={neowayAjudaGerarResultado} />
    </section>
  );
};

export default SectionFourC;
