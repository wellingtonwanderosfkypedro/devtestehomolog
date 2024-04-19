import { AppLayout } from "@/components/Layout";
import { AccessibilityProvider } from "@/contexts/AccessibilityContetxt";
import { LangProvider } from "@/helpers/providers/langCtx";
import "@/styles/globals.css";

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {

  return (
    <html lang={lang}>
      <AccessibilityProvider>
        <body>
          <LangProvider isEnglish={lang === "en"}>
            <AppLayout>{children}</AppLayout>
          </LangProvider>
        </body>
      </AccessibilityProvider>
    </html>
  );
}
