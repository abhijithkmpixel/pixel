/** @format */

import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/styles/app.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import { useEffect, useLayoutEffect, useState } from "react";
import gsap, { Bounce, Power0, TweenLite, TweenMax } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Header from "@/components/Header";
import MouseFollower from "mouse-follower";
import Script from "next/script";
import { TextPlugin } from "gsap/dist/TextPlugin";
import Lenis from "@studio-freight/lenis";
import Footer from "@/components/Footer";
import Router, { useRouter } from "next/router";
import Image from "next/image";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loaderOpen, setloaderOpen] = useState(true);
  const [prevPath, setprevPath] = useState();
  useEffect(() => {
    setTimeout(() => {
      setloaderOpen(false);
    }, 3000);
    if (typeof document != "undefined") {
      // let prevPath = localStorage.getItem("PREVPATH");
      // console.log(prevPath);
      // if (prevPath == null) {
      //   localStorage.setItem("PREVPATH", router.pathname);
      //   setprevPath(router.pathname);
      // }
    }

    return () => {};
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    if (typeof window != "undefined") {
      if (window.screen.width > 1200) {
        MouseFollower.registerGSAP(gsap);

        const cursor = new MouseFollower({
          container: "#__next",
          skewing: 0,
          skewingText: 0,
          skewingIcon: 0,
          skewingMedia: 0,
        });
        const update = (time, deltaTime, frame) => {
          lenis.raf(time * 1000);
        };

        const resize = (e) => {
          ScrollTrigger.refresh();
        };

        const lenis = new Lenis({
          duration: 2,
          lerp: 0.07,
          smoothWheel: true,
          // infinite:true
        });

        lenis.on(
          "scroll",
          ({ scroll, limit, velocity, direction, progress }) => {
            // ScrollTrigger.refresh();
            ScrollTrigger.update();
          }
        );

        gsap.ticker.add(update);
        scrollToTarget();
        Router.events.on("routeChangeStart", () => {
          setloaderOpen(true);
        });
        Router.events.on("routeChangeComplete", () => {
          ScrollTrigger.refresh();

          setTimeout(() => {
            setloaderOpen(false);
          }, 2000);
          ScrollTrigger.update();
          lenis.scrollTo("top");
          cursor.removeText();
          cursor.removeImg();
          cursor.removeIcon();
          scrollToTarget();
        });
        Router.events.on("routeChangeError", () => {});
        function scrollToTarget() {
          document.querySelectorAll(".scroll_to").forEach((element) => {
            element.addEventListener("click", function (e) {
              e.preventDefault();
              let target = document.getElementById(
                `${e.target.getAttribute("href").split("#")[1]}`
              );
              lenis.scrollTo(target, {
                duration: 1.5,
                // easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
                easing: (t) => 1 - Math.pow(1 - t, 4),
              });
            });
          });
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
        }
      }
      if (window.screen.width < 1200) {
        window.addEventListener("scroll", function () {
          if (window.scrollY > 20) {
            document.querySelector("body").classList.add("sticky_header");
          } else {
            document.querySelector("body").classList.remove("sticky_header");
          }
        });
        Router.events.on("routeChangeStart", () => {
          setloaderOpen(true);
        });
        Router.events.on("routeChangeComplete", () => {
          setTimeout(() => {
            setloaderOpen(false);
          }, 2000);
          // scrollToTarget();
        });
        Router.events.on("routeChangeError", () => {});
      }
    }
    return () => {};
  }, []);

  return (
    <>
      <Head>
        <link rel="favicon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      {/* <main data-scroll-containerr className="smoothScroller"> */}
      {/* <div className="scrollbar">
        <div className="inner">
          <div className="thumb" id="thumb"></div>
        </div>
      </div> */}
      <div
        className={
          loaderOpen == true ? "preloader" : "preloader preloader--loaded"
        }>
        <div className="preloader__inner">
          <div className="preloader__icon">
            <Image
              src="/logo/logo.svg"
              alt="pixelflames logo"
              width={120}
              height={130}
            />
          </div>
          <div className="preloader__progress_wrap">
            <span></span>
          </div>
        </div>
      </div>
      <Component {...pageProps} />
      {/* </main> */}
      {/* <Footer /> */}
    </>
  );
}
