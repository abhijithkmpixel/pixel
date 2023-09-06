/** @format */

import ErrorMsg from "@/components/ErrorMsg";
import Footer from "@/components/Footer";
import HeadComponent from "@/components/HeadComponent";
import Header from "@/components/Header";
import Empowered from "@/components/service/Empowered";
import ServiceBanner from "@/components/service/ServiceBanner";
import ServiceIntro from "@/components/service/ServiceIntro";
import ServiceItemsList from "@/components/service/ServiceItemsList";
import axios from "axios";
import React from "react";

const ServicesPage = ({ data, header, footer }) => {
  return (
    <>
      <HeadComponent data={data?.attributes?.seo} />
      <Header data={header} />
      {data != null && (
        <>
          <ServiceBanner data={data?.attributes?.Banner} id={"serviceintro"} />
          <ServiceIntro data={data?.attributes?.Service_intro} className="" />
          <ServiceItemsList data={data?.attributes?.services} />
          <Empowered data={data?.attributes?.Unique_service} />
        </>
      )}
      {data == null && (
        <ErrorMsg
          errerCode="500"
          errorMsg="Internal Server Error"
          // button={{ link: "/", text: "Homepage" }}
        />
      )}
      <Footer data={footer} />
    </>
  );
};

export default ServicesPage;
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
