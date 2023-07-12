import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Banner from "@/components/homepage/Banner";
import About from "@/components/homepage/About";
import Services from "@/components/homepage/Services";
import Testimonials from "@/components/homepage/Testimonials";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      <Testimonials />
    </>
  );
}
