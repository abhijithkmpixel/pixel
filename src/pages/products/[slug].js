/** @format */

import DynamicHtmlTwoColumn from "@/components/DynamicHtmlTwoColumn";
import ServiceBanner from "@/components/service/ServiceBanner";
import React from "react";

const ourProductsPage = () => {
  const Banner = {
    Title: "Market place app",
    Background_image: {
      data: {
        attributes: {
          url: "/uploads/branch.jpg",
        },
      },
    },
  };
  const dynamic1 = {
    title: "Empower your business with Ucelo Store",
    subtitle:
      "Transact with your suppliers through UCELO and modernize your B2B e-commerce experience with a highly customizable and scalable wholesale marketplace solution.",
    data: `
      <ul>
      <li>
        <strong>Multi-lingual</strong> The warehouse platform supports multiple languages including English, Spanish, and Italian. Businesses from all over the world will find the platform a boon for their export business due to multi-lingual facility.
      </li>
      <li>
        <strong>Easy Customer Onboarding process</strong> Our platform provides a simplified approach to onboarding new customers. You will be able to review the contract and customize the details to suit your business' requirements.
      </li>
      <li>
        <strong>Chat Option</strong> The warehouse platform has a Chat option (Buyer to Supplier) where the buyer and supplier can engage in a transparent communication, resulting in a good deal.
      </li>
      <li>
        <strong>Payment Gateway</strong> Our b2b platform is offering payment gateways to both the suppliers and the buyers. The platform enables you to accept multiple payment options and offers discounts to the buyers for using this service.
      </li>
      <li>
        <strong>Integrated Shipping</strong> The b2b platform will allow you to integrate your shipping into your shopping cart so that you can offer integrated shipping.
      </li>
      <li>
        <strong>No Hidden charges</strong> The platform provides a plethora of features with no hidden charges on the suppliers. Thus, you will never have to face any difficulty in selling your products due to the complexities of inventory management.
      </li>
      <li>
        <strong>Enhanced admin panel</strong> A streamlined admin panel is available to manage the suppliers and buyers. It's an excellent way to manage your business without the hassles of dealing with logistics and the administrative work.
      </li>
      <li>
        <strong>Mobile applications for Buyers</strong> The mobile apps are available for both the buyers and suppliers so that they can view their orders in real time.
      </li>
      
      </ul>
      `,
  };
  return (
    <>
      <ServiceBanner data={Banner} arrow={false} id="" />
      <DynamicHtmlTwoColumn
        title={dynamic1.title}
        subtitle={dynamic1.subtitle}
        data={dynamic1.data}
      />
    </>
  );
};

export default ourProductsPage;
