import Empowered from "@/components/service/Empowered";
import ServiceBanner from "@/components/service/ServiceBanner";
import ServiceIntro from "@/components/service/ServiceIntro";
import ServiceItemsList from "@/components/service/ServiceItemsList";
import React from "react";

const ServicesPage = () => {
  return (
    <>
      <ServiceBanner />
      <ServiceIntro />
      <ServiceItemsList />
      <Empowered />
    </>
  );
};

export default ServicesPage;
