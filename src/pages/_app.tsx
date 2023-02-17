import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import { globalStyles } from "@/styles/global";
import { ParallaxProvider } from "react-scroll-parallax";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/libs/apollo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <ParallaxProvider>
      <ApolloProvider client={client}>
        <main className={poppins.className}>
          <Component {...pageProps} />
        </main>
      </ApolloProvider>
    </ParallaxProvider>
  );
}
