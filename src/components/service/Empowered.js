import { gsap } from "gsap";
import React, { useEffect } from "react";

const Empowered = () => {
  let ctx;
  useEffect(() => {
    if (typeof document != "undefined") {
      let containerwidth = document.querySelector(
        ".empowered_brand_block .empower_inner_wrap"
      ).offsetWidth;
      let titlewidth = document.querySelector(
        ".empowered_brand_block .empower_inner_wrap h2"
      ).offsetWidth;
      let scrollablewidth = titlewidth - containerwidth;
      ctx = gsap.context(() => {
        let empoweredtitle = gsap.timeline();
        if (window.screen.width > 1200) {
          empoweredtitle.to(".empowered_brand_block .empower_inner_wrap h2", {
            x: -scrollablewidth,
            scrollTrigger: {
              trigger: ".empowered_brand_block",
              start: "0% 0%",
              end: `+=${scrollablewidth * 1.5}`,
              scrub: true,
              pin: ".empowered_brand_block",
            },
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
    <section className="empowered_brand_block">
      <div className="empower_inner_wrap">
        <h5>
          Together, empowered by our very own Brand Dials process, we deliver
        </h5>
        <h2>consistent unique service</h2>
      </div>
    </section>
  );
};

export default Empowered;
