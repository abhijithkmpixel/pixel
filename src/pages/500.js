/** @format */

import ErrorMsg from "@/components/ErrorMsg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const errorPage = () => {
  const [headerData, setheaderData] = useState(null);
  const [footerData, setfooterData] = useState(null);
  useEffect(() => {
    getData();

    return () => {};
  }, []);
  const getData = async () => {
    const data = await axios
      .get(`api/homepage`)
      .then(function (response) {
        setheaderData(response?.data?.header);
        setfooterData(response?.data?.footer);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return (
    <>
      <Head>
        <title>Error 500</title>
      </Head>
      <Header data={headerData} />

      <ErrorMsg errerCode="500" errorMsg="Internal server error." />
      <Footer data={footerData} />
    </>
  );
};

export default errorPage;
