/** @format */

import { gsap } from "gsap";
import Image from "next/image";
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
          <div dangerouslySetInnerHTML={{ __html: data?.Body }}></div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
