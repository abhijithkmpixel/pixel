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
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Testimonials />
      <Branches />
      <WorkTogether />
      <Footer />
    </>
  );
}
