import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  if (typeof document != "undefined") {
    let hamburgerMenuLinks = document.querySelectorAll(
      ".main_menu .link_wrap > a"
    );
    hamburgerMenuLinks.forEach((elm, index) => {
      elm.addEventListener("mouseover", function () {
        hamburgerMenuLinks.forEach((elm, index) => {
          elm.closest(".link_wrap").classList.remove("mouseOver");
        });
        // elm.classList.add("mouseOver");
        elm.closest(".link_wrap").classList.add("mouseOver");
      });
    });
    document
      .querySelector(".main_menu")
      .addEventListener("mouseleave", function () {
        hamburgerMenuLinks.forEach((elm, index) => {
          elm.closest(".link_wrap").classList.remove("mouseOver");
        });
      });
    document
      .querySelector(".menu_icon_wrap")
      .addEventListener("click", function () {
        document.querySelector("body").classList.add("desktop_menu_open");
      });
    document
      .querySelector(".desktop_menu .close_menu")
      .addEventListener("click", function () {
        document.querySelector("body").classList.remove("desktop_menu_open");
      });
  }

  return (
    <>
      <header data-scroll-section>
        <div className="header_inner_wrap" data-scroll>
          <Link href={"/"} className="brand_logo" data-scroll>
            <Image
              src={"/logo/pixellogo.png"}
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
            data-cursor-text=" "
          >
            <span>Menu+</span>
            <ul id="stick-me">
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </header>
      <div className="desktop_menu">
        <Image
          src="/uploads/menubg.png"
          width={1920}
          height={1080}
          alt="menu image"
        />
        <button className="close_menu">
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
              stroke-width="1.2"
              stroke-linecap="round"
            />
            <line
              x1="17.5798"
              y1="52.0804"
              x2="52.3147"
              y2="17.8032"
              stroke="white"
              stroke-width="1.2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div className="menu_inner_wrap">
          <ul className="main_menu">
            <li>
              <div className="nav_item_wrap">
                <div className="link_wrap">
                  <a href="#">
                    <span>01</span>Home
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="nav_item_wrap">
                <div className="link_wrap">
                  <a href="#">
                    <span>02</span>about us
                  </a>
                </div>
                <ul className="sub_menu">
                  <li>
                    <a href="#">link1</a>
                  </li>
                  <li>
                    <a href="#">link2</a>
                  </li>
                  <li>
                    <a href="#">e-commerce</a>
                  </li>
                  <li>
                    <a href="#"> management</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="nav_item_wrap">
                <div className="link_wrap">
                  <a href="#">
                    <span>03</span>services
                  </a>
                </div>
                <ul className="sub_menu">
                  <li>
                    <a href="#">web development</a>
                  </li>
                  <li>
                    <a href="#">mobile app development</a>
                  </li>
                  <li>
                    <a href="#">e-commerce development</a>
                  </li>
                  <li>
                    <a href="#">website management</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="nav_item_wrap">
                <div className="link_wrap">
                  <a href="#">
                    <span>04</span>our works
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="nav_item_wrap">
                <div className="link_wrap">
                  <a href="#">
                    <span>05</span>contact
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <ul className="social_menia_links">
            <li>
              <a href="#">
                <Image src="/uploads/fb.png" width={50} height={50} alt="" />
                pixelflamesdigital
              </a>
            </li>
            <li>
              <a href="#">
                <Image src="/uploads/ins.png" width={50} height={50} alt="" />
                pixelflamesdigital
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
