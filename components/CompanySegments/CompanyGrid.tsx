import { CompanyIcon } from "./CompanyIcon";
import { Item } from "./types/companySegments";

interface CompanyGrid {
  items: Item[];
}

export const CompanyGrid = ({ items }: CompanyGrid) => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-5">
      {items?.slice(1).map((option) => {
        return (
          <div key={option.title}>
            <CompanyIcon image={option?.logo} title={option?.title} />
          </div>
        );
      })}
    </div>
  );
};
