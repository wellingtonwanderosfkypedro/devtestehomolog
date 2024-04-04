"use client";

import { createContext, useContext } from "react";

const LangContext = createContext({ isEnglish: false });

export const LangProvider = ({
  children,
  isEnglish,
}: {
  children: React.ReactNode;
  isEnglish: boolean;
}) => {
  return (
    <LangContext.Provider value={{ isEnglish }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLangContext = () => useContext(LangContext);
