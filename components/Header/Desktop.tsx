"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "./assets/logo.png";
import LogoFixed from "./assets/logoFixed.png";

import { ChooseThemeIcon, LoginIcon } from "./icons";
import { Nav } from "./Nav/Nav";
import useScrollHeader from "../../hooks/useScrollHeader";
import { useState } from "react";
import { Langs } from "./types";
import { usePathname } from "next/navigation";

export const DesktopHeader = ({ langActive, langs }: Langs) => {
  const headerWhite = useScrollHeader();
  const path = usePathname();

  const [showModalLang, setShowModalLang] = useState(false);

  const showModal = () => {
    setShowModalLang(!showModalLang);
  };

  return (
    <header
      className={` w-full mx-auto pt-4 px-2 min-[1100px]:px-4 font-rajdhani  fixed z-50 transition-all  duration-0 border-b-[1px] ${
        headerWhite
          ? "bg-white  border-gray-100"
          : "bg-transparent  border-gray-300"
      } `}
    >
      <div className="maxDesktop:max-w-[1440px] min-[1120px]:w-11/12 mx-auto flex justify-between items-center pb-6 relative">
        <Link href="#" className="pb-1 ">
          {headerWhite ? (
            <Image
              src={LogoFixed}
              alt="Logo Neoway"
              className=" max-w-[154px] h-[74px]"
            />
          ) : (
            <Image
              src={Logo}
              alt="Logo Neoway"
              className=" max-w-[154px] h-[74px]"
            />
          )}
        </Link>
        <Nav isHeaderWhite={headerWhite} />
        <div className="flex items-center justify-between">
          <button
            className={`flex gap-[10px] cursor-pointer py-3  items-center ${
              headerWhite ? "" : ""
            } `}
          >
            <ChooseThemeIcon headerWhite={headerWhite} />
            <span
              className={`text-base font-medium px-1 w-[35px] h-[35px] leading-[35px] ${
                headerWhite
                  ? "text-blue-900 hover:bg-blue-500 hover:text-white"
                  : "text-white hover:bg-white hover:text-blue-900"
              }  hover:font-semibold`}
            >
              Aa
            </span>
          </button>

          <div className="px-5 cursor-pointer relative group">
            <span
              className={`text-base font-medium text-nowrap uppercase ${
                headerWhite ? "text-blue-900" : "text-white"
              } hover:underline hover:font-semibold`}
            >
              {langActive}
            </span>

            <div className="absolute bg-white top-[24px] left-[-15%] hidden group-hover:block">
              <ul>
                {langs.map((lang, idx) => {
                  return (
                    <>
                      <Link
                        href={`${path}${lang.codeLang}`}
                        className={`text-base font-medium text-nowrap uppercase  text-blue-900 hover:font-semibold`}
                      >
                        <li key={idx} className="px-2 py-2">
                          {" "}
                          {lang.title}
                        </li>
                      </Link>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>

          <Link
            href="#"
            className="flex gap-[10px] cursor-pointer py-3 px-5 min-[1290px]:px-12 min-[1290px]:pl-0 "
          >
            <LoginIcon color={headerWhite ? "#1D1B9D" : "#FFF"} />
            <span
              className={`text-base font-medium text-nowrap ${
                headerWhite ? "text-blue-900" : "text-white"
              } hover:underline`}
            >
              Fazer login
            </span>
          </Link>

          <Link
            href="https://apps.neoway.com.br/auth/login?_gl=1*1g8rov2*_ga*MTI1MDY2Ny4xNzAyNTcwMjQ1*_ga_D0GKM1QCJT*MTcwNTY3MTQ4MC43LjAuMTcwNTY3MTQ4MC42MC4wLjA"
            className="flex bg-blue-500 text-base font-bold py-3 px-7 min-[1290px]:px-12 text-white text-nowrap hover:bg-white hover:text-blue-800 border border-blue-800 transition-all duration-500"
          >
            Contato Comercial
          </Link>
        </div>
      </div>
    </header>
  );
};
