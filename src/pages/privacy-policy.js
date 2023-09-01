/** @format */

import DynamicHtml from "@/components/DynamicHtml";
import Footer from "@/components/Footer";
import HeadComponent from "@/components/HeadComponent";
import Header from "@/components/Header";
import axios from "axios";
import React from "react";

const PrivacyPolicyPage = ({ data, header, footer }) => {
  return (
    <>
      <HeadComponent data={data?.attributes?.seo} />
      <Header data={header} />

      <DynamicHtml
        title={data?.attributes?.Title}
        data={data?.attributes?.Description}
      />
      <Footer data={footer} />
    </>
  );
};

export default PrivacyPolicyPage;
export async function getServerSideProps(context) {
  const data = await axios
    .get(`${process.env.DOMAIN_URL}/api/privacypage`)
    .then(function (response) {
      // handle success
      return response?.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  return {
    props: {
      data:
        Object.keys(data).length > 0
          ? data?.data && data?.data !== null
            ? data?.data
            : null
          : null,
      header:
        Object.keys(data).length > 0
          ? data?.header && data?.header !== null
            ? data?.header
            : null
          : null,
      footer:
        Object.keys(data).length > 0
          ? data?.footer && data?.footer !== null
            ? data?.footer
            : null
          : null,
    }, // will be passed to the page component as props
  };
}
