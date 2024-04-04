"use client";
import Head from "next/head";
import { usePathname } from "next/navigation";

import faviconIco from "@/assets/favicons/favicon-48_48.ico";
import appleTouchIcon from "@/assets/favicons/favicon-apple-touch-icon.svg";
import favicon32 from "@/assets/favicons/favicon-32_32.svg";
import favicon16 from "@/assets/favicons/favicon-16_16.svg";
import defaultImage from "@/assets/images/default.jpg";
import { useLangContext } from "@/helpers/providers/langCtx";

interface SEOProps {
  title: string;
  englishTitle?: string;
  description?: string;
  englishDescription?: string;
  image?: string;
  type?: "website" | "article";
}

const pageImage = process.env.NEXT_PUBLIC_ROOT_URL + defaultImage.src.slice(1);

const ROOT_URL = process.env.NEXT_PUBLIC_ROOT_URL as string;

export const SEO = ({
  title,
  description,
  englishTitle,
  englishDescription,
  image = pageImage,
  type = "website",
}: SEOProps) => {
  const { isEnglish } = useLangContext();

  const router = usePathname();

  const url = `${ROOT_URL}/${router}`;

  return (
    <Head>
      <title>{isEnglish ? englishTitle : title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta
        name="description"
        content={isEnglish ? englishDescription : description}
      />
      <meta name="robots" content="follow, index" />

      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@JeffreySunny1" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} /> */}

      <meta property="og:site_name" content="Neoway" />
      <meta property="og:title" content={isEnglish ? englishTitle : title} />
      <meta
        property="og:description"
        content={isEnglish ? englishDescription : description}
      />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />

      {/* Google Site Ownership Verification */}
      <meta
        name="google-site-verification"
        content="a0Mzfa1xwDcidlG7r7CQwBBN_DPZCqIWkBJ3SXCGT38"
      />

      <link rel="shortcut icon" href={faviconIco.src} />
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon.src} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32.src} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16.src} />
      {/* <link rel="mask-icon" href="" color="#5bbad5" /> Add mask icon */}
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <link rel="canonical" href={url} />
    </Head>
  );
};
