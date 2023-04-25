import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Top app</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
