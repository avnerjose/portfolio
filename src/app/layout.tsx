"use client";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { client } from "@/libs/apollo";
import { globalStyles } from "@/styles/global";
import { ApolloProvider } from "@apollo/client";
import { Poppins } from "@next/font/google";
import { ParallaxProvider } from "react-scroll-parallax";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
          </head>
          <body lang="en">
            <main className={poppins.className}>
              <Header />
              {children}
              <Footer />
            </main>
          </body>
        </html>
      </ApolloProvider>
    </ParallaxProvider>
  );
}
