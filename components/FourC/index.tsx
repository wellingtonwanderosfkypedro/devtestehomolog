import { useMedia } from "react-use";
import Cards from "./Cards";
import Diligence from "./Diligence";
import Specialist from "./Specialist";
import { IFourC } from "./types/IFourC";

const FourC = ({
  title,
  description,
  cards,
  diligencias,
  specialist,
}: IFourC) => {
    
    const isMob = useMedia("(max-width: 500px)", false)

  return (
    <section>
      <Cards title={title} description={description} cards={cards} />
      <Diligence diligencias={diligencias} />
      <Specialist specialist={specialist} />
    </section>
  );
};

export default FourC;
