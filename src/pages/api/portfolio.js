/** @format */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import api from "../../../lib/api";

export default async function handler(req, res) {
  const { slug } = req.query;
  const data = await axios
    .get(
      `${process.env.API_URL}/api/projects?filters[Slug][$eq]=${slug}&populate[0]=Bodycopy&populate[1]=Homepage_banner_image&populate[2]=Images&populate[3]=Live_url&populate[4]=Name&populate[5]=Portfolio_page_listing_image&populate[6]=seo&populate[7]=Services_used&populate[8]=Slug&populate[9]=Technology_used&populate[10]=Year&populate[11]=portfolio_categories&populate[12]=Mobile_banner_image&populate[13]=seo.metaImage&populate[14]=Images_slider`
    )
    .then(function (response) {
      // handle success
      return response?.data?.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  const portfolios = await axios
    .get(
      `${process.env.API_URL}/api/portfolio-page?populate[0]=projects.Portfolio_page_listing_image&populate[1]=projects.Name&`
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
  res.status(200).json({
    data: data,
    header: header,
    footer: footer,
    portfolios: portfolios,
  });
}
