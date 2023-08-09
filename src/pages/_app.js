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
  useLayoutEffect(() => {
    if (typeof window != "undefined") {
      if (window.screen.width > 1200) {
        const update = (time, deltaTime, frame) => {
          lenis.raf(time * 1000);
        };

        const resize = (e) => {
          ScrollTrigger.refresh();
        };

        const lenis = new Lenis({
          duration: 2,
          lerp: 0.07,
        });

        lenis.on(
          "scroll",
          ({ scroll, limit, velocity, direction, progress }) => {
            // console.log({ scroll, limit, velocity, direction, progress })
            ScrollTrigger.update();
          }
        );

        gsap.ticker.add(update);

        document.querySelectorAll(".scroll_to").forEach((element) => {
          element.addEventListener("click", function (e) {
            e.preventDefault();
            let target = document.getElementById(
              `${e.target.getAttribute("href").split("#")[1]}`
            );
            lenis.scrollTo(target, {
              duration: 2,
              // easing:(t) => Math.min(1, 1.001 - Math.pow(2, -0 * t))
            });
            console.log(e.target.getAttribute("href").split("#")[1]);
          });
        });
      }

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
    return () => {};
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
