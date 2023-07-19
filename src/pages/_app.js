import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/styles/app.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import { useEffect } from "react";
import gsap, { Bounce } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Header from "@/components/Header";
import MouseFollower from "mouse-follower";
import Script from "next/script";
gsap.registerPlugin(ScrollTrigger);
export default function App({ Component, pageProps }) {
  useEffect(() => {
    let ctx;
    let scroll, scrollHor;
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
      import("locomotive-scroll").then((locomotiveModule) => {
        scroll = new locomotiveModule.default({
          el: document.querySelector(".smoothScroller"),
          name: "scroll",
          offset: [0, 0],
          repeat: false,
          smooth: true,
          lerp: 0.07,
          multiplier: 1,
          firefoxMultiplier: 50,
          tablet: {
            smooth: false,
            direction: "vertical",
            gestureDirection: "vertical",
            breakpoint: 1024,
          },
          smartphone: {
            smooth: false,
            direction: "vertical",
            gestureDirection: "vertical",
          },
        });

        scroll.on("scroll", ScrollTrigger.update);
        scroll.on("scroll", (scroll) => {
          ScrollTrigger.update;
          if (scroll.scroll.y > 5) {
            document.querySelector("body").classList.add("desktop_sticky");
          } else {
            document.querySelector("body").classList.remove("desktop_sticky");
          }
        });

        let scrollval = document.querySelector(".quick_link").offsetWidth;
        let length = document.querySelectorAll(
          ".quick_links_wrap:not(.banner_slider_wrap) .quick_link"
        ).length;

        let scrollLength = 600 * (length - 2);

        document.querySelector(".hero_banner").style.paddingBottom =
          scrollLength + "px";

        ctx = gsap.context(() => {
          gsap.to(".hero_banner .herobanner_inner_wrap", {
            x: -(scrollval * (length - 2)),
            y: scroll.scroll.y,
            scrollTrigger: {
              trigger: ".herobanner_inner_wrap",
              start: "0% -1px",
              // ease: Bounce.easeOut,
              end: `+${scrollLength}`,
              scroller: ".smoothScroller",
              scrub: true,
            },
          });

          gsap.to(".our_branches img", {
            scale: 1.5,
            scrollTrigger: {
              trigger: ".our_branches",
              start: "0% 100%",
              end: "100% 0%",
              scroller: ".smoothScroller",
              scrub: true,
            },
          });
        });

        ScrollTrigger.scrollerProxy(".smoothScroller", {
          scrollTop(value) {
            return arguments.length
              ? scroll.scrollTo(value, 0, 0)
              : scroll.scroll.instance.scroll.y;
          }, // we don't have to define a scrollLeft because we're only scrolling vertically.
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
          pinType: document.querySelector(".smoothScroller").style.transform
            ? "transform"
            : "fixed",
        });

        ScrollTrigger.addEventListener("refresh", () => scroll.update());

        // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
        ScrollTrigger.refresh();
      });
    } else {
      window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
          document.querySelector("body").classList.add("sticky_header");
        } else {
          document.querySelector("body").classList.remove("sticky_header");
        }
      });
    }

    // `useEffect`'s cleanup phase
    return () => {
      if(ctx){

        ctx.revert();
      }
      // if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="favicon" href="/favicon.ico" />
      </Head>
      <Header />
      <main data-scroll-containerr className="smoothScroller">
        <Component {...pageProps} />
      </main>
    </>
  );
}
