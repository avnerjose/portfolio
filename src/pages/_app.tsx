import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import { globalStyles } from "@/styles/global";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
}
