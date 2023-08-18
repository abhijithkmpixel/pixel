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

const COntactPage = ({ data, header, footer }) => {
  return (
    <>
      <Header data={header} />
      {/* <ServiceBanner
        title="WHEN YOU SAY hellow"
        img="/uploads/cbanner.jpg"
        id="contactform"
      /> */}
      <section className="service_hero_banner">
        <Image
          src={"/uploads/cbanner.jpg"}
          // alt={
          //   data?.Background_image?.data?.attributes?.alternativeText != null
          //     ? data?.Background_image?.data?.attributes?.alternativeText
          //     : data?.Title
          // }
          width={1920}
          height={1080}
        />
        <div className="container-fluid">
          <div className="hero_cnt_wrap">
            <h1>WHEN YOU SAY hellow</h1>
            <GsapMagnetic>
              <Link href={"#contactform"} className="scroll_to">
                <svg
                  width="17"
                  height="29"
                  viewBox="0 0 17 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.541 20.1812C16.275 19.9151 15.8545 19.9237 15.5714 20.1812L9.18702 25.8794V1.45583C9.18702 1.07823 8.8781 0.769287 8.50053 0.769287C8.12296 0.769287 7.81404 1.07823 7.81404 1.45583V25.8794L1.42969 20.1897C1.13794 19.9409 0.734623 19.9151 0.468608 20.1812C0.202594 20.4472 0.185432 20.9106 0.460028 21.1595C0.460028 21.1595 7.9256 27.9562 8.01141 28.0249C8.09722 28.0935 8.25168 28.2308 8.50053 28.2308C8.74938 28.2308 8.92101 28.0935 8.98965 28.0249C9.0583 27.9562 16.541 21.1595 16.541 21.1595C16.6698 21.0308 16.7384 20.8505 16.7384 20.6703C16.7384 20.4901 16.6698 20.3185 16.541 20.1812Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </GsapMagnetic>
          </div>
        </div>
      </section>
      <ContactForm />
      <OfficeLocations />
      <GetInTouch />
      <Footer data={footer} />
    </>
  );
};

export default COntactPage;
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
