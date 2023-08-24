/** @format */

import ServiceBanner from "@/components/service/ServiceBanner";
import React from "react";
import ContactForm from "@/components/contact/ContactForm";
import OfficeLocations from "@/components/contact/OfficeLocations";
import GetInTouch from "@/components/contact/GetInTouch";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import axios from "axios";
import Image from "next/image";
import GsapMagnetic from "../components/gsap";
import Link from "next/link";
import HeadComponent from "@/components/HeadComponent";

const COntactPage = ({ data, header, footer }) => {
  return (
    <>
      <HeadComponent data={data?.attributes?.seo} />
      <Header data={header} />
      <ServiceBanner data={data?.attributes?.Banner} id="contactform" />

      <ContactForm data={data?.attributes?.Form} />
      <OfficeLocations data={data?.attributes?.Locations} />
      <GetInTouch data={data?.attributes?.Business_enquiries} />
      <Footer data={footer} />
    </>
  );
};

export default COntactPage;
export async function getServerSideProps(context) {
  const data = await axios
    .get(`${process.env.DOMAIN_URL}/api/contactpage`)
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
