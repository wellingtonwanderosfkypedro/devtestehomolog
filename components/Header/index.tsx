"use client";
import { useMedia } from "react-use";

import { DesktopHeader } from "./Desktop";
import { MobileHeader } from "./Mobile";
import { useLangContext } from "@/helpers/providers/langCtx";
import { Langs } from "./types";
import { usePathname } from "next/navigation";

export const Header = () => {
  const { isEnglish } = useLangContext();
  const router = usePathname();

  const langs: Langs = {
    langActive: isEnglish ? "en" : "pt",
    langs: [
      {
        title: "Português",
        codeLang: "pt",
      },
      {
        title: "English",
        codeLang: "en",
      },
    ],
  };

  langs;
  const isMob = useMedia("(max-width: 1024px)", false);

  return (
    <>
      {!isMob ? (
        <DesktopHeader langActive={langs.langActive} langs={langs.langs} />
      ) : (
        <MobileHeader langActive={langs.langActive} langs={langs.langs} />
      )}
    </>
  );
};
