import ServiceBanner from "@/components/service/ServiceBanner";
import React from "react";
import ContactForm from "@/components/contact/ContactForm";
const COntactPage = () => {
  return (
    <>
      <ServiceBanner title="WHEN YOU SAY hellow" img="/uploads/cbanner.jpg" />
      <ContactForm />
    </>
  );
};

export default COntactPage;
