"use client";
import Link from "next/link";
import Image from "next/image";
import LogoMobile from "./assets/logoMobile.png";
import Logo from "./assets/logo.png";
import LogoFixedMobile from "./assets/logoMobileFixed.png";
import LogoFixed from "./assets/logoFixed.png";

import { ChooseThemeIcon, LoginIcon } from "./icons";
import { useEffect, useState } from "react";
import { NavMobile } from "./Nav/NavMobile";
import useScrollHeader from "../../hooks/useScrollHeader";
import { useWindowSize } from "react-use";
import { Langs } from "./types";
import { usePathname } from "next/navigation";
import { useAccessibilityContext } from "@/contexts/AccessibilityContetxt";

export const MobileHeader = ({ langActive, langs }: Langs) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { handleSetCookie, cookieItem } = useAccessibilityContext();

  const path = usePathname();

  const headerWhite = useScrollHeader();

  const windowSize = useWindowSize();

  const [showModalLang, setShowModalLang] = useState(false);

  const showModal = () => {
    setShowModalLang(!showModalLang);
  };

  const logoHeaderFixed = {
    fixed: windowSize.width >= 400 ? LogoFixed : LogoFixedMobile,
    normal: windowSize.width >= 400 ? Logo : LogoMobile,
  };

  const openMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    if (cookieItem.theme) {
      document.documentElement.classList.add("theme-accessibility");
    } else {
      document.documentElement.classList.remove("theme-accessibility");
    }

    if (cookieItem.font) {
      document.documentElement.classList.add("font-accessibility");
    } else {
      document.documentElement.classList.remove("font-accessibility");
    }
  }, [cookieItem]);

  useEffect(() => {
    const handleScroll = () => {
      const htmlElement = document.querySelector("html");
      if (htmlElement) {
        if (isOpenMenu === true) {
          htmlElement.style.overflow = "hidden";
        } else {
          htmlElement.style.overflow = "auto";
        }
      }
    };

    handleScroll();

    return () => {
      const htmlElement = document.querySelector("html");
      if (htmlElement) {
        htmlElement.style.overflow = "auto";
      }
    };
  }, [isOpenMenu]);

  return (
    <header
      className={`w-full transition-all duration-100 ease-in  transform mx-auto pt-4 z-30 font-rajdhani fixed ${
        isOpenMenu || headerWhite
          ? "bg-skin-default border-b-[1px] border-theme-primary-100"
          : "bg-transparent"
      } `}
    >
      <div
        className={`navbar flex justify-between items-center px-6 pb-6 ${
          isOpenMenu && "border-b-[1px] border-theme-primary-100"
        }`}
      >
        <Link href="#" className="pb-1 ">
          <Image
            src={
              isOpenMenu || headerWhite
                ? logoHeaderFixed.fixed
                : logoHeaderFixed.normal
            }
            alt="Logo Neoway"
            className=" "
          />
        </Link>

        <div className="flex items-center justify-between gap-5">
          {!isOpenMenu && (
            <>
              <button onClick={() => handleSetCookie("theme")}>
                <ChooseThemeIcon color={headerWhite ? "#1D1B9D" : "#FFF"} />
              </button>

              <button onClick={() => handleSetCookie("font")}>
                <span
                  className={`text-base font-medium ${
                    headerWhite ? "text-theme-primary-500" : "text-skin-primary"
                  }`}
                >
                  Aa
                </span>
              </button>

              <div
                className="px-3 cursor-pointer relative group"
                onClick={showModal}
              >
                <span
                  className={`text-base font-medium text-nowrap uppercase ${
                    headerWhite ? "text-theme-primary-500" : "text-skin-primary"
                  } `}
                >
                  {langActive}
                </span>

                {!showModalLang && (
                  <div className="absolute bg-skin-default top-[24px] left-[-50%] hidden group-hover:block">
                    {/* <ul>
                      {langs.map((lang, idx) => {
                        return (
                          <>
                            <Link
                              href={`${path}`}
                              className={`text-base font-medium text-nowrap uppercase  text-theme-primary-500 ${showModalLang ? "font-semibold" : ""
                                }`}
                            >
                              <li key={idx} className="px-2 py-2">
                                {" "}
                                {lang.title}
                              </li>
                            </Link>
                          </>
                        );
                      })}
                    </ul> */}
                  </div>
                )}
              </div>
            </>
          )}

          <button onClick={openMenu} className="w-[18px] h-[12px]">
            <span
              className={`block relative transition duration-500 ease-in-out h-[2px] rounded-full ${
                isOpenMenu
                  ? "bg-transparent"
                  : headerWhite
                  ? "bg-black-300"
                  : "bg-skin-default"
              }`}
            >
              <span
                className={` block w-full h-full absolute transition duration-500 ease-in-out rounded-full ${
                  isOpenMenu
                    ? "bg-black-300 transform rotate-[135deg]  h-[1px]"
                    : headerWhite
                    ? "bg-black-300 top-[-8px]"
                    : "top-[-8px] bg-skin-default"
                } `}
              ></span>
              <span
                className={` block w-full h-full absolute transition duration-500 ease-in-out rounded-full ${
                  isOpenMenu
                    ? "bg-black-300 transform rotate-[-135deg] bg-black h-[1px]"
                    : headerWhite
                    ? "bg-black-300 bottom-[-8px]"
                    : "bottom-[-8px] bg-skin-default"
                } `}
              ></span>
            </span>
          </button>
        </div>
      </div>
      <div
        className={`trasition-all duration-300 transform  ease-in  text-skin-bolder block absolute  bg-inherit w-full z-50 top-[90px] ${
          isOpenMenu
            ? "h-screen top-4  overflow-y-auto "
            : " overflow-y-hidden  h-0"
        } `}
      >
        <div className="flex justify-center py-4 max-[500px]:px-4">
          <Link
            href="https://apps.neoway.com.br/auth/login?_gl=1*1g8rov2*_ga*MTI1MDY2Ny4xNzAyNTcwMjQ1*_ga_D0GKM1QCJT*MTcwNTY3MTQ4MC43LjAuMTcwNTY3MTQ4MC42MC4wLjA"
            className="flex gap-[10px] max-[500px]:gap-[6px] cursor-pointer py-3 px-12 max-[420px]:px-5"
          >
            <LoginIcon color={"#E96024"} />
            <span className="text-base text-skin-base-medium text-nowrap">
              Fazer login
            </span>
          </Link>
          <Link
            href=""
            className="flex text-theme-secondary-500 bg-theme-secondary-500/[.15] text-sm font-semibold py-3 px-12 max-[420px]:px-5 border-[1px] border-theme-secondary-500 text-nowrap"
          >
            Contato Comercial
          </Link>
        </div>
        <div className="px-6">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};
