import "../../styles/global.css";
import { Poppins } from "next/font/google";
import { dir } from "i18next";
import { locales } from "../i18n/settings";
import { LanguageContextProvider } from "@/contexts/LanguageContext";
import { Metadata } from "next";
import { ParallaxProvider } from "@/contexts/ParallaxContext";
import { ApolloWrapper } from "@/libs/apollo-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export function generateMetadata(): Metadata {
  return {
    title: "Portfolio | Avner José",
  };
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
  return (
    <ParallaxProvider>
      <LanguageContextProvider lang={lang}>
        <ApolloWrapper>
          <html>
            <head>
              <link
                rel="shortcut icon"
                href="/images/logoIconSmall.svg"
                type="image/x-icon"
              />
            </head>
            <body suppressHydrationWarning={true} lang={lang} dir={dir(lang)}>
              <main className={poppins.className}>{children}</main>
            </body>
          </html>
        </ApolloWrapper>
      </LanguageContextProvider>
    </ParallaxProvider>
  );
}
