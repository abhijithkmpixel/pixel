import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Slider from "react-slick";

const Services = () => {
  let ctx;

  useEffect(() => {
    if (typeof document != "undefined") {
      ctx = gsap.context(() => {
        let serviceTitleTimeline = gsap.timeline();

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
          <span>
            We are <br />
            here to{" "}
          </span>
          <span> help you</span>
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
        <div className="services_outer_wrap">
          <Slider {...settings} className="services_row" data-scroll>
            <div className="services_item" data-scroll data-scroll-offset="300">
              <span data-scroll>01</span>
              <Link href={"#"} className="item_inner" data-scroll>
                <Image
                  src="/uploads/wd.jpg"
                  alt="image"
                  width={440}
                  height={450}
                  data-scroll
                />
                <h4>
                  Web Development{" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
            <div className="services_item" data-scroll data-scroll-offset="300">
              <span data-scroll>02</span>
              <Link href={"#"} className="item_inner" data-scroll>
                <Image
                  src="/uploads/ux.jpg"
                  alt="image"
                  width={440}
                  height={450}
                  data-scroll
                />
                <div className="hover_icon" data-scroll>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
                <h4>
                  UX UI Strategy{" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
              </Link>
            </div>
            <div className="services_item" data-scroll data-scroll-offset="300">
              <span data-scroll>03</span>
              <Link href={"#"} className="item_inner" data-scroll>
                <Image
                  src="/uploads/seo.jpg"
                  alt="image"
                  width={440}
                  height={450}
                  data-scroll
                />
                <div className="hover_icon" data-scroll>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
                <h4>
                  SEO Marketing{" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
              </Link>
            </div>
          </Slider>
        </div>
        <div className="row " data-scroll>
          <div className="col-12 col-xl-6" data-scroll>
            <p>
              We provide tailored services for businesses to succeed in the
              digital landscape.
            </p>
          </div>
        </div>
        <div className="row tech_logo" data-scroll>
          <div className="col-12 col-md-6 col-xl-3">
            <Image
              src={"/uploads/pro.svg"}
              alt="image"
              width={100}
              height={55}
            />
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <Image
              src={"/uploads/kent.svg"}
              alt="image"
              width={100}
              height={55}
            />
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <Image
              src={"/uploads/str.svg"}
              alt="image"
              width={100}
              height={55}
            />
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <Image
              src={"/uploads/um.svg"}
              alt="image"
              width={100}
              height={55}
            />
          </div>
        </div>
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
        xmlns="http://www.w3.org/2000/svg"
      >
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
        xmlns="http://www.w3.org/2000/svg"
      >
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
