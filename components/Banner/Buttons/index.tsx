import ButtonBanner from "./ButtonBanner";
import { BannerButton } from "../types/BannerProps";

const Buttons = ({ buttons }: { buttons?: BannerButton[] }) => {
  const onlyMobileButton = true;
  if (!buttons || buttons.length === 0) {
    return null;
  }

  return (
    <div
      className={
        "flex gap-3 mini:flex-col laptop:flex-row mini:mt-5 tablet:mt-10" +
        (onlyMobileButton ? "lg:hidden" : "")
      }
    >
      {buttons.map((button) => (
        <ButtonBanner {...button} key={button.text} />
      ))}
    </div>
  );
};

export default Buttons;
