/** @format */

import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import GsapMagnetic from "../../components/gsap";

const ServiceBanner = ({ data, id, arrow }) => {
  let ctx;

  useEffect(() => {
    if (typeof document != "undefined") {
      if (window.screen.width > 1200) {
        ctx = gsap.context(() => {
          let bannerimg = gsap.timeline();

          bannerimg.to(".service_hero_banner > img", {
            scale: 1,
            scrollTrigger: {
              trigger: ".service_hero_banner",
              start: "0% 0%",
              end: "100% -100px",
              scrub: true,
            },
          });
        });
      }
    }

    return () => {
      if (ctx) {
        ctx.revert();
      }
    };
  }, []);

  return (
    <section className="service_hero_banner">
      <Image
        src={data?.Background_image?.data?.attributes?.url}
        alt={
          data?.Background_image?.data?.attributes?.alternativeText != null
            ? data?.Background_image?.data?.attributes?.alternativeText
            : data?.Title
        }
        width={1920}
        priority
        height={1080}
      />
      <div className="container-fluid">
        <div className="hero_cnt_wrap">
          <h1>{data?.Title}</h1>
          {!arrow == false && (
            <GsapMagnetic>
              <Link
                href={"#" + id}
                aria-label={"quick access"}
                className="scroll_to">
                <svg
                  width="17"
                  height="29"
                  viewBox="0 0 17 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.541 20.1812C16.275 19.9151 15.8545 19.9237 15.5714 20.1812L9.18702 25.8794V1.45583C9.18702 1.07823 8.8781 0.769287 8.50053 0.769287C8.12296 0.769287 7.81404 1.07823 7.81404 1.45583V25.8794L1.42969 20.1897C1.13794 19.9409 0.734623 19.9151 0.468608 20.1812C0.202594 20.4472 0.185432 20.9106 0.460028 21.1595C0.460028 21.1595 7.9256 27.9562 8.01141 28.0249C8.09722 28.0935 8.25168 28.2308 8.50053 28.2308C8.74938 28.2308 8.92101 28.0935 8.98965 28.0249C9.0583 27.9562 16.541 21.1595 16.541 21.1595C16.6698 21.0308 16.7384 20.8505 16.7384 20.6703C16.7384 20.4901 16.6698 20.3185 16.541 20.1812Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </GsapMagnetic>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
