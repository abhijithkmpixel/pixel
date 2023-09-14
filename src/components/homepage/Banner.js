/** @format */
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Slider from "react-slick";

const Banner = ({ data }) => {
  let ctx;
  const [isClient, setisClient] = useState(false);
  useEffect(() => {
    if (typeof window != "undefined") {
      setisClient(true);
      var quickLinks = document.querySelectorAll(
        ".hero_banner .herobanner_inner_wrap .quick_links_wrap .hero_quick_links .quick_link"
      );
      // quickLinks.forEach((elm, index) => {
      //   elm.addEventListener("mouseover", function () {
      //     document.body.classList.add("quick__links--enter");
      //     quickLinks.forEach((elm, index) => {
      //       elm.classList.remove("mouseOver");
      //     });
      //     elm.classList.add("mouseOver");
      //   });
      //   elm.addEventListener("mouseleave", function () {
      //     document.body.classList.remove("quick__links--enter");
      //   });
      // });
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
            ".quick_links_wrap.hero_quick_links--desktop:not(.banner_slider_wrap) .quick_link"
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
        gsap.fromTo(
          ".herobanner_inner_wrap .cta_primary",
          {
            y: 120,
          },
          {
            delay: 2,
            duration: 1,
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
  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    autoplay: false,
    autoplayScpped: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 8000,
        settings: "unslick",
      },
      {
        breakpoint: 1200,
        settings: {
          settings: "slick",
          useTransform: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 990,
        settings: {
          settings: "slick",
          useTransform: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  };
  const mouseOver = (e) => {
    e.target.classList.add("mouseOver");
  };
  const mouseLeave = (e) => {
    e.target.classList.remove("mouseOver");
  };
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
              {data?.Banner_cta != null && (
                <div className="overflow-hidden">
                  <Link
                    href={data?.Banner_cta?.Url}
                    className="cta_primary "
                    data-scroll>
                    <span>{data?.Banner_cta?.Text}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
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
                </div>
              )}
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
          <div
            className="quick_links_wrap hero_quick_links--desktop"
            data-scroll>
            <div className="hero_quick_links " data-scroll>
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
                      onMouseOver={(e) => mouseOver(e)}
                      onMouseLeave={(e) => mouseLeave(e)}
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
                            {elm?.attributes?.portfolio_categories?.data?.map(
                              (el, index) => {
                                return (
                                  (index > 0 ? ", " : "") + el?.attributes?.Name
                                );
                              }
                            )}
                          </h5>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
          <div className="quick_links_wrap hero_quick_links--mobileslider">
            <Slider {...settings} className="hero_quick_links  " data-scroll>
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
                            {elm?.attributes?.portfolio_categories?.data?.map(
                              (el, index) => {
                                return (
                                  (index > 0 ? ", " : "") + el?.attributes?.Name
                                );
                              }
                            )}
                          </h5>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className={"slick_arrow slick_next"}
      aria-label="Next slide"
      title="next"
      onClick={onClick}>
      <svg
        width="28"
        height="16"
        viewBox="0 0 28 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <line
          x1="0.684881"
          y1="8.15252"
          x2="26.0974"
          y2="8.15252"
          stroke="#181818"
          strokeWidth="1.36976"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.833 1L26.7828 7.99995L19.833 15"
          stroke="#181818"
          strokeWidth="1.36976"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className={"slick_arrow slick_prev"}
      title="previous"
      aria-label="Previous slide"
      onClick={onClick}>
      <svg
        width="28"
        height="16"
        viewBox="0 0 28 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <line
          x1="0.684881"
          y1="-0.684881"
          x2="26.0974"
          y2="-0.684881"
          transform="matrix(-1 0 0 1 27.7827 8.8374)"
          stroke="#181818"
          strokeWidth="1.36976"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.94971 1L0.999961 7.99995L7.94971 15"
          stroke="#181818"
          strokeWidth="1.36976"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
