import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const PortfolioBanner = () => {
  let ctx;
  useEffect(() => {
    if (typeof document != "undefined") {
      ctx = gsap.context(() => {
        let bannerImageTiml = gsap.timeline();
        let bannerTitle = gsap.timeline();
        bannerImageTiml.to(".portfolio_hero_banner img", {
          scale: `1`,
          scrollTrigger: {
            trigger: ".portfolio_hero_banner",
            start: "0% 0%",
            end: "100% 0",
            scrub: true,
          },
        });
        // bannerTitle.to(".portfolio_hero_banner h1", {
        //   scale: 1.5,
        //   scrollTrigger: {
        //     trigger: ".portfolio_hero_banner",
        //     start: "0% 0%",
        //     end: "100% 0%",
        //     scrub: true,
        //   },
        // });
      });
    }
    return () => {
      if (ctx) {
        ctx.revert();
      }
    };
  }, []);

  return (
    <section className="portfolio_hero_banner">
      <Image src={"/uploads/ort.jpg"} alt="asdasd" width={1920} height={1080} />
      <div className="hero_content_wrap">
        <h1>
          DISCOVER <br />
          <span>our</span> PROJECTS
        </h1>
        <Link
          href="#portfolio_list_section"
          className="scroll_to"
          // data-scrollto
        >
          <svg
            width="17"
            height="29"
            viewBox="0 0 17 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.541 20.1812C16.275 19.9151 15.8545 19.9237 15.5714 20.1812L9.18702 25.8794V1.45583C9.18702 1.07823 8.8781 0.769287 8.50053 0.769287C8.12296 0.769287 7.81404 1.07823 7.81404 1.45583V25.8794L1.42969 20.1897C1.13794 19.9409 0.734623 19.9151 0.468608 20.1812C0.202594 20.4472 0.185432 20.9106 0.460028 21.1595C0.460028 21.1595 7.9256 27.9562 8.01141 28.0249C8.09722 28.0935 8.25168 28.2308 8.50053 28.2308C8.74938 28.2308 8.92101 28.0935 8.98965 28.0249C9.0583 27.9562 16.541 21.1595 16.541 21.1595C16.6698 21.0308 16.7384 20.8505 16.7384 20.6703C16.7384 20.4901 16.6698 20.3185 16.541 20.1812Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default PortfolioBanner;
