import { useState } from "react";
import { ChildItem } from "../mockData";
import { SimpleMenu } from "./SimpleMenu";
import { SubMenu } from "./SubMenu";
import Link from "next/link";
import Image from "next/image";
import { ChevronSeeMore } from "../icons";

interface MenuItemProps {
  menuItem?: ChildItem[];
  ismobile?: boolean;
}

export const MenuItemRenderMobile: React.FC<MenuItemProps> = ({ menuItem }) => {
  const [isOpenMenu, setIsOpenMenu] = useState<string>(
    menuItem?.[0].node?.id ?? ""
  );
  const [isSimpleIcons, setIsSimpleIcons] = useState(false);

  return (
    <div
      className={`bg-white text-zinc-900  rounded-b-lg ${isSimpleIcons ? "pl-6" : "pl-3"
        }`}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <ul className={`pt-2  "flex w-full"`}>
        <div
          className={`flex flex-col gap-1 ${isSimpleIcons ? "flex flex-wrap  gap-6" : ""
            }`}
        >
          {menuItem?.map((item, key) => {
            if (item.title) {
              return (
                <SubMenu
                  key={key}
                  subMenuItem={item}
                  handleMenuClick={setIsOpenMenu}
                  isOpen={isOpenMenu === item.node?.id}
                  setIsOpen={() => {
                    setIsOpenMenu(item.node?.id ?? "");
                  }}
                />
              );
            } else {
              return (
                <SimpleMenu
                  key={item.node?.id}
                  menuItem={item}
                  justIcons={true}
                />
              );
            }
          })}
        </div>
      </ul>
    </div>
  );
};
