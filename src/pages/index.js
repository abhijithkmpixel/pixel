/** @format */

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Banner from "@/components/homepage/Banner";
import About from "@/components/homepage/About";
import Services from "@/components/homepage/Services";
import Testimonials from "@/components/homepage/Testimonials";
import Branches from "@/components/homepage/Branches";
import WorkTogether from "@/components/homepage/WorkTogether";
import api from "../../lib/api";
import Footer from "@/components/Footer";
import AiTech from "@/components/homepage/AiTech";
import axios from "axios";
import HeadComponent from "@/components/HeadComponent";
import ErrorMsg from "@/components/ErrorMsg";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ data, header, footer }) {
  return (
    <>
      <HeadComponent data={data?.attributes?.seo} />
      <Header data={header} />
      {data != null && (
        <>
          <Banner data={data?.attributes?.Banner} />
          <About data={data?.attributes?.About_us} />
          <AiTech data={data?.attributes?.Ai_section} />
          <Services data={data?.attributes?.Service} />
          <Testimonials data={data?.attributes?.Testimonials} />
          <Branches data={data?.attributes?.Branches} />
          <WorkTogether data={data?.attributes?.Work_together} />
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
}

export async function getServerSideProps(context) {
  const data = await axios
    .get(`${process.env.DOMAIN_URL}/api/homepage`)
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
