/** @format */

import { TweenLite, gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import GsapMagnetic from "../../components/gsap";
import MagneticButton from "../MagneticButton";

const About = ({ data }) => {
  useEffect(() => {
    let ctx;
    if (typeof document != "undefined") {
      let aboutTitle = gsap.timeline();
      let aboutSubTitle = gsap.timeline();
      let aboutFimage = gsap.timeline();
      let aboutbody = gsap.timeline();
      ctx = gsap.context(() => {
        if (window.screen.width > 1200) {
          aboutTitle.fromTo(
            ".about_us_banner .title_primary",
            {
              y: 50,
            },
            {
              y: -50,
              scrollTrigger: {
                trigger: ".about_us_banner .title_primary",
                start: "0% 100%",
                end: "0% 0%",
                // scroller: window,
                scrub: true,
              },
            }
          );
          aboutSubTitle.fromTo(
            ".about_us_banner .intro_block .row > div> h3",
            {
              y: 50,
            },
            {
              y: -50,
              scrollTrigger: {
                trigger: ".about_us_banner .intro_block .row > div> h3",
                start: "0% 100%",
                end: "100% 0%",
                scrub: true,
              },
            }
          );

          aboutFimage.to(".about_us_banner .intro_block .banner_image img", {
            objectPosition: "50% 20%",
            // duration: 1,
            scrollTrigger: {
              trigger: ".about_us_banner .intro_block .banner_image",
              start: "0% 100%",
              end: "100% 0%",
              // scroller: window,
              scrub: true,
            },
          });
          aboutbody.to(".about_us_banner .intro_block .about_bodycopy", {
            x: -100,
            scrollTrigger: {
              trigger: ".about_us_banner .intro_block .about_bodycopy",
              start: "0% 100%",
              end: "0% 0%",
              // scroller: window,
              scrub: true,
            },
          });
          TweenLite.to(
            ".about_us_banner .achievements_row .achievement_cards",
            {
              className: "is-inview",
              stagger: 0.4,
              duration: 3,
              scrollTrigger: {
                trigger:
                  ".about_us_banner .achievements_row .achievement_cards",
                start: "50% 100%",
                // end: "0% 0%",
                // scroller: window,
                scrub: true,
              },
            }
          );
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
    <section className="about_us_banner" data-scroll-section>
      <div className="container-fluid position-relative">
        <span className="scroller_text">
          <span>scroll</span>
          <svg
            width="16"
            height="74"
            viewBox="0 0 16 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line
              x1="7.99354"
              y1="0.684881"
              x2="7.99354"
              y2="71.3151"
              stroke="#181818"
              strokeWidth="1.36976"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 65.4414L8.00005 72.3912L1 65.4414"
              stroke="#181818"
              strokeWidth="1.36976"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h2 className="title_primary" data-scroll data-scroll-offset="200">
          {data?.Main_title}
        </h2>
        <div className="intro_block" data-scroll>
          <div className="row">
            <div className="col-12 col-xl-2">
              <h3 data-scroll data-scroll-speed="1.5">
                {data?.Sub_title}
              </h3>
            </div>
            <div className="col-12 col-xl-10">
              <div
                className="banner_image"
                data-scroll
                data-scroll-offset="300">
                <Image
                  src={data?.Featured_image?.data?.attributes?.url}
                  alt={
                    data?.Featured_image?.data?.attributes?.alternativeText
                      ? data?.Featured_image?.data?.attributes?.alternativeText
                      : data?.Main_title
                  }
                  width={850}
                  height={570}
                />
              </div>
              <div
                className="about_bodycopy"
                data-scroll
                data-scroll-speed="1.2"
                data-scroll-direction="horizontal">
                <p>{data?.Description}</p>
                <div className="about_footer" data-scroll>
                  <h4 data-scroll>{data?.Short_title}</h4>
                  <div data-scroll data-scroll-speed="1.5" className="ms-auto">
                    {data?.Redirect_link && (
                      <MagneticButton
                        text={data?.Redirect_link?.Text}
                        url={data?.Redirect_link?.Url}
                        icon={true}
                        arialabel={data?.Redirect_link?.Text}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {data?.Achievements_widget &&
            data?.Achievements_widget?.length > 0 && (
              <div className="row achievements_row" data-scroll>
                {data?.Achievements_widget?.map((card, index) => {
                  return (
                    <div
                      className="col-12  col-sm-6- col-md-6 col-xl-3"
                      data-scroll
                      key={index}>
                      <div
                        className="achievement_cards"
                        data-scroll
                        data-scroll-offset="200">
                        <div className="cardheader">
                          <Image
                            src={card?.Icon?.data?.attributes?.url}
                            width={100}
                            height={100}
                            data-scroll
                            alt={
                              card?.Icon?.data?.attributes?.alternativeText !=
                              null
                                ? card?.Icon?.data?.attributes?.alternativeText
                                : "Icon"
                            }
                          />
                          <h3 data-scroll>{card?.Main_title}</h3>
                        </div>
                        <h4 data-scroll>{card?.Subtitle}</h4>
                        <p data-scroll>{card?.Bodycopy}</p>
                      </div>
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

export default About;
