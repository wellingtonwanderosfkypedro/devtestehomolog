import { Archivo, Rajdhani, Roboto } from "next/font/google";
import { ReactNode } from "react";
import Footer from "../Footer";
import { Header } from "../Header";
import { AccessibilityProvider } from "@/contexts/AccessibilityContetxt";

const fontRajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-family-rajdhani",
});

const fontRoboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-family-roboto",
});

const fontArchivo = Archivo({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-family-archivo",
});

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <AccessibilityProvider>
      <main
        className={`${fontRajdhani.variable} ${fontRoboto.variable} ${fontArchivo.variable} bg-skin-default`}
      >
        <Header />
        <>{children}</>
        <Footer  />
      </main>
    </AccessibilityProvider>
  );
};

