/** @format */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import api from "../../../lib/api";

export default async function handler(req, res) {
  const data = await axios
    .get(
      `${process.env.API_URL}/api/homepage?populate[0]=Banner&populate[1]=Banner.Ai_technology_image&populate[2]=About_us&populate[3]=About_us.Achievements_widget&populate[4]=About_us.Achievements_widget.Icon&populate[5]=About_us.Featured_image&populate[6]=About_us.Redirect_link&populate[7]=Testimonials&populate[8]=Testimonials.Testimonials&populate[9]=Testimonials.Logo_slider1&populate[10]=Testimonials.Logo_slider2&populate[11]=Branches&populate[12]=Branches.Background_image&populate[13]=Work_together&populate[14]=Work_together.Email_id&populate[15]=Work_together.Phone_number&populate[16]=Work_together.Contact_cta&populate[17]=Service&populate[18]=Service.Title_icon&populate[19]=Service.services&populate[20]=Service.Technology_images&populate[21]=Service.Technology_images.Image&populate[22]=Service.services.Name&populate[23]=seo&populate[24]=Banner.projects&populate[25]=Banner.projects.Name&populate[26]=Banner.projects.Homepage_banner_image&populate[27]=Banner.projects.portfolio_categories&populate[28]=About_us.projects.Redirect_link&populate[29]=Service.services.Homepage_listing_image&populate[30]=Testimonials.Testimonials.Profile_image&populate[31]=Testimonials.Logo_slider1.Image&populate[32]=Testimonials.Logo_slider2.Image&populate[33]=Ai_section&populate[34]=Ai_section.Redirect_link&populate[35]=Ai_section.SIde_image&populate[36]=seo.metaImage&`
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
