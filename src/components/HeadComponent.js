/** @format */

import Head from "next/head";
import React from "react";

const HeadComponent = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data?.metaTitle}</title>
        <meta
          property="og:site_name"
          content={data?.metaTitle}
          key="og:site_name"
        />
        <meta
          name="description"
          content={data?.metaDescription}
          key="description"></meta>
        <meta
          name="image"
          key="image"
          content={data?.metaImage?.data?.attributes?.url}></meta>
        <meta name="og:title" content={data?.metaTitle} key="og:title"></meta>
        <meta
          name="og:description"
          content={data?.metaDescription}
          key="og:description"></meta>
        <meta
          name="og:image"
          key="og:image"
          content={data?.metaImage?.data?.attributes?.url}></meta>
        <meta name="twitter:title" content={data?.metaTitle}></meta>
        <meta
          name="twitter:card"
          key="twitter:card"
          content="summary_large_image"></meta>
        <meta name="twitter:description" content={data?.metaDescription}></meta>
        <meta
          name="twitter:image"
          content={data?.metaImage?.data?.attributes?.url}></meta>
        <meta name="keywords" content={data?.keywords} key="keywords" />
        <meta
          property="og:url"
          key="og:url"
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
        {data?.preventIndexing && (
          <>
            <meta name="robots" content="noindex" />
            <meta name="googlebot" content="noindex" />
          </>
        )}
      </Head>
    </>
  );
};

export default HeadComponent;
