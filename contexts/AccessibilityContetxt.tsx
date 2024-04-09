"use client"
import Cookies from 'universal-cookie';
import { createContext, useContext, useMemo, useState } from "react";

interface AccessibilityContextProps {
  cookieItem: any;
  setCookieItem: React.Dispatch<React.SetStateAction<any>>;
  handleSetCookie: () => void;
}

const AccessibilityContext = createContext({} as AccessibilityContextProps);

function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const cookies = new Cookies();

  const [cookieItem, setCookieItem] = useState(cookies.get('theme-accessibility') ?? false)
  
  function handleSetCookie() {
    const hasCookie = cookies.get('theme-accessibility')

    if (!hasCookie) {
      cookies.set('theme-accessibility', true)
      
      setCookieItem(cookies.get('theme-accessibility'))

      return
    }

    cookies.set('theme-accessibility', false)
      
    setCookieItem(cookies.get('theme-accessibility'))
  }
  
  const valuesMemoized = useMemo(
    () => ({
      cookieItem,
      setCookieItem,
    }),
    [cookieItem, setCookieItem],
  );

  return (
    <AccessibilityContext.Provider value={{...valuesMemoized, handleSetCookie}}>
      {children}
    </AccessibilityContext.Provider>
  )
}

const useAccessibilityContext = () => {
  return useContext(AccessibilityContext)
}

export { AccessibilityProvider, useAccessibilityContext };
