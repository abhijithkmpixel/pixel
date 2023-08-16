import ServiceBanner from "@/components/service/ServiceBanner";
import React from "react";
import ContactForm from "@/components/contact/ContactForm";
import OfficeLocations from "@/components/contact/OfficeLocations";
import GetInTouch from "@/components/contact/GetInTouch";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const COntactPage = () => {
  return (
    <>
      <Header />
      <ServiceBanner
        title="WHEN YOU SAY hellow"
        img="/uploads/cbanner.jpg"
        id="contactform"
      />
      <ContactForm />
      <OfficeLocations />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default COntactPage;
