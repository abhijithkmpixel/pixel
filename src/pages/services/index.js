import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Empowered from "@/components/service/Empowered";
import ServiceBanner from "@/components/service/ServiceBanner";
import ServiceIntro from "@/components/service/ServiceIntro";
import ServiceItemsList from "@/components/service/ServiceItemsList";
import React from "react";

const ServicesPage = () => {
  return (
    <>
      <Header />
      <ServiceBanner
        title="Our services & digital solutions"
        img="/uploads/service.jpg"
        id={"serviceintro"}
      />
      <ServiceIntro
        title="  Our services are aimed to realize our mission to make your
                business better with visual solutions."
        subtitle=" We work with individually adapted frameworks,but we prefer to
                work according to"
        img="/uploads/ser.jpg"
        class=""
      />
      <ServiceItemsList />
      <Empowered />
      <Footer />
    </>
  );
};

export default ServicesPage;