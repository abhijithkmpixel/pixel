import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useLayoutEffect } from "react";
import Slider from "react-slick";

const Banner = () => {
  let ctx;

  useEffect(() => {
    if (typeof window != "undefined") {
      var quickLinks = document.querySelectorAll(
        ".hero_banner .herobanner_inner_wrap .quick_links_wrap .hero_quick_links .quick_link"
      );
      quickLinks.forEach((elm, index) => {
        elm.addEventListener("mouseover", function () {
          quickLinks.forEach((elm, index) => {
            elm.classList.remove("mouseOver");
          });
          elm.classList.add("mouseOver");
        });
      });

      ctx = gsap.context(() => {
        let scrollval = document.querySelector(".quick_link").offsetWidth;
        let length = document.querySelectorAll(
          ".quick_links_wrap:not(.banner_slider_wrap) .quick_link"
        ).length;
        let scrollLength = 600 * (length - 2);
        let bannerTimeline = gsap.timeline();
        const textArray = document
          .querySelector("#textOut")
          .getAttribute("data-animator-text")
          .split(",");
        var bannerTextAnim = gsap.timeline({
          repeat: -1,
          repeatDelay: 0,
          // ease: Power0.easeNone,
        });
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
    autoplay: true,
    autoplayScpped: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
    variableWidth: true,
    useTransform: false,
    responsive: [
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <section className="hero_banner" data-scroll-section id="banner">
      <div
        className="hero_container"
        data-scroll-sticky
        data-scroll-target="#banner"
        data-scroll
      >
        <div className="herobanner_inner_wrap" data-scroll>
          <div className="banner_head" data-scroll>
            <div className="content_wrap" data-scroll>
              <h1 data-scroll>
                <div className="line line1">
                  <div className="animate_in">we are</div>
                </div>
                <div className="line line2">
                  <span
                    id="textOut"
                    className="animate_in"
                    data-animator-text="Design,Creative,digital"
                  ></span>
                </div>
                <div className="line line2">
                  <div className="animate_in">
                    agency<span>.</span>
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
                  src="/uploads/ai.png"
                  width={185}
                  height={169}
                  alt="ai image"
                />
              </div>
              <div className="ai_content_wrap">
                <div>
                  <h3>GPT AI Technogies</h3>
                  <p>Pixelflames company</p>
                </div>
                <div>
                  <p>Pixelflames is web design agency based in Dubai, UAE.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="quick_links_wrap" data-scroll>
            <div className="hero_quick_links" data-scroll>
              <Link
                href={"#"}
                className="quick_link"
                data-cursor-img="/icons/quicklink.svg"
              >
                <div className="wrapper">
                  <Image
                    src={"/uploads/burj.png"}
                    width={400}
                    height={500}
                    alt=""
                    priority
                  />
                  <div className="link_footer">
                    <span>01</span>
                    <h4>Burj Khalifa</h4>
                    <h5>Web development</h5>
                  </div>
                </div>
              </Link>
              <Link
                href={"#"}
                className="quick_link"
                data-cursor-img="/icons/quicklink.svg"
              >
                <div className="wrapper">
                  <Image
                    src={"/uploads/afc.png"}
                    width={400}
                    height={500}
                    alt=""
                    priority
                  />
                  <div className="link_footer">
                    <span>02</span>
                    <h4>Afc President</h4>
                    <h5>Web development</h5>
                  </div>
                </div>
              </Link>
              <Link
                href={"#"}
                className="quick_link"
                data-cursor-img="/icons/quicklink.svg"
              >
                <div className="wrapper">
                  <Image
                    src={"/uploads/lady.png"}
                    width={400}
                    height={500}
                    alt=""
                    priority
                  />
                  <div className="link_footer">
                    <span>03</span>
                    <h4>Afc President</h4>
                    <h5>Web development</h5>
                  </div>
                </div>
              </Link>
              <Link
                href={"#"}
                className="quick_link"
                data-cursor-img="/icons/quicklink.svg"
              >
                <div className="wrapper">
                  <Image
                    src={"/uploads/afc.png"}
                    width={400}
                    height={500}
                    alt=""
                    priority
                  />
                  <div className="link_footer">
                    <span>04</span>
                    <h4>Afc President</h4>
                    <h5>Web development</h5>
                  </div>
                </div>
              </Link>
              <Link
                href={"#"}
                className="quick_link"
                data-cursor-img="/icons/quicklink.svg"
              >
                <div className="wrapper">
                  <Image
                    src={"/uploads/lady.png"}
                    width={400}
                    height={500}
                    alt=""
                    priority
                  />
                  <div className="link_footer">
                    <span>05</span>
                    <h4>Afc President</h4>
                    <h5>Web development</h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {/* <div className="quick_links_wrap banner_slider_wrap" data-scroll>
            <Slider {...settings} className="hero_quick_links" data-scroll>
              <Link href={"#"} className="quick_link">
                <div className="wrapper" data-scroll>
                  <Image
                    src={"/uploads/burj.png"}
                    width={400}
                    height={500}
                    alt=""
                    priority
                  />
                  <div className="link_footer">
                    <span>01</span>
                    <h4>Burj Khalifa</h4>
                    <h5>Web development</h5>
                  </div>
                </div>
              </Link>
              <Link href={"#"} className="quick_link">
                <div className="wrapper" data-scroll>
                  <Image
                    src={"/uploads/afc.png"}
                    width={400}
                    height={500}
                    alt=""
                    priority
                  />
                  <div className="link_footer">
                    <span>02</span>
                    <h4>Afc President</h4>
                    <h5>Web development</h5>
                  </div>
                </div>
              </Link>
              <Link href={"#"} className="quick_link">
                <div className="wrapper" data-scroll>
                  <Image
                    src={"/uploads/lady.png"}
                    width={400}
                    height={500}
                    alt=""
                    priority
                  />
                  <div className="link_footer">
                    <span>03</span>
                    <h4>Afc President</h4>
                    <h5>Web development</h5>
                  </div>
                </div>
              </Link>
            </Slider>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
