import useComponentAnimation from "@/hooks/useComponentAnimation";
import { CompanyIcon } from "./CompanyIcon";
import { Item } from "./types/companySegments";

interface CompanyGrid {
  items: Item[];
  isEnglish: boolean;
}

export const CompanyGrid = ({ items, isEnglish }: CompanyGrid) => {
  const { isVisible, refElement } = useComponentAnimation();

  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-5">
      {items?.slice(1).map((option) => {
        return (
          <div
            key={isEnglish ? option.englishTitle : option.title}
            ref={refElement}
            className={`${
              isVisible ? "animate-fade-components visible" : "invisible"
            }`}
          >
            <CompanyIcon
              image={option?.logo}
              title={isEnglish ? option.englishTitle : option?.title}
            />
          </div>
        );
      })}
    </div>
  );
};
