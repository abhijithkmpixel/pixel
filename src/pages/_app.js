import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/styles/app.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="favicon" href="/favicon.ico" />
    </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
