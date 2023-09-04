/** @format */
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useLayoutEffect } from "react";
import Slider from "react-slick";

const Banner = ({ data }) => {
  let ctx;

  useEffect(() => {
    if (typeof window != "undefined") {
      var quickLinks = document.querySelectorAll(
        ".hero_banner .herobanner_inner_wrap .quick_links_wrap .hero_quick_links .quick_link"
      );
      quickLinks.forEach((elm, index) => {
        elm.addEventListener("mouseover", function () {
          document.body.classList.add("quick__links--enter");
          quickLinks.forEach((elm, index) => {
            elm.classList.remove("mouseOver");
          });
          elm.classList.add("mouseOver");
        });
        elm.addEventListener("mouseleave", function () {
          document.body.classList.remove("quick__links--enter");
        });
      });
      ctx = gsap.context(() => {
        let bannerTimeline = gsap.timeline();
        if (data?.Writing_words) {
          const textArray = document
            .querySelector("#textOut")
            .getAttribute("data-animator-text")
            .split(",");
          var bannerTextAnim = gsap.timeline({
            repeat: -1,
            repeatDelay: 0,
            // ease: Power0.easeNone,
          });
          textArray.forEach((element, index) => {
            bannerTextAnim
              .to("#textOut", {
                text: `${element}`,
                duration: 1.5,
                delay: 0,
              })
              .to("#textOut", {
                text: "",
                duration: 0,
                delay: 2,
              });
          });
        }
        // const textArray = data?.Writing_words?.split(",");
        if (document.querySelector(".quick_link")) {
          let scrollval = document.querySelector(".quick_link").offsetWidth;
          let length = document.querySelectorAll(
            ".quick_links_wrap:not(.banner_slider_wrap) .quick_link"
          ).length;
          let scrollLength = 600 * (length - 2);

          if (window.screen.width > 1200) {
            bannerTimeline
              .to(".hero_banner .herobanner_inner_wrap", {
                x: -(scrollval * (length - 2)),
                // y: scroll.scroll.y,
                scrollTrigger: {
                  trigger: ".herobanner_inner_wrap",
                  start: "0% 0%",
                  end: `+${scrollLength + 500}`,
                  // scroller: window,
                  scrub: true,
                  pin: true,
                },
              })
              .to(".hero_banner .quick_link", {
                yPercent: -100,
                stagger: 0.05,
                scrollTrigger: {
                  trigger: ".herobanner_inner_wrap",
                  start: "0% -2px",
                  end: "1500",
                  scrub: true,
                  // pin: true,
                },
              });
          }
        }
        gsap.fromTo(
          ".animate_in",
          {
            y: 120,
          },
          {
            delay: 1,
            duration: 1,
            stagger: 0.4,
            y: 0,
          }
        );
      });
    }

    return () => {
      if (ctx) {
        ctx.revert();
      }
    };
  }, []);

  return (
    <section className="hero_banner" data-scroll-section id="banner">
      <div
        className="hero_container"
        data-scroll-sticky
        data-scroll-target="#banner"
        data-scroll>
        <div className="herobanner_inner_wrap" data-scroll>
          <div className="banner_head" data-scroll>
            <div className="content_wrap" data-scroll>
              <h1 data-scroll>
                <div className="line line1">
                  <div className="animate_in">{data?.Line_1}</div>
                </div>
                <div className="line line2">
                  <span
                    id="textOut"
                    className="animate_in"
                    data-animator-text={data?.Writing_words}></span>
                </div>
                <div className="line line2">
                  <div className="animate_in">
                    {data?.Line_2}
                    <span>.</span>
                  </div>
                </div>
              </h1>
              {/* <div className="overflow-hidden">
                <Link href={"#"} className="cta_primary" data-scroll>
                  book a meeting
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="4.31389"
                      y1="12.2781"
                      x2="11.2333"
                      y2="4.03194"
                      stroke="#181818"
                      strokeWidth="0.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.21547 4.09155L11.7401 3.43318L12.3985 10.9579"
                      stroke="#181818"
                      strokeWidth="0.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div> */}
            </div>
            <div className="banner_ai_footer">
              <div className="ai_featured_img">
                <Image
                  src={data?.Ai_technology_image?.data?.attributes?.url}
                  width={185}
                  height={169}
                  priority
                  alt={
                    data?.Ai_technology_image?.data?.attributes?.alternativeText
                      ? data?.Ai_technology_image?.data?.attributes
                          ?.alternativeText
                      : "ai featured image"
                  }
                />
              </div>
              <div className="ai_content_wrap">
                <div>
                  <h3>{data?.Ai_technology_title}</h3>
                  <p>{data?.Ai_technology_subtitle}</p>
                </div>
                <div>
                  <p>{data?.Ai_technology_short_description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="quick_links_wrap" data-scroll>
            <div className="hero_quick_links" data-scroll>
              {data?.projects &&
                data?.projects?.data?.length > 0 &&
                data?.projects?.data?.map((elm, index) => {
                  return (
                    <Link
                      aria-label={
                        elm?.attributes?.Homepage_banner_image?.data?.attributes
                          ?.alternativeText
                          ? elm?.attributes?.Homepage_banner_image?.data
                              ?.attributes?.alternativeText
                          : elm?.attributes?.Name
                      }
                      href={"/our-portfolio/" + elm?.attributes?.Slug}
                      className={
                        index == 0 ? "quick_link mouseOver " : "quick_link"
                      }
                      data-cursor-img="/icons/quicklink.svg"
                      key={index}>
                      <div className="wrapper">
                        <Image
                          src={
                            elm?.attributes?.Homepage_banner_image?.data
                              ?.attributes?.url
                          }
                          width={400}
                          priority
                          height={500}
                          alt={
                            elm?.attributes?.Homepage_banner_image?.data
                              ?.attributes?.alternativeText
                              ? elm?.attributes?.Homepage_banner_image?.data
                                  ?.attributes?.alternativeText
                              : elm?.attributes?.Name
                          }
                        />
                        <div className="link_footer">
                          <span>{"0" + (index + 1)}</span>
                          <h4>{elm?.attributes?.Name}</h4>
                          <h5>
                            {
                              elm?.attributes?.portfolio_categories?.data[0]
                                ?.attributes?.Name
                            }
                          </h5>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
