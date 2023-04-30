"use client";
import { ParallaxProvider } from "react-scroll-parallax";


import { client } from "@/libs/apollo";
import { globalStyles } from "@/styles/global";
import { ApolloProvider } from "@apollo/client";
import { Poppins } from "@next/font/google";
import { dir } from "i18next";
import { locales } from "../i18n/settings";
import { getCssText } from "stitches.config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  globalStyles();

  return (
    <ParallaxProvider>
      <ApolloProvider client={client}>
        <html>
          <head>
            <link
              rel="shortcut icon"
              href="/images/logoIconSmall.svg"
              type="image/x-icon"
            />
            <style
              id="stitches"
              dangerouslySetInnerHTML={{ __html: getCssText() }}
            />
          </head>
          <body lang={lang} dir={dir(lang)}>
            <main className={poppins.className}>{children}</main>
          </body>
        </html>
      </ApolloProvider>
    </ParallaxProvider>
  );
}
