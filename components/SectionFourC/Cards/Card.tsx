import { ICard } from "../types/ISectionFourC";

const Card = ({ card, index }: { card: ICard; index: number }) => {
  return (
    <div
      key={card.title}
      className="bg-white text-center tablet:px-5 tablet:py-8 mini:px-3 mini:py-4 flex flex-col items-center tablet:w-[25%] mini:w-[100%] shadow-fsiCard rounded-md"
      style={{ boxShadow: "0px 15px 30px -10px #4C4A5E1A" }}
    >
      <p className="font-roboto color-theme-primary-500 bg-gray-100 tablet:w-16 tablet:h-16 mini:w-9 mini:h-9 rounded-full flex items-center justify-center mini:text-base tablet:text-2xl">
        {index + 1}
      </p>
      <h4 className="tablet:my-3 mini:my-2 font-rajdhani font-bold color-gray-500 tablet:text-xl mini:text-base mini:leading-tight">
        {card.title}
      </h4>
      <p className="font-rajdhani color-neutral-300 tablet:text-base mini:text-[10px] mini:leading-tight">{card.text}</p>
    </div>
  );
};

export default Card;
