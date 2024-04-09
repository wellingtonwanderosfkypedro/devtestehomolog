import Image from "next/image";
import { IDiligencias } from "../types/IFourC";

const Diligence = ({ diligencias }: { diligencias: IDiligencias }) => {
  return (
    <div className="flex maxDesktop:max-w-[1440px] px-6 mx-auto mobile:py-10 laptop:py-12 lg:px-24 gap-20">
      <div>
        <h3>{diligencias.title}</h3>
        <p>{diligencias.text}</p>
        {diligencias.cards.map((card, index) => (
          <div key={card.title}>
            <p>{index + 1}</p>
            <Image src={card.src} alt={card.title} width={30} height={30} />
            <h4>{card.title}</h4>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
      <div>
        <Image
          src={diligencias.image.url}
          alt={diligencias.image.alt}
          width={diligencias.image.width}
          height={diligencias.image.height}
        />
      </div>
    </div>
  );
};

export default Diligence;
