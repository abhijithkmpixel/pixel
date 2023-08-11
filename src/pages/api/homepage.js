// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import api from "../../../lib/api";

export async function handler(req, res) {
  const data = await api
    .get(
      `${process.env.API_URL}/api/homepage?populate[0]=Banner&populate[1]=Banner.Ai_technology_image`
    )
    .then(function (response) {
      // handle success
      return response?.data?.attributes;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  res.status(200).json({ data: data });
}
