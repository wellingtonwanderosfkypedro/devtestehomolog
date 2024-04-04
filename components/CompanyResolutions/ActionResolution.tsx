import { langStore } from "@/helpers/providers/getLang";
import { Button } from "../ui/Button";
import ListResolution from "./ListResolution";
import { Item } from "./types/companyResolutionsTypes";

const options = {
  purple: {
    text: "blue-300",
  },
  blue: {
    text: "blue-800",
  },
  orange: {
    text: "orange-300",
  },
};

interface ActionsResolutionsProps {
  resolutions: Item[];
}

export const ActionResolution = ({ resolutions }: ActionsResolutionsProps) => {
  const isEnglish = langStore.getLang();
  if (!resolutions) return null;

  return (
    <div className="flex justify-between flex-col lg:flex-row gap-4 lg:gap-0">
      {resolutions?.map(
        ({
          title,
          description,
          sub_items,
          button,
          color,
          englishTitle,
          englishDescription,
          englishButton,
        }) => {
          return (
            <div
              key={isEnglish ? englishTitle : title}
              className="border lg:p-8 p-5 border-gray-400 max-w-[399px]"
            >
              <h3
                className={`text-[28px] leading-8 lg:text-[40px] pb-4 max-w-[187px] lg:leading-10 font-rajdhani font-semibold text-${options[color].text}`}
              >
                {title}
              </h3>
              <p className="text-gray-200 pb-8 text-sm lg:text-base leading-4">
                {isEnglish ? englishDescription : description}
              </p>
              <div className="pb-5 flex flex-col justify-between gap-5">
                {sub_items.map((subItem, key) => (
                  <ListResolution key={key} subItem={subItem} />
                ))}
              </div>
              <Button
                target={button.target}
                about={isEnglish ? englishButton.title : button.title}
                variant={color}
                text={isEnglish ? englishButton.title : button.title}
                href={isEnglish ? englishButton.url : button.url}
              />
            </div>
          );
        }
      )}
    </div>
  );
};
