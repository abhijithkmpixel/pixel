import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const ServiceDetailBanner = () => {
  let ctx;

  useEffect(() => {
    if (typeof document != "undefined") {
      ctx = gsap.context(() => {
        let bannerimg = gsap.timeline();

        bannerimg.to(".service__detail__banner > img", {
          scale: 1.1,
          scrollTrigger: {
            trigger: ".service__detail__banner",
            start: "0% 0%",
            end: "100% -100px",
            scrub: true,
          },
        });
      });
    }

    return () => {
      if (ctx) {
        ctx.revert();
      }
    };
  }, []);
  return (
    <section className="service__detail__banner">
      <Image src={"/uploads/servd.jpg"} alt="asd" width={1920} height={500} />
      <div className="container-fluid">
        <div className="service__detail__banner__innerwrap">
          <Link href={"/services"} className="go__back">
            Back to services{" "}
            <svg
              width="90"
              height="91"
              viewBox="0 0 90 91"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="44.625"
                cy="44.625"
                r="44.25"
                transform="matrix(0 -1 -1 0 89.25 90.125)"
                stroke="white"
                strokeWidth="0.75"
              />
              <path
                d="M40.3639 39.4693C40.5635 39.6688 40.557 39.9842 40.3639 40.1965L36.0902 44.9848H54.4079C54.6911 44.9848 54.9229 45.2165 54.9229 45.4997C54.9229 45.7828 54.6911 46.0145 54.4079 46.0145H36.0902L40.3575 50.8028C40.5442 51.0216 40.5635 51.3241 40.3639 51.5236C40.1644 51.7231 39.8169 51.736 39.6302 51.53C39.6302 51.53 34.5327 45.9309 34.4812 45.8665C34.4297 45.8021 34.3267 45.6863 34.3267 45.4997C34.3267 45.313 34.4297 45.1843 34.4812 45.1328C34.5327 45.0813 39.6302 39.4693 39.6302 39.4693C39.7268 39.3727 39.8619 39.3213 39.9971 39.3213C40.1322 39.3213 40.261 39.3727 40.3639 39.4693Z"
                fill="white"
              />
            </svg>
          </Link>
          <h1>web development</h1>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailBanner;
