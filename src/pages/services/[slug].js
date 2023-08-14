import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GoodCoffee from "@/components/portfolio/GoodCoffee";
import HeloToConect from "@/components/service/HeloToConect";
import ServiceDetailBanner from "@/components/service/ServiceDetailBanner";
import ServiceIntro from "@/components/service/ServiceIntro";
import Trends from "@/components/service/Trends";
import React from "react";

const ServiceDetail = () => {
  return (
    <>
      <Header />
      <ServiceDetailBanner />
      <ServiceIntro
        title="  Our services are aimed to realize our mission to make your
                business better with visual solutions."
        subtitle="We work with individually adapted It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently"
        img="/uploads/sd1.jpg"
        classes={"service_intro--detail"}
      />
      <Trends />
      <HeloToConect />
      <GoodCoffee />
      <Footer />
    </>
  );
};

export default ServiceDetail;
