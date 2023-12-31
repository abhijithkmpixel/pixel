/** @format */

import { gsap } from "gsap";
import Link from "next/link";
import React, { useEffect } from "react";

const ServiceItemsList = ({ data }) => {
  let ctx;
  useEffect(() => {
    if (typeof document != "undefined") {
      ctx = gsap.context(() => {
        let servicetitle = gsap.timeline();
        if (window.screen.width > 1200) {
          document
            .querySelectorAll(
              ".services_grid .service_list_card .service_list_card__title"
            )
            .forEach((elm) => {
              servicetitle.fromTo(
                elm,
                {
                  y: 100,
                },
                {
                  y: 0,
                  scrollTrigger: {
                    trigger: elm,
                    start: "0% 100%",
                    end: "100% 0%",
                    scrub: true,
                  },
                }
              );
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
    <section className="services_grid">
      <span className="float_text">services</span>
      <div className="container-fluid">
        {data?.data &&
          data?.data?.map((serv, index) => {
            return (
              <Link
                aria-label={serv?.attributes?.Name}
                href={"/services/" + serv?.attributes?.Slug}
                className="row service_list_card"
                data-cursor-text="read more"
                key={index}>
                <div className="col-12 col-md-12 col-xl-4">
                  <div className="service_list_card__title">
                    <h3>
                      <span>{(index <= 9 ? "0" : null) + (index + 1)}</span>
                      {serv?.attributes?.Name}
                    </h3>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-xl-8">
                  <p>{serv?.attributes?.Listing_description}</p>
                  <h4>{serv?.attributes?.Listing_categories}</h4>
                  <span className="inner__link">
                    Know More
                    <svg
                      width="34"
                      height="13"
                      viewBox="0 0 34 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M33.5303 7.04596C33.8232 6.75306 33.8232 6.27819 33.5303 5.9853L28.7574 1.21233C28.4645 0.919433 27.9896 0.919433 27.6967 1.21233C27.4038 1.50522 27.4038 1.98009 27.6967 2.27299L31.9393 6.51563L27.6967 10.7583C27.4038 11.0512 27.4038 11.526 27.6967 11.8189C27.9896 12.1118 28.4645 12.1118 28.7574 11.8189L33.5303 7.04596ZM-6.5567e-08 7.26562L33 7.26563L33 5.76563L6.5567e-08 5.76562L-6.5567e-08 7.26562Z"
                        fill="#F5333F"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default ServiceItemsList;
