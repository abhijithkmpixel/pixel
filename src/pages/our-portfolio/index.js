/** @format */

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GoodCoffee from "@/components/portfolio/GoodCoffee";
import PortfolioBanner from "@/components/portfolio/PortfolioBanner";
import PortfolioListing from "@/components/portfolio/PortfolioListing";
import axios from "axios";
import React from "react";

const WebDevelopmentDubai = ({ data, header, footer }) => {
  return (
    <>
      <Header data={header} />
      <PortfolioBanner />
      <PortfolioListing />
      <GoodCoffee />
      <Footer data={footer} />
    </>
  );
};

export default WebDevelopmentDubai;
export async function getServerSideProps(context) {
  const data = await axios
    .get(`${process.env.DOMAIN_URL}/api/servicespage`)
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
