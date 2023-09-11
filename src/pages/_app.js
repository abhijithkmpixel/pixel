/** @format */

import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/styles/app.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
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
import Context, { PrevPage } from "../../context/prevPage";
import { useCookies } from "react-cookie";
import $ from "jquery";
import ChatBotApp from "@/components/ChatBotApp";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loaderOpen, setloaderOpen] = useState(true);
  const [cookieOpen, setcookieOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["COOKIE_POLICY"]);
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };
    if (cookies?.COOKIE_POLICY != true) {
      setcookieOpen(true);
    } else {
      setcookieOpen(false);
    }
    setTimeout(() => {
      setloaderOpen(false);
    }, 3000);
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };

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
          // ease: "none",
        });

        const resize = (e) => {
          ScrollTrigger.refresh();
        };
        var isSafari = /^((?!chrome|android).)*safari/i.test(
          navigator.userAgent
        );

        if (!isSafari) {
          // console.log("Browser is not Safari");
          const update = (time, deltaTime, frame) => {
            lenis.raf(time * 1000);
          };
          const lenis = new Lenis({
            duration: 2,
            lerp: 0.07,
            smoothWheel: true,
            wheelMultiplier: 1.5,
            // wrapper: document.querySelector("main"),
            // content: document.querySelector(".scroll__container__inner"),
            wheelEventsTarget: document.querySelector("main"),
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
        }

        scrollToTarget();
        Router.events.on("routeChangeStart", () => {
          setloaderOpen(true);
          ScrollTrigger.refresh();
        });
        Router.events.on("routeChangeComplete", () => {
          setTimeout(() => {
            ScrollTrigger.refresh();
            setloaderOpen(false);
            ScrollTrigger.update();
          }, 1000);

          // if (!isSafari) {
          //   lenis.scrollTo("top");
          // }
          // window.scrollTo(0, 0);
          cursor.removeText();
          cursor.removeImg();
          cursor.removeIcon();
          document
            .querySelector("body")
            .classList.remove("quick__links--enter");
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
              if (!isSafari) {
                // lenis.scrollTo(target, {
                //   duration: 1.5,
                //   // easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
                //   easing: (t) => 1 - Math.pow(1 - t, 4),
                // });
                // var scrollElm = document.getElementById(`${id}`);
                let top = target.offsetTop;
                window.scrollTo({
                  top: top - 0,
                  behavior: "smooth",
                });
              }
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
          }, 1000);
          document.querySelector("body").classList.remove("overflow-hidden");

          // scrollToTarget();
        });
        Router.events.on("routeChangeError", () => {});
      }
    }
    return () => {};
  }, []);
  // function closeCookiePolicyPopup() {
  //   setCookies({}, "SETCOOKIE", true);
  // }
  function acceptAllCookies() {
    setCookie("COOKIE_POLICY", true);
    document.querySelector(".cookie__policy__popup").style.transform =
      " translate(-50%,500px)";
    setTimeout(() => {
      setcookieOpen(false);
    }, 2000);
  }
  return (
    <>
      <Head>
        <link rel="favicon" href="/favicon.ico" />
      </Head>
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
              src="/logo/p-dark.png"
              alt="pixelflames logo"
              width={120}
              height={130}
              priority
            />
          </div>
          <div className="preloader__progress_wrap">
            <span></span>
          </div>
        </div>
      </div>
      {cookieOpen == true && (
        <div className="cookie__policy__popup">
          <div className="popup_content__wrap">
            <h5>
              By using our website, you consent to the use of cookies as
              described in this Cookie Policy.
            </h5>
            <button className="cta_primary cta_drk" onClick={acceptAllCookies}>
              <span>Accept All</span>
            </button>
          </div>
        </div>
      )}
      <Context>
        <ChatBotApp />
        <main className="scroll__container">
          <Component {...pageProps} key={router.asPath} />
        </main>
      </Context>
    </>
  );
}
