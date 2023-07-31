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
import { SmoothScrollProvider } from "@/components/scroll";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
const inter = Inter({ subsets: ["latin"] });

gsap.registerPlugin(ScrollTrigger);
export default function Home() {


  useEffect(() => {}, []);
  return (
    <>
      <SmoothScrollProvider>
        <Banner />
        <About />
        <Services />
        <Testimonials />
        <Branches />
        <WorkTogether />
        <Footer />
      </SmoothScrollProvider>
    </>
  );
}
