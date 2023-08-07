import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/styles/app.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import { useEffect, useLayoutEffect } from "react";
import gsap, { Bounce, Power0, TweenLite, TweenMax } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Header from "@/components/Header";
import MouseFollower from "mouse-follower";
import Script from "next/script";
import { TextPlugin } from "gsap/dist/TextPlugin";
import Lenis from "@studio-freight/lenis";
import Footer from "@/components/Footer";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

export default function App({ Component, pageProps }) {
  let ctx;
  useLayoutEffect(() => {
    if (typeof window != "undefined") {
      // document.querySelector(".hero_banner").style.paddingBottom =
      //   scrollLength + "px";
      if (window.screen.width > 1200) {
        const lenis = new Lenis({
          lerp: 0.07,
          duration: 2,
        });

        lenis.on("scroll", ScrollTrigger.update);
        lenis.on("scroll", ScrollTrigger.refresh);
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });

        // function raf(time) {
        //   lenis.raf(time);
        //   requestAnimationFrame(raf);
        // }

        // requestAnimationFrame(raf);
        gsap.ticker.lagSmoothing(0);
      }

      ctx = gsap.context(() => {
        if (document.querySelector("#textOut")) {
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

        if (window.screen.width > 1200) {
          if (document.querySelector(".quick_link")) {
            let scrollval = document.querySelector(".quick_link").offsetWidth;
            let length = document.querySelectorAll(
              ".quick_links_wrap:not(.banner_slider_wrap) .quick_link"
            ).length;
            let scrollLength = 600 * (length - 2);
            let bannerTimeline = gsap.timeline();
            bannerTimeline
              .to(".hero_banner .herobanner_inner_wrap", {
                x: -(scrollval * (length - 2)),
                // y: scroll.scroll.y,
                scrollTrigger: {
                  trigger: ".herobanner_inner_wrap",
                  start: "0% -1px",
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
            ".hero_banner .cta_primary",
            {
              y: 100,
            },
            {
              delay: 1.2,
              duration: 1.5,
              // stagger: 0.4,
              y: 0,
            }
          );

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
          gsap.from(".contact-btn_wrap", {
            // scale: 1.3,
            x: 150,
            scrollTrigger: {
              trigger: ".contact-btn_wrap",
              start: "0% 100%",
              end: "+=500",
              // scroller: window,
              scrub: true,
            },
          });
          gsap.to(".our_branches img", {
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
          gsap.fromTo(
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
                // scroller: window,
                scrub: true,
              },
            }
          );
          gsap.fromTo(
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
          gsap.to(".about_us_banner .intro_block .banner_image img", {
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
          gsap.to(".about_us_banner .intro_block .about_bodycopy", {
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
              stagger: 0.1,
              scrollTrigger: {
                trigger:
                  ".about_us_banner .achievements_row .achievement_cards",
                start: "0% 100%",
                end: "0% 0%",
                // scroller: window,
                scrub: true,
              },
            }
          );
        }
      });
      if (window.screen.width > 1200) {
        MouseFollower.registerGSAP(gsap);

        document.querySelectorAll(".cta_secondary").forEach((elm, index) => {
          elm.addEventListener("mouseenter", function (e) {
            var rect = e.target.getBoundingClientRect();
            var x = e.clientX - rect.left; //x position within the element.
            var y = e.clientY - rect.top; //y position within the element.
            elm.style.setProperty("--x", x + "px");
            elm.style.setProperty("--y", y + "px");
          });
          elm.addEventListener("mouseleave", function (e) {
            var rect = e.target.getBoundingClientRect();
            var x = e.clientX - rect.left; //x position within the element.
            var y = e.clientY - rect.top; //y position within the element.
            elm.style.setProperty("--x", x + "px");
            elm.style.setProperty("--y", y + "px");
          });
        });

        const cursor = new MouseFollower({
          container: "#__next",
          skewing: 0,
          skewingText: 0,
          skewingIcon: 0,
          skewingMedia: 0,
        });
        window.addEventListener("scroll", function () {
          if (window.scrollY > 20) {
            document.querySelector("body").classList.add("desktop_sticky");
          } else {
            document.querySelector("body").classList.remove("desktop_sticky");
          }
        });
      } else {
        window.addEventListener("scroll", function () {
          if (window.scrollY > 20) {
            document.querySelector("body").classList.add("sticky_header");
          } else {
            document.querySelector("body").classList.remove("sticky_header");
          }
        });
      }
    }
    return () => {
      // if (ctx) {
      ctx.revert();
      // }
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="favicon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <main data-scroll-containerr className="smoothScroller"> */}
      <Component {...pageProps} />
      {/* </main> */}
      <Footer />
    </>
  );
}
