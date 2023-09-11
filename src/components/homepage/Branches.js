/** @format */

import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Branches = ({ data }) => {
  let ctx;

  useEffect(() => {
    if (typeof document != "undefined") {
      ctx = gsap.context(() => {
        let branchImg = gsap.timeline();
        if (window.screen.width > 1200) {
          branchImg.to(".our_branches img", {
            // scale: 1.3,
            objectPosition: "50% 0%",
            scrollTrigger: {
              trigger: ".our_branches",
              start: "0% 100%",
              end: "100% 0%",
              // scroller: window,
              scrub: true,
            },
          });
        }
      });
    }
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="our_branches" data-scroll data-scroll-section>
      <Image
        src={data?.Background_image?.data?.attributes?.url}
        alt={
          data?.Background_image?.data?.attributes?.alternativeText != null
            ? data?.Background_image?.data?.attributes?.alternativeText
            : "our branches backgropund image"
        }
        width={1440}
        height={753}
        data-scroll
      />
      <div className="branches_innerwrap" data-scroll>
        <div className="container-fluid">
          <div className="branch_header" data-scroll>
            <h2 className="title_primary" data-scroll>
              {data?.Title}
            </h2>
            <h4 data-scroll>{data?.Subtitle}</h4>
          </div>
          {/* {data?.Body && (
            <div
              className="mb-5"
              dangerouslySetInnerHTML={{ __html: data?.Body }}></div>
          )} */}
          {data?.Products?.data?.length > 0 && (
            <div className="row">
              {data?.Products?.data?.map((p, index) => {
                return (
                  <div key={index} className="col-12 col-lg-6">
                    <Link
                      href={`/products/${p?.attributes?.Slug}`}
                      className="products__card__wrap">
                      <figure>
                        <Image
                          src={
                            p?.attributes?.Homepage_listing_image?.data
                              ?.attributes?.url
                          }
                          alt={
                            p?.attributes?.Homepage_listing_image?.data
                              ?.attributes?.alternativeText != null
                              ? p?.attributes?.Homepage_listing_image?.data
                                  ?.attributes?.alternativeText
                              : p?.attributes?.Name
                          }
                          width={1080}
                          height={540}
                        />
                      </figure>
                      <h4>{p?.attributes?.Name}</h4>
                      <p>
                        <div className="btn_wrap">
                          <svg
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <line
                              x1="4.22297"
                              y1="11.0943"
                              x2="10.1555"
                              y2="4.02421"
                              stroke="#F0F0F0"
                              strokeًidth="1.38932"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.17773 4.03369L11.1472 3.42389L11.7569 10.3934"
                              stroke="#F0F0F0"
                              strokeًidth="1.38932"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        {p?.attributes?.Short_description}
                      </p>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Branches;
