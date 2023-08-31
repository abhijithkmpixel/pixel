/** @format */

import Link from "next/link";
import React from "react";

const ErrorMsg = ({ errerCode, errorMsg, button }) => {
  return (
    <section className="error__page__block">
      {/* <Image
          src={"/logo/pixellogo.svg"}
          alt="pixelflames logo"
          width={200}
          height={130}
        /> */}
      <div className="container_fluid">
        <h1>{errerCode}</h1>
        <p>{errorMsg}</p>
        {button && (
          <Link
            aria-label={"go to homepage"}
            className="cta_primary cta_drk mx-auto"
            href={button?.link}>
            <span>{button?.text}</span>
          </Link>
        )}
      </div>
    </section>
  );
};

export default ErrorMsg;
