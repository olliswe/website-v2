import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="fonts/oi-regular.woff2"
          as="font"
          type="font/woff2"
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
