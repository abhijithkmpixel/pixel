/** @format */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import api from "../../../lib/api";

export default async function handler(req, res) {
  const data = await axios
    .get(
      `${process.env.API_URL}/api/about-us?populate[0]=Banner&populate[1]=Banner.Background_image&populate[2]=About_intro&populate[3]=About_intro.Image&populate[4]=How_we_work_cards&populate[5]=How_we_work_cards.Image&populate[6]=Team_members.Preview_image&populate[7]=Team_members.Hover_image&populate[8]=Grab_a_coffee.Icon&populate[9]=seo.metaImage&populate[10]=Team_members.Social_media_links&populate[11]=Testimonials&populate[12]=Testimonials.Testimonials&populate[13]=Testimonials.Logo_slider1&populate[14]=Testimonials.Logo_slider1.Image&populate[15]=Testimonials.Logo_slider2.Image&populate[16]=Testimonials.Testimonials.Profile_image&`
    )
    .then(function (response) {
      // handle success
      return response?.data?.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  const header = await axios
    .get(
      `${process.env.API_URL}/api/header?populate[0]=Logo_dark&populate[1]=Logo_white&populate[2]=Social_media_links&populate[3]=Header_menu&populate[4]=Header_menu.Sub_menu&populate[5]=Header_menu_bg&populate[6]=Logo_dark.Image&populate[7]=Logo_white.Image&populate[8]=Header_menu.Link&populate[9]=Social_media_links.Icon`
    )
    .then(function (response) {
      // handle success
      return response?.data?.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  const footer = await axios
    .get(
      `${process.env.API_URL}/api/footer?populate[0]=Social_media&populate[1]=Quick_links&populate[2]=Footer_contact_bg&populate[3]=Footer_contact_icon&populate[4]=Footer_cta&populate[5]=Social_media.Links&populate[6]=Social_media.Links.Icon&populate[7]=Addresses`
    )
    .then(function (response) {
      // handle success
      return response?.data?.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  res.status(200).json({ data: data, header: header, footer: footer });
}
