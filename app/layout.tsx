import { AppLayout } from "@/components/Layout";
import { langStore } from "@/helpers/providers/getLang";
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
      <body>
        <LangProvider isEnglish={lang === "en"}>
          <AppLayout>{children}</AppLayout>
        </LangProvider>
      </body>
    </html>
  );
}
