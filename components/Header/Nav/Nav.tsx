import Link from "next/link";
import { ChevronMenu } from "../icons";
import { mockHeader } from "../mockData";
import { useEffect, useState } from "react";
import { MenuItemRender } from "./MenuItem";

interface INavProps {
  isHeaderWhite: boolean;
}

export const Nav = ({ isHeaderWhite }: INavProps) => {
  const headerMenus = mockHeader.headerMenus.edges;
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menuId: any) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };

  useEffect(() => {
    const handleScroll = () => {
      setActiveMenu(null);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <span></span>
      <ul className="flex items-center justify-center p-3 text-base  gap-2 min-[1100px]:gap-4 min-[1400px]:gap-10">
        {headerMenus.map((menu, key) => {
          const menuId = menu.node.id;
          const isMenuActive = activeMenu === menuId;

          return (
            <li
              key={menuId}
              onClick={() => {
                toggleMenu(menuId === "0" ? "" : menuId);
              }}
              className=" group"
            >
              <Link
                href=""
                className={`flex items-center justify-center gap-2 relative group `}
              >
                <span
                  className={`font-medium ${
                    isHeaderWhite ? "text-blue-700" : "text-white"
                  }`}
                >
                  {menu.node.label}
                </span>
                {key != 0 && (
                  <span
                    className={`px-2 transition-all duration-500  rotate-180${
                      isMenuActive && ""
                    }`}
                  >
                    <ChevronMenu color={isHeaderWhite ? "#232536" : "#FFF"} />
                  </span>
                )}
                <span
                  className={`absolute top-[305%]  h-1 w-[120%] opacity-0 bg-blue-50  ${
                    !isMenuActive && "group-hover:opacity-100  transition-all"
                  }`}
                ></span>
              </Link>
              <div
                className={`absolute bg-transparent  min-h-[430px] top-full opacity-100 z-10  left-[15%] ${
                  isMenuActive && " group-hover:opacity-100 animate-show-menu"
                }`}
              >
                {isMenuActive && (
                  <MenuItemRender menuItem={menu.node.childItems?.edges} />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
