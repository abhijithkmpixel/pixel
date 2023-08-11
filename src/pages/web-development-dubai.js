import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GoodCoffee from "@/components/portfolio/GoodCoffee";
import PortfolioBanner from "@/components/portfolio/PortfolioBanner";
import PortfolioListing from "@/components/portfolio/PortfolioListing";
import React from "react";

const WebDevelopmentDubai = () => {
  return (
    <>
      <Header />
      <PortfolioBanner />
      <PortfolioListing />
      <GoodCoffee />
      <Footer />
    </>
  );
};

export default WebDevelopmentDubai;
