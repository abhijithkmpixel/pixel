/** @format */

import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Slider from "react-slick";

const Services = ({ data }) => {
  let ctx;

  useEffect(() => {
    if (typeof document != "undefined") {
      ctx = gsap.context(() => {
        let serviceTitleTimeline = gsap.timeline();
        if (window.screen.width > 1200) {
          serviceTitleTimeline
            .from(".services_listing .title span:first-child", {
              y: 100,
              opacity: 0,
              duration: 1,
              scrollTrigger: {
                trigger: ".services_listing .title",
                start: "100% 100%",
                end: "+=100",
                scrub: true,
                pin: false,
              },
            })
            .from(".services_listing .title img", {
              y: 100,
              opacity: 0,
              duration: 1,
              // delay: 0.5,
              scrollTrigger: {
                trigger: ".services_listing .title",
                start: "100% 100%",
                end: "+=300",
                scrub: true,
                pin: false,
              },
            })
            .from(".services_listing .title span:nth-child(2)", {
              y: 100,
              opacity: 0,
              duration: 1,
              // delay: 0.5,
              scrollTrigger: {
                trigger: ".services_listing .title",
                start: "100% 100%",
                end: "+=600",
                scrub: true,
                pin: false,
              },
            });
          gsap.from(".services_listing .tech_logo > div", {
            // scale: 1.3,
            x: 200,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".services_listing .tech_logo",
              start: "50% 100%",
              end: "+=400",
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
        breakpoint: 5000,
        settings: "unslick",
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
  return (
    <section className="services_listing" data-scroll-section>
      <div className="container-fluid">
        <h2 className="title" data-scroll data-scroll-offset="200">
          <span dangerouslySetInnerHTML={{ __html: data?.Title_1 }}></span>
          <span> {data?.Title_2}</span>
          <Image
            src="/icons/sphere.svg"
            alt="pixelated sphere  icon"
            width={249}
            height={249}
            data-scroll
            data-scroll-speed="1"
            data-scroll-direction="horizontal"
          />
        </h2>
        {data?.services && data?.services?.data?.length > 0 && (
          <div className="services_outer_wrap">
            <Slider {...settings} className="services_row" data-scroll>
              {data?.services?.data?.map((serv, index) => {
                return (
                  <div
                    className="services_item"
                    data-scroll
                    key={index}
                    data-scroll-offset="300">
                    <span data-scroll>{"0" + (index + 1)}</span>
                    <Link
                      href={
                        "/services/" +
                        (serv?.attributes?.Slug != null
                          ? serv?.attributes?.Slug
                          : "#")
                      }
                      className="item_inner"
                      data-scroll>
                      <Image
                        src={
                          serv?.attributes?.Homepage_listing_image?.data
                            ?.attributes?.url
                        }
                        alt={
                          serv?.attributes?.Homepage_listing_image?.data
                            ?.attributes?.alternativeText != null
                            ? serv?.attributes?.Homepage_listing_image?.data
                                ?.attributes?.alternativeText
                            : serv?.attributes?.Name
                        }
                        width={440}
                        height={450}
                        data-scroll
                      />
                      <h4>
                        {serv?.attributes?.Name}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_117_188)">
                            <path
                              d="M0 8H16"
                              stroke="white"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8 0V16"
                              stroke="white"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_117_188">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </h4>
                      <div className="hover_icon" data-scroll>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <line
                            x1="4.26461"
                            y1="11.7147"
                            x2="10.6698"
                            y2="4.08137"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.21545 4.09155L11.7401 3.43318L12.3984 10.9579"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </Slider>
          </div>
        )}

        <div className="row " data-scroll>
          <div className="col-12 col-xl-6" data-scroll>
            <p>{data?.Technology_title}</p>
          </div>
        </div>
        {data?.Technology_images &&
          data?.Technology_images?.Image?.data?.length > 0 && (
            <div className="row tech_logo" data-scroll>
              {data?.Technology_images?.Image?.data?.map((img, index) => {
                return (
                  <div className="col-12 col-md-6 col-xl-3" key={index}>
                    <Image
                      src={img?.attributes?.url}
                      alt={
                        img?.attributes?.alternativeText != null
                          ? img?.attributes?.alternativeText
                          : "Technology logo"
                      }
                      width={500}
                      height={400}
                    />
                  </div>
                );
              })}
            </div>
          )}
      </div>
    </section>
  );
};
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button className={"slick-arrow slick-next"} onClick={onClick}>
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
    <button className={"slick-arrow slick-prev"} onClick={onClick}>
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
export default Services;
