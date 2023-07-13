import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/styles/app.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
// import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
// typical import
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Draggable from "gsap/dist/Draggable";
// get other plugins:
import Header from "@/components/Header";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        lerp: 0.07,
        smoothMobile: false,
        resetNativeScroll: true,
      });
      scroll.on("scroll", ScrollTrigger.update);
      let scrollval = document.querySelector(".quick_link").offsetWidth;
      console.log(scrollval);
      gsap.to(".hero_banner .herobanner_inner_wrap", {
        x: -scrollval,
        scrollTrigger: {
          trigger: ".hero_banner .herobanner_inner_wrap",
          start: "0% -1px",
          end: "+500",
          scroller: "[data-scroll-container]",
          scrub: true,
          // pin: true,
        },
      });

      gsap.to(".our_branches img", {
        scale: 1.5,
        scrollTrigger: {
          trigger: ".our_branches",
          start: "0% 100%",
          end: "100% 0%",
          scroller: "[data-scroll-container]",
          scrub: true,
          // pin: true,
        },
      });
      // document.querySelectorAll(".title_primary").forEach((el,index) => {
      //   gsap.to(el, {
      //     y: 0,
      //     opacity:1,
      //     duration: 1,
      //     scrollTrigger: {
      //       trigger: el,
      //       start: "100% 100%",
      //       // end: "100% 0%",
      //       scroller: "[data-scroll-container]",
      //       // scrub: true,
      //       // pin: true,
      //     },
      //   });
      // });

      ScrollTrigger.scrollerProxy("[data-scroll-container]", {
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
        pinType: document.querySelector("[data-scroll-container]").style
          .transform
          ? "transform"
          : "fixed",
      });
      ScrollTrigger.addEventListener("refresh", () => scroll.update());

      // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
      ScrollTrigger.refresh();
    });

    // `useEffect`'s cleanup phase
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="favicon" href="/favicon.ico" />
      </Head>
      <Header />
      <main data-scroll-container>
        <Component {...pageProps} />
      </main>
    </>
  );
}
