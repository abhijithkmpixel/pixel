/** @format */

import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useLayoutEffect } from "react";

const GoodCoffee = ({ data }) => {
  let ctx;
  const router = useRouter();
  useEffect(() => {
    if (typeof document != "undefined") {
      ctx = gsap.context(() => {
        if (window.screen.width > 1200) {
          document
            .querySelector(".good_coffee")
            .addEventListener("mouseover", function () {
              document.querySelector("body").classList.add("good_coffee_enter");
            });
          document
            .querySelector(".good_coffee")
            .addEventListener("mouseleave", function () {
              document
                .querySelector("body")
                .classList.remove("good_coffee_enter");
            });
        }
      });
    }
    return () => {
      if (ctx) {
        ctx.revert();
      }
    };
  }, []);

  return (
    <section
      className={
        router.pathname.includes("our-portfolio")
          ? "good_coffee red__bg"
          : "good_coffee "
      }>
      <div className="container-fluid">
        <div className="good_coffee_wrapper">
          <h2>{data?.TItle}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: data?.Body }}
            data-cursor-img={data?.Icon?.data?.attributes?.url}></div>
          <h4>
            <Image
              src={data?.Icon?.data?.attributes?.url}
              alt=""
              priority
              width={300}
              height={300}
            />
          </h4>
        </div>
      </div>
    </section>
  );
};

export default GoodCoffee;
