"use client";
import Cookies from "universal-cookie";
import { createContext, useContext, useMemo, useState } from "react";

interface AccessibilityContextProps {
  cookieItem: any;
  setCookieItem: React.Dispatch<React.SetStateAction<any>>;
  handleSetCookie: (cookieType: string) => void;
}

const AccessibilityContext = createContext({} as AccessibilityContextProps);

function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const themeAccessibility = {
    font: false,
    theme: false,
  };
  const cookies = new Cookies();

  const [cookieItem, setCookieItem] = useState(themeAccessibility);

  function handleSetCookie(cookieType: string) {
    const hasCookie = cookies.get(cookieType);

    const updatedThemeAccess = {
      ...cookieItem,
      [cookieType]: !hasCookie,
    };

    setCookieItem(updatedThemeAccess);
    cookies.set(cookieType, !hasCookie);
  }

  const valuesMemoized = useMemo(
    () => ({
      cookieItem,
      setCookieItem,
    }),
    [cookieItem, setCookieItem]
  );

  return (
    <AccessibilityContext.Provider
      value={{ ...valuesMemoized, handleSetCookie }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

const useAccessibilityContext = () => {
  return useContext(AccessibilityContext);
};

export { AccessibilityProvider, useAccessibilityContext };
