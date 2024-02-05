import { Button } from "../ui/Button";
import ListResolution, { ListProps } from "./ListResolution";

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

export interface Actions {
  textcolor: "purple" | "blue" | "orange";
  list: ListProps[];
  title: string;
  subtitle: string;
  href: string;
}

interface ActionsResolutionsProps {
  resolutions: Actions[];
}

export const ActionResolution = ({ resolutions }: ActionsResolutionsProps) => {
  if (!resolutions) return null;
  return (
    <div className="flex justify-between flex-col lg:flex-row gap-4 lg:gap-0">
      {resolutions.map(({ textcolor, href, list, title, subtitle }) => {
        return (
          <div
            key={textcolor}
            className="border lg:p-8 p-5 border-gray-400 max-w-[399px]"
          >
            <h3
              className={`text-[28px] leading-8 lg:text-[40px] pb-4 max-w-[187px] lg:leading-10 font-rajdhani font-semibold text-${options[textcolor].text}`}
            >
              {title}
            </h3>
            <p className="text-gray-200 pb-8 text-sm lg:text-base leading-4">
              {subtitle}
            </p>
            <ListResolution list={list} />
            <Button
              about="Acessar a solução descrita"
              variant={textcolor}
              text="Conheça a solução"
              href={href}
            />
          </div>
        );
      })}
    </div>
  );
};
