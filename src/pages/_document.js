/** @format */

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#e74847" />
        <meta name="author" content="Pixelflames" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon144x144.png" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon57x57.png" />
        <meta name="robots" content="max-image-preview:large"></meta>
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon114x114.png"
        />
        <meta name="msapplication-TileImage" content="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />

        <link rel="icon" href="/favicon.ico" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
