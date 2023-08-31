/** @format */

import ErrorMsg from "@/components/ErrorMsg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const errorPage = () => {
  return (
    <>
      <ErrorMsg
        errerCode="404"
        errorMsg="sorry! the page you're looking for cannot be found."
        button={{ link: "/", text: "Homepage" }}
      />
    </>
  );
};

export default errorPage;
