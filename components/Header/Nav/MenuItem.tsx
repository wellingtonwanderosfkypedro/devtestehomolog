import Link from "next/link";
import { useRef, useState } from "react";
import { ChevronSeeMore } from "../icons";
import { ChildItem } from "../mockData";
import { SimpleMenu } from "./SimpleMenu";
import { SubMenu } from "./SubMenu";

interface MenuItemProps {
  menuItem?: ChildItem[];
}

export const MenuItemRender: React.FC<MenuItemProps> = ({ menuItem }) => {
  const [isOpenMenu, setIsOpenMenu] = useState<string>(
    menuItem?.[0].node?.id ?? ""
  );
  const [isSimpleIcons, setIsSimpleIcons] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`bg-skin-default text-zinc-900  w-[950px] flex h-full rounded-b-lg ${
        isSimpleIcons ? "pl-6" : "pl-3"
      }`}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <ul
        className={`pt-6 ${
          isSimpleIcons ? "flex w-full h-fit" : "w-[20%] pb-8"
        }`}
      >
        <div
          className={`${
            isSimpleIcons ? "flex flex-wrap  gap-6 pb-8 max-w-[610px]" : ""
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
                  setIsSimpleIcons={setIsSimpleIcons}
                  justIcons={true}
                />
              );
            }
          })}
        </div>
      </ul>

      {menuItem?.map((item, key) => {
        return isOpenMenu === item.node?.id && item.title ? (
          <div
            className={`transition-all w-[80%]  flex flex-col bg-menu p-8  gap-6 rounded-br-lg`}
          >
            {item.headerSection && (
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-skin-base-medium leading-6">
                  {item?.headerSection?.title}
                </h3>
                <p className="font-medium text-sm leading-5 text-gray-700">
                  {item?.headerSection?.description}
                </p>
                <Link
                  href={item.headerSection?.path ?? ""}
                  className="flex gap-2 items-center font-medium text-sm leading-5 text-theme-secondary-300 hover:text-orange-600 hover:underline"
                >
                  {item.headerSection?.label}
                  <ChevronSeeMore />
                </Link>
              </div>
            )}

            <ul
              className={`flex flex-wrap justify-between gap-8 ${
                item.headerSection ?? "flex-col"
              } `}
            >
              {item?.childs?.map((subItem) => {
                return (
                  <SimpleMenu
                    key={subItem.title}
                    menuItem={subItem}
                    justIcons={false}
                    setIsSimpleIcons={setIsSimpleIcons}
                  />
                );
              })}
            </ul>
          </div>
        ) : (
          <></>
        );
      })}
    </div>
  );
};
