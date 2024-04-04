import createMiddleware from "next-intl/middleware";
import { i18n } from "@/i18n";

export default createMiddleware({
  locales: ["pt", "en"],
  localePrefix: "as-needed",
  defaultLocale: "pt",
  localeDetection: true,
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
