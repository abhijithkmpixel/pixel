/** @format */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import api from "../../../lib/api";

export default async function handler(req, res) {
  const data = await axios
    .get(
      `${process.env.API_URL}/api/contact-page?populate[0]=Banner&populate[1]=Banner.Background_image&populate[2]=Form.Form_categories&populate[3]=Form.Form&populate[4]=Form.Form.SIde_image&populate[5]=Locations.Location_details&populate[6]=Locations.Location_details.Image&populate[7]=Locations.Location_link&populate[8]=seo&populate[9]=Business_enquiries&populate[10]=seo.metaImage`
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
