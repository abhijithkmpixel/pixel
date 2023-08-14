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
import api from "../../lib/api";
import Footer from "@/components/Footer";
import AiTech from "@/components/homepage/AiTech";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  {
    console.log(data);
  }
  return (
    <>
      <Header />
      <Banner />
      <About />
      <AiTech />
      <Services />
      <Testimonials />
      <Branches />
      <WorkTogether />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const data = await api
    .get(
      `${process.env.API_URL}/api/homepage?populate[0]=Banner&populate[1]=Banner.Ai_technology_image&populate[2]=About_us&populate[3]=About_us.Achievements_widget&populate[4]=About_us.Achievements_widget.Icon&populate[5]=About_us.Featured_image&populate[6]=About_us.Redirect_link&populate[7]=Testimonials&populate[8]=Testimonials.Testimonials&populate[9]=Testimonials.Logo_slider1&populate[10]=Testimonials.Logo_slider2&populate[11]=Branches&populate[12]=Branches.Background_image&populate[13]=Work_together&populate[14]=Work_together.Email_id&populate[15]=Work_together.Phone_number&populate[16]=Work_together.Contact_cta&populate[17]=Service&populate[18]=Service.Title_icon&populate[19]=Service.services&populate[20]=Service.Technology_images&populate[21]=Service.Technology_images.Image&populate[22]=Service.services.Name&populate[23]=Seo`
    )
    .then(function (response) {
      // handle success
      return response?.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  const header = await api
    .get(
      `${process.env.API_URL}/api/header?populate[0]=Logo_dark&populate[1]=Logo_white&populate[2]=Social_media_links&populate[3]=Header_menu&populate[4]=Header_menu.Sub_menu&populate[5]=Header_menu_bg`
    )
    .then(function (response) {
      // handle success
      return response?.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  const footer = await api
    .get(
      `${process.env.API_URL}/api/footer?populate[0]=Social_media&populate[1]=Quick_links&populate[2]=Footer_contact_bg&populate[3]=Footer_contact_icon&populate[4]=Footer_cta&populate[5]=Social_media.Links`
    )
    .then(function (response) {
      // handle success
      return response?.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  console.log(data);
  return {
    props: {
      data:
        data !== "undefined"
          ? data && data?.data !== null
            ? data?.data
            : null
          : null,
      header:
        data !== "undefined"
          ? header && header?.data !== null
            ? header?.data
            : null
          : null,
      footer:
        data !== "undefined"
          ? footer && footer?.data !== null
            ? footer?.data
            : null
          : null,
    }, // will be passed to the page component as props
  };
}
