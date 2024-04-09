import { useMedia } from "react-use";
import { ICard } from "../types/ISectionFourC";
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
      <div className="flex flex-col items-center maxDesktop:max-w-[1440px] tablet:px-6 mini:px-5 mx-automini:py-6 laptop:py-12 mini:py-6 lg:px-24 laptop:mx-auto relative mini:min-h-[700px] mobile:min-h-[556px] tablet:min-h-[412px] mini:mb-[154px] tablet:mb-[257px]">
        <div className="flex mini:flex-col tablet:flex-row text-white mini:gap-4 tablet:gap-10 mb-[70px]">
          <h3 className="mini:text-2xl tablet:text-4xl font-bold font-rajdhani tablet:w-6/12 mini:w-full">
            {title}
          </h3>
          <p className="font-roboto mini:text-[14px] tablet:text-lg tablet:w-6/12 mini:w-full">
            {description}
          </p>
        </div>
        <div className="tablet:flex mini:grid mini:grid-cols-2 tablet:gap-8 mini:gap-2 mobile:gap-3 absolute mini:top-[270px] mobile:top-[235px] maxDesktop:max-w-[1440px] mx-auto tablet:px-6 mini:px-5 lg:px-24">
          {cards.map((card, index) => (
            <Card card={card} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
