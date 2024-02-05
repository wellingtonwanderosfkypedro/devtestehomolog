"use client";
import { useMedia } from "react-use";

import { DesktopHeader } from "./Desktop";
import { MobileHeader } from "./Mobile";

export const Header = () => {
  const isMob = useMedia("(max-width: 1024px)", false);

  return <>{!isMob ? <DesktopHeader /> : <MobileHeader />}</>;
};
