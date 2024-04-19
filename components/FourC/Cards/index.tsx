'use client';
import { useMedia } from "react-use";
import { ICard } from "../types/IFourC";
import Card from "./Card";

interface ICards {
  title: string;
  description: string;
  cards: ICard[];
}

const Cards = ({ title, description, cards }: ICards) => {
  const isMob = useMedia("(max-width: 500px)", false);

  const backgroundDesktop = {
    backgroundImage: `url(/mocks/fsi/FourC/FourCBannerTop.png)`,
  };
  const backgroundMobile = {
    background: `#1D1B9D`,
  };

  return (
    <div style={isMob ? backgroundMobile : backgroundDesktop}>
      <div className="flex flex-col items-center maxDesktop:max-w-[1440px] px-6 mx-auto mobile:py-10 laptop:py-12 lg:px-24 relative min-h-[412px] mb-[257px]">
        <div className="flex text-white gap-10 mb-[70px]">
          <h3 className="text-4xl font-bold font-rajdhani w-6/12">{title}</h3>
          <p className="font-roboto text-lg w-6/12">{description}</p>
        </div>
        <div className="flex gap-8 absolute top-[236px] maxDesktop:max-w-[1440px] mx-auto px-6 lg:px-24">
          {cards.map((card, index) => (
            <Card card={card} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
