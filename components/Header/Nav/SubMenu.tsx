import { Dispatch, SetStateAction, useState } from "react";
import { useMedia } from "react-use";

import { ChildItem } from "../mockData";

interface SubMenuItemProps {
  subMenuItem?: ChildItem;
  handleMenuClick: Dispatch<SetStateAction<string>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const SubMenu = ({
  subMenuItem,
  handleMenuClick,
  isOpen,
  setIsOpen,
}: SubMenuItemProps) => {
  const isMob = useMedia("(max-width: 1024px)", false);

  const handleMenuItemClick = (e: React.MouseEvent, nodeId?: string) => {
    e.stopPropagation();
    handleMenuClick(nodeId ?? "");
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex submenu w-full cursor-pointer">
        <div
          className={`text-skin-base-medium font-medium p-2.5 w-full ${
            isOpen && !isMob && "bg-theme-primary-500 text-skin-primary"
          } ${isMob ? "py-1" : ""}`}
        >
          <li onClick={(e) => handleMenuItemClick(e, subMenuItem?.node?.id)}>
            <span className={`${isMob && "text-sm font-medium"}`}>
              {subMenuItem?.title}
            </span>
          </li>
        </div>
      </div>
    </>
  );
};
