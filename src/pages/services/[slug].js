/** @format */

import Footer from "@/components/Footer";
import HeadComponent from "@/components/HeadComponent";
import Header from "@/components/Header";
import GoodCoffee from "@/components/portfolio/GoodCoffee";
import HeloToConect from "@/components/service/HeloToConect";
import ServiceDetailBanner from "@/components/service/ServiceDetailBanner";
import ServiceIntro from "@/components/service/ServiceIntro";
import Trends from "@/components/service/Trends";
import axios from "axios";
import React from "react";

const ServiceDetail = ({ data, footer, header }) => {
  return (
    <>
      <HeadComponent
        data={data?.attributes?.Seo}
        title={data?.attributes?.Banner?.Title}
      />
      <Header data={header} />
      <ServiceDetailBanner data={data?.attributes?.Banner} />
      <ServiceIntro
        data={data?.attributes?.Service_introduction}
        classes={"service_intro--detail"}
      />
      <Trends
        title={data?.attributes?.Development_trends_title}
        body={data?.attributes?.Trends_row}
      />
      <HeloToConect data={data?.attributes?.Here_to_connect} />
      <GoodCoffee data={data?.attributes?.Grab_a_coffee} />
      <Footer data={footer} />
    </>
  );
};

export default ServiceDetail;
export async function getServerSideProps(context) {
  const { params } = context;

  const data = await axios
    .get(`${process.env.DOMAIN_URL}/api/service?slug=${params.slug}`)
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
            ? data?.data[0]
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
