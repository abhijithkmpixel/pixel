/** @format */

import Head from "next/head";
import React from "react";

const HeadComponent = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data?.Seo_title}</title>
        <meta property="og:site_name" content={data?.Seo_title} />
        <meta name="description" content={data?.Seo_description}></meta>
        <meta name="keywords" content={data?.Seo_description}></meta>
        <meta name="image" content="/logo/p-dark.png"></meta>
        <meta name="og:title" content={data?.Seo_title}></meta>
        <meta name="og:description" content={data?.Seo_description}></meta>
        <meta name="og:image" content={"/logo/p-dark.png"}></meta>
        <meta name="twitter:title" content={data?.Seo_title}></meta>
        <meta name="twitter:description" content={data?.Seo_description}></meta>
        <meta name="twitter:image" content={"/logo/p-dark.png"}></meta>
        <meta
          property="og:url"
          content={
            typeof window !== "undefined"
              ? window.location.href
              : process.env.DOMAIN_URL
          }
        />
        <link
          rel="canonical"
          href={
            typeof window !== "undefined"
              ? window.location.href
              : process.env.DOMAIN_URL
          }
        />
      </Head>
    </>
  );
};

export default HeadComponent;
