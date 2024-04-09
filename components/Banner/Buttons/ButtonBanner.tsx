import Link from "next/link";
import { BannerButton } from "../types/BannerProps";

const ButtonInner = ({
  text,
  transparent,
}: {
  text: string;
  transparent?: boolean;
}) => {
  const transparentClass = transparent ? "bg-transparent" : "bg-orange-600";
  const borderClass = transparent ? "border border-white" : "border border-orange-600";

  return (
    <button
      className={
        `text-white text-center font-archivo py-4 rounded-md laptop:w-[280px] mini:w-full ${transparentClass} ${borderClass}`
      }
    >
      {text}
    </button>
  );
};

const Button = ({ text, url, transparent }: BannerButton) => {
  if (url) {
    return (
      <Link href={url}>
        <ButtonInner text={text} transparent={transparent} />
      </Link>
    );
  }

  return <ButtonInner text={text} transparent={transparent} />;
};

export default Button;
