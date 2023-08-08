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

        if (window.screen.width > 1200) {

   
          // gsap.fromTo(
          //   ".hero_banner .cta_primary",
          //   {
          //     y: 100,
          //   },
          //   {
          //     delay: 1.2,
          //     duration: 1.5,
          //     // stagger: 0.4,
          //     y: 0,
          //   }
          // );

    
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
   
          // gsap.fromTo(
          //   ".about_us_banner .title_primary",
          //   {
          //     y: 50,
          //   },
          //   {
          //     y: -50,
          //     scrollTrigger: {
          //       trigger: ".about_us_banner .title_primary",
          //       start: "0% 100%",
          //       end: "0% 0%",
          //       // scroller: window,
          //       scrub: true,
          //     },
          //   }
          // );
       
   
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
