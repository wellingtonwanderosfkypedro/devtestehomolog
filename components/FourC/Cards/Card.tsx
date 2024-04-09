import { ICard } from "../types/IFourC";

const Card = ({ card, index }: { card: ICard; index: number }) => {
  return (
    <div
      key={card.title}
      className="bg-white text-center px-5 py-8 flex flex-col items-center w-[25%] shadow-fsiCard rounded-md"
      style={{ boxShadow: "0px 15px 30px -10px #4C4A5E1A" }}
    >
      <p className="font-roboto color-blue-500 bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center">
        {index + 1}
      </p>
      <h4 className="my-3 font-rajdhani font-bold color-gray-500 text-xl">
        {card.title}
      </h4>
      <p className="font-rajdhani color-neutral-300 text-base">{card.text}</p>
    </div>
  );
};

export default Card;
