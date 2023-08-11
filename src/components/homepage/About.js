import { TweenLite, gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    let ctx;
    if (typeof document != "undefined") {
      let aboutTitle = gsap.timeline();
      let aboutSubTitle = gsap.timeline();
      let aboutFimage = gsap.timeline();
      let aboutbody = gsap.timeline();
      ctx = gsap.context(() => {
        if (window.screen.width > 1200) {
          // var mArea = document.querySelector(".cta_secondary");

          // // 1. Set the function and variables
          // function parallaxIt(e, target, movement = 1) {
          //   var boundingRect = mArea.getBoundingClientRect();
          //   var relX = e.pageX - boundingRect.left;
          //   var relY = e.pageY - boundingRect.top;
          //   var scrollTop =
          //     window.pageYOffset || document.documentElement.scrollTop;
          //   mArea.style.transform = `translate(${
          //     (relX - boundingRect.width / 2) * movement
          //   },${relY - boundingRect.height / 2 - scrollTop})`;
          //   // gsap.to(target, {
          //   //   x: (relX - boundingRect.width / 2) * movement,
          //   //   y: (relY - boundingRect.height / 2 - scrollTop) * movement,
          //   //   ease: "power1",
          //   //   duration: 0.6,
          //   // });
          // }

          // // 2. Call the function
          // function callParallax(e) {
          //   parallaxIt(e, "#magnetic-content");
          // }

          // mArea.addEventListener("mousemove", function (e) {
          //   callParallax(e);
          // });

          // mArea.addEventListener("mouseleave", function (e) {
          //   mArea.style.transfrom = `translate(0,0)`;

          //   // gsap.to("#magnetic-content", {
          //   //   scale: 1,
          //   //   x: 0,
          //   //   y: 0,
          //   //   ease: "power3",
          //   //   duration: 0.6,
          //   // });
          // });
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
            xmlns="http://www.w3.org/2000/svg"
          >
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
          We Are a Professional Agency In DubaI
        </h2>
        <div className="intro_block" data-scroll>
          <div className="row">
            <div className="col-12 col-xl-2">
              <h3 data-scroll data-scroll-speed="1.5">
                About
              </h3>
            </div>
            <div className="col-12 col-xl-10">
              <div
                className="banner_image"
                data-scroll
                data-scroll-offset="300"
              >
                <Image
                  src={"/uploads/about.jpg"}
                  alt={"about us image"}
                  width={850}
                  height={570}
                />
              </div>
              <div
                className="about_bodycopy"
                data-scroll
                data-scroll-speed="1.2"
                data-scroll-direction="horizontal"
              >
                <p>
                  Pixelflames is web design agency based in Dubai, UAE. Their
                  main services include UX/UI design, web development, app
                  development, and digital marketing. Our team of skilled
                  professionals merges creativity with technical expertise to
                  deliver top-notch services to clients. With offices located in
                  Dubai, UAE, and India.
                </p>
                <div className="about_footer" data-scroll>
                  <h4 data-scroll>
                    Pixelflames is web design agency based in Dubai, UAE. Their
                    main services
                  </h4>
                  <div data-scroll data-scroll-speed="1.5" className="ms-auto">
                    <Link
                      href={"#"}
                      className="cta_secondary"
                      data-scroll
                      style={{ "--x": "10px", "--y": "10px" }}
                      id="magnetic-area"
                    >
                      <span>learn more </span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="4.34872"
                          y1="11.7146"
                          x2="10.7539"
                          y2="4.08125"
                          stroke="#F0F0F0"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.29962 4.09155L11.8243 3.43318L12.4826 10.9579"
                          stroke="#F0F0F0"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row achievements_row" data-scroll>
            <div className="col-12  col-sm-6- col-md-4 col-lg-4" data-scroll>
              <div
                className="achievement_cards"
                data-scroll
                data-scroll-offset="200"
              >
                <div className="cardheader">
                  <Image
                    src={"/uploads/ga.png"}
                    width={50}
                    height={50}
                    data-scroll
                    alt={"icon"}
                  />
                  <h3 data-scroll>10+</h3>
                </div>
                <h4 data-scroll>Global Awards</h4>
                <p data-scroll>Web development</p>
              </div>
            </div>
            <div className="col-12  col-sm-6- col-md-4 col-lg-4" data-scroll>
              <div
                className="achievement_cards"
                data-scroll
                data-scroll-offset="200"
              >
                <div className="cardheader">
                  <Image
                    src={"/uploads/client.png"}
                    width={50}
                    height={50}
                    data-scroll
                    alt={"icon"}
                  />
                  <h3 data-scroll>210+</h3>
                </div>
                <h4 data-scroll>Clients Worldwide</h4>
                <p data-scroll>Web development</p>
              </div>
            </div>
            <div className="col-12  col-sm-6- col-md-4 col-lg-4" data-scroll>
              <div
                className="achievement_cards"
                data-scroll
                data-scroll-offset="200"
              >
                <div className="cardheader">
                  <Image
                    src={"/uploads/exp.png"}
                    width={50}
                    height={50}
                    data-scroll
                    alt={"icon"}
                  />
                  <h3 data-scroll>14+</h3>
                </div>
                <h4 data-scroll>Years Experiences</h4>
                <p data-scroll>Web development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
