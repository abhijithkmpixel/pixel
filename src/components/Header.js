/** @format */

import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [navOpen, setnavOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (typeof document != "undefined") {
      if (window.screen.width > 1200) {
        window.addEventListener("scroll", scrollingFn);
      }

      document
        .querySelector(".hamburger__menu__icon")
        .addEventListener("click", hamburger__menu__icon);

      document
        .querySelector(".desktop__menu__toggle")
        .addEventListener("click", desktop__menu__toggle);

      document
        .querySelectorAll(".desktop_menu .main_menu li a")
        .forEach((element) => {
          element.addEventListener("click", function (e) {
            setnavOpen(false);
            document.querySelectorAll(".submenu_wrap").forEach((el) => {
              el.classList.remove("subnavopen");
            });
            document.querySelectorAll(".mouseOver").forEach((element) => {
              element.classList.remove("mouseOver");
            });
          });
        });
      let hamburgerMenuLinks = document.querySelectorAll(
        ".main_menu .link_wrap > a"
      );
      hamburgerMenuLinks.forEach((elm, index) => {
        elm.addEventListener("mouseover", function () {
          hamburgerMenuLinks.forEach((elm, index) => {
            elm.closest(".link_wrap").classList.remove("mouseOver");
          });
          elm.closest(".link_wrap").classList.add("mouseOver");
        });
      });
      if (document.querySelector(".main_menu")) {
        document
          .querySelector(".main_menu")
          .addEventListener("mouseleave", function () {
            hamburgerMenuLinks.forEach((elm, index) => {
              elm.closest(".link_wrap").classList.remove("mouseOver");
            });
          });
      }
      if (document.querySelector(".menu_icon_wrap")) {
        document
          .querySelector(".menu_icon_wrap")
          .addEventListener("click", desktopIcons);
      }

      if (window.screen.width < 720) {
        document.querySelectorAll(".submenu_wrap").forEach((menu) => {
          // menu.addEventListener("click", subNavClose(menu));
          menu.addEventListener("click", function () {
            if (document.querySelector("subnavopen")) {
              document.querySelectorAll(".submenu_wrap").forEach((el) => {
                el.classList.remove("subnavopen");
              });
            }
            if (menu.classList.contains("subnavopen")) {
              menu.classList.remove("subnavopen");
            } else {
              menu.classList.add("subnavopen");
            }
          });
        });
      }
    }

    return () => {
      document
        .querySelector(".desktop__menu__toggle")
        .removeEventListener("click", desktop__menu__toggle);
      document
        .querySelector(".hamburger__menu__icon")
        .removeEventListener("click", hamburger__menu__icon);
      document
        .querySelector(".menu_icon_wrap")
        .removeEventListener("click", desktopIcons);
      window.removeEventListener("scroll", scrollingFn);
      // document
      //   .querySelector(".hamburger__menu__icon")
      //   .removeEventListener("click", subNavClose);
    };
  }, [navOpen]);
  function desktop__menu__toggle() {
    if (navOpen == true) {
      setnavOpen(false);
      document.querySelectorAll(".submenu_wrap").forEach((el) => {
        el.classList.remove("subnavopen");
      });
    } else {
      setnavOpen(true);
    }
  }
  function hamburger__menu__icon() {
    if (navOpen == true) {
      setnavOpen(false);
      document.querySelectorAll(".submenu_wrap").forEach((el) => {
        el.classList.remove("subnavopen");
      });
    } else {
      setnavOpen(true);
    }
  }
  function scrollingFn() {
    if (router.pathname == "/") {
      let length = document.querySelectorAll(
        ".quick_links_wrap:not(.banner_slider_wrap) .quick_link"
      ).length;
      let scrollLength = 600 * (length - 2);
      if (window.scrollY > scrollLength + 500) {
        document.querySelector("body").classList.add("desktop_sticky");
      } else {
        document.querySelector("body").classList.remove("desktop_sticky");
      }
    } else {
      if (window.scrollY > 300) {
        document.querySelector("body").classList.add("desktop_sticky");
      } else {
        document.querySelector("body").classList.remove("desktop_sticky");
      }
    }
  }
  function desktopIcons() {
    setnavOpen(true);
  }
  // function subNavClose(menu) {
  //   if (document.querySelector("subnavopen")) {
  //     document.querySelectorAll(".submenu_wrap").forEach((el) => {
  //       el.classList.remove("subnavopen");
  //     });
  //   }
  //   if (menu.classList.contains("subnavopen")) {
  //     menu.classList.remove("subnavopen");
  //   } else {
  //     menu.classList.add("subnavopen");
  //   }
  // }
  return (
    <>
      <header
        data-scroll-section
        className={
          (router.pathname.includes("our-portfolio") ||
          router.pathname.includes("services") ||
          router.pathname.includes("contact")
            ? " header--light "
            : null) +
          (router.pathname.includes("[slug]") &&
          router.pathname.includes("our-portfolio")
            ? " portfolio__details__page "
            : null) +
          (router.pathname.includes("[slug]") &&
          router.pathname.includes("services")
            ? " services__detail__page "
            : null)
        }>
        <div className="header_inner_wrap" data-scroll>
          <Link href={"/"} className="brand_logo">
            <Image
              src={"/logo/pixellogo.svg"}
              width={160}
              height={38}
              alt="Pixelflames logo"
              data-scroll
            />
          </Link>
          <Link href={"/"} className="brand_logo  brand_logo--white">
            <Image
              src={"/logo/pixellogo-white.svg"}
              width={160}
              height={38}
              alt="Pixelflames logo"
              data-scroll
            />
          </Link>
          <div
            className="menu_icon_wrap"
            data-scroll
            data-cursor-stick="#stick-me"
            data-cursor-text=" ">
            <span>Menu+</span>
            <ul id="stick-me">
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </header>
      <div
        className={
          navOpen == true ? "desktop_menu desktop_menu_open" : "desktop_menu"
        }>
        <Image
          src="/uploads/menubg.png"
          width={1920}
          height={1080}
          alt="menu image"
        />

        {/* <button className="close_menu">
          <svg
            width="71"
            height="71"
            viewBox="0 0 71 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="18.6578"
              y1="17.551"
              x2="52.935"
              y2="52.2859"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="17.5798"
              y1="52.0804"
              x2="52.3147"
              y2="17.8032"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </button> */}
        <div className="menu_inner_wrap">
          <ul className="main_menu">
            <li>
              <div className="nav_item_wrap">
                <div className="link_wrap">
                  <Link href="/">
                    <span>01</span>Home
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="nav_item_wrap submenu_wrap">
                <div className="link_wrap">
                  <Link href="#">
                    <span>02</span>about us
                  </Link>
                </div>
                <ul className="sub_menu">
                  <li>
                    <Link href="#">link1</Link>
                  </li>
                  <li>
                    <Link href="#">link2</Link>
                  </li>
                  <li>
                    <Link href="#">e-commerce</Link>
                  </li>
                  <li>
                    <Link href="#"> management</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="nav_item_wrap submenu_wrap">
                <div className="link_wrap">
                  <Link href="/services">
                    <span>03</span>services
                  </Link>
                </div>
                <ul className="sub_menu">
                  <li>
                    <Link href="/services/web">web development</Link>
                  </li>
                  <li>
                    <Link href="/services/web">mobile app development</Link>
                  </li>
                  <li>
                    <Link href="/services/web">e-commerce development</Link>
                  </li>
                  <li>
                    <Link href="/services/web">website management</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="nav_item_wrap">
                <div className="link_wrap">
                  <Link href="/our-portfolio">
                    <span>04</span>our works
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="nav_item_wrap">
                <div className="link_wrap">
                  <Link href="/contact">
                    <span>05</span>contact
                  </Link>
                </div>
              </div>
            </li>
          </ul>
          <ul className="social_menia_links">
            <li>
              <Link href="#">
                <Image src="/uploads/fb.png" width={50} height={50} alt="" />
                pixelflamesdigital
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src="/uploads/ins.png" width={50} height={50} alt="" />
                pixelflamesdigital
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <ul
        className={
          navOpen == true
            ? "hamburger__menu__icon open"
            : "hamburger__menu__icon"
        }>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="sticky__sidebar">
        <div
          className={
            navOpen == true
              ? "desktop__menu__toggle open"
              : "desktop__menu__toggle"
          }>
          <ul>
            <li></li>
            <li></li>
          </ul>
          <span>{navOpen == true ? "CLOSE" : "MENU+"}</span>
        </div>
        <Link href={"/contact"} className={"desktop__menu__toggle"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-telephone"
            viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
          </svg>
          <span>Contact</span>
        </Link>
        <Link
          href={"https://wa.me/+918086007607"}
          target="_blank"
          className={"desktop__menu__toggle"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-whatsapp"
            viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
          <span>Whatsapp</span>
        </Link>
      </div>
    </>
  );
};

export default Header;
