import Link from "next/link";
import { ChevronMenu } from "../icons";
import { mockHeader } from "../mockData";
import { useState } from "react";
import { MenuItemRender } from "./MenuItem";
import { MenuItemRenderMobile } from "./MenuItemMobile";

export const NavMobile = () => {
  const headerMenus = mockHeader.headerMenus.edges;
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menuId: any) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };

  return (
    <div>
      <span></span>
      <ul className="flex flex-col items-start justify-center text-base  gap-2 ">
        {headerMenus.map((menu, key) => {
          const menuId = menu.node.id;
          const isMenuActive = activeMenu === menuId;

          return (
            <li
              key={menuId}
              onClick={() => {
                toggleMenu(menuId === "0" ? "" : menuId);
              }}
              className="w-full"
            >
              <Link
                href=""
                className={`flex items-center justify-between  relative p-[10px]`}
              >
                <span
                  className={`font-semibold ${
                    isMenuActive ? "text-blue-500" : "text-blue-700"
                  } `}
                >
                  {menu.node.label}
                </span>
                {key != 0 && (
                  <>
                    <span
                      className={`px-2 transition-all duration-500  rotate-180${
                        isMenuActive && ""
                      }`}
                    >
                      <ChevronMenu
                        color={isMenuActive ? "#1B1B96" : "#232536"}
                      />
                    </span>
                  </>
                )}
              </Link>
              <div className={`bg-transparent  opacity-100`}>
                {isMenuActive && (
                  <MenuItemRenderMobile
                    menuItem={menu.node.childItems?.edges}
                  />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
