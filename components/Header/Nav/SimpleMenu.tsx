import Image from "next/image";
import Link from "next/link";
import { useMedia } from "react-use";

import { ChildItem } from "../mockData";
import { Dispatch, SetStateAction, useEffect } from "react";

interface MenuItemProps {
  menuItem?: ChildItem;
  justIcons?: boolean;
  setIsSimpleIcons?: Dispatch<SetStateAction<boolean>>;
}

export const SimpleMenu = ({
  menuItem,
  justIcons,
  setIsSimpleIcons,
}: MenuItemProps) => {

  useEffect(() => {
    if (justIcons && setIsSimpleIcons) {
      setIsSimpleIcons(true);
    }
  }, [justIcons, setIsSimpleIcons]);

  const itemMenu = menuItem?.node;
  return (
    <>
      {" "}
      <Link
        href={itemMenu?.path ?? ""}
        className="min[1024px]:max-w-[45%]  w-[290px]"
      >
        <li className={`flex items-start gap-2`}>
          {itemMenu?.icon && (
            <Image
              src={`/icons/${itemMenu?.icon}`}
              alt={`${itemMenu?.label} icon`}
              width={36}
              height={36}
              className={`hidden lg:block`}
            />
          )}
          <div className={`text-blue-700  hover:text-blue-500 `}>
            <h4
              className={`flex items-center gap-2  ${!justIcons ? " text-base" : "text-2xl "
                } ${"text-sm font-medium px-2.5 py-1 lg:font-semibold lg:text-2xl lg:p-0"}`}
            >
              {itemMenu?.label}
            </h4>
            {itemMenu?.title && (
              <p className="text-gray-200 hover:text-blue-500 text-sm  font-medium">
                {itemMenu.title}
              </p>
            )}
          </div>
        </li>
      </Link>
    </>
  );
};
