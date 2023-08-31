/** @format */

import DynamicHtml from "@/components/DynamicHtml";
import Footer from "@/components/Footer";
import HeadComponent from "@/components/HeadComponent";
import Header from "@/components/Header";
import TeamGrid from "@/components/TeamGrid";
import GoodCoffee from "@/components/portfolio/GoodCoffee";
import PortfolioBanner from "@/components/portfolio/PortfolioBanner";
import ServiceIntro from "@/components/service/ServiceIntro";
import Trends from "@/components/service/Trends";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUsPage = ({ data, footer, header }) => {
  return (
    <>
      <HeadComponent data={data?.attributes?.seo} />
      <Header data={header} />
      <PortfolioBanner data={data?.attributes?.Banner} id="serviceintro" />
      <ServiceIntro
        data={data?.attributes?.About_intro}
        classes={"service_intro--detail"}
      />
      <DynamicHtml data={data?.attributes?.Intro_description} />
      <Trends
        title={data?.attributes?.How_we_work_title}
        body={data?.attributes?.How_we_work_cards}
      />

      <TeamGrid
        title={data?.attributes?.Teams_title}
        subtitle={data?.attributes?.Teams_subtitle}
        gridCards={data?.attributes?.Team_members}
      />

      <GoodCoffee data={data?.attributes?.Grab_a_coffee} />
      <Footer data={footer} />
    </>
  );
};

export default AboutUsPage;
export async function getServerSideProps(context) {
  const data = await axios
    .get(`${process.env.DOMAIN_URL}/api/aboutuspage`)
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
