/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";

const errorPage = () => {
  return (
    <>
      <section className="error__page__block">
        {/* <Image
          src={"/logo/pixellogo.svg"}
          alt="pixelflames logo"
          width={200}
          height={130}
        /> */}
        <div className="container_fluid">
          <h1>404</h1>
          <p>sorry! the page you're looking for cannot be found.</p>
          <Link className="cta_primary cta_drk mx-auto" href={"/"}>
            <span>Homepage</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default errorPage;
