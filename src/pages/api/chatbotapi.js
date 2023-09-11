/** @format */

import axios from "axios";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const input = req.body.user_input;
  const data = await axios
    .post(
      `${process.env.CHAT_API_URL}`,
      { user_input: input },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      // handle success
      return response?.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  res.status(200).json({ message: data?.response });
}
