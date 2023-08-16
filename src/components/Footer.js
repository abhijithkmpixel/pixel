import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useLayoutEffect } from "react";

const Footer = () => {
  const router = useRouter();
  let ctx;
  useEffect(() => {
    if (typeof document != "undefined") {
      ctx = gsap.context(() => {
        let contactbtn = gsap.timeline();
        let contactbtnFooter = gsap.timeline();
        if (window.screen.width > 1200) {
          if (document.querySelector(".contact-btn_wrap")) {
            contactbtn.from(".contact-btn_wrap", {
              x: 150,
              scrollTrigger: {
                trigger: ".contact-btn_wrap",
                start: "0% 100%",
                end: "+=500",
                scrub: true,
              },
            });
          }
          // contactbtnFooter.from("footer .footer_inner_wrap .footer_text span", {
          //   scale: 1.5,
          //   scrollTrigger: {
          //     trigger: "footer .footer_inner_wrap .footer_text span",
          //     start: "0% 100%",
          //     end: "100% 100%",
          //     scrub: true,
          //   },
          // });
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
    <>
      {!router?.pathname.includes("cases") && (
        <footer data-scroll-section>
          <div className="container-fluid" data-scroll>
            <div className="footer_inner_wrap" data-scroll>
              <div className="row">
                <div className="col-12 col-xl-5 footer_top_left">
                  <div className="social_media_links" data-scroll>
                    <h4 data-scroll>Social</h4>
                    <ul>
                      <li data-scroll>
                        <Link href={"#"}>
                          <Image
                            src={"/uploads/facebook.png"}
                            alt="img"
                            width={30}
                            height={30}
                            data-scroll
                          />
                        </Link>
                      </li>
                      <li data-scroll>
                        <Link href={"#"}>
                          <Image
                            src={"/uploads/instagram.png"}
                            alt="img"
                            width={30}
                            height={30}
                            data-scroll
                          />
                        </Link>
                      </li>
                      <li data-scroll>
                        <Link href={""}>
                          <Image
                            src={"/uploads/linkedin.png"}
                            alt="img"
                            width={30}
                            height={30}
                            data-scroll
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="contact_pane_wrap" data-scroll>
                    <div className="logo_wrap" data-scroll>
                      <Image
                        src={"/uploads/foter.jpg"}
                        alt="image"
                        width={160}
                        height={160}
                        className="bg_image"
                      />
                      <Image
                        src={"/uploads/pixel.svg"}
                        alt="image"
                        width={42}
                        height={53}
                        className="brand_logo"
                      />
                    </div>
                    <Link
                      href={"#"}
                      className="contact-btn_wrap"
                      data-scroll
                      data-scroll-speed="1.4"
                      data-scroll-direction="horizontal"
                    >
                      <Image
                        src="/icons/circle.svg"
                        alt="image"
                        width={163}
                        height={163}
                      />
                      <div className="inner_wrap" data-scroll>
                        <svg
                          width="30"
                          height="31"
                          viewBox="0 0 30 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line
                            x1="8.33632"
                            y1="23.64"
                            x2="21.6823"
                            y2="7.73495"
                            stroke="#F0F0F0"
                            strokeWidth="0.698868"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.62708 8.57642L21.713 7.34395L22.9454 21.43"
                            stroke="#F0F0F0"
                            strokeWidth="0.698868"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-xl-7">
                  <div className="row footer_quick_links">
                    <div className="col-12 col-xl-2" data-scroll>
                      <h5 data-scroll>links</h5>
                    </div>
                    <div className="col-12 col-xl-10">
                      <ul className="footer_quick_links" data-scroll>
                        <li>
                          <Link
                            href="#"
                            data-scroll
                            data-animate-text="Web Development Services Company Dubai"
                          >
                            <span>Web Development Services Company Dubai</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            data-scroll
                            data-animate-text="Drupal for Web Development Dubai"
                          >
                            <span>Drupal for Web Development Dubai</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            data-scroll
                            data-animate-text="Ecommerce Site Developer Dubai"
                          >
                            <span>Ecommerce Site Developer Dubai</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            data-scroll
                            data-animate-text="Sitefinity Website Development Dubai"
                          >
                            <span>Sitefinity Website Development Dubai</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            data-scroll
                            data-animate-text="Newsletter Management Software Dubai"
                          >
                            <span>Newsletter Management Software Dubai</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12 bottom_booter">
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <div className="footer_btn_wrapper" data-scroll>
                        <Link
                          href="#"
                          className="cta_tertiary cta_light"
                          data-scroll
                        >
                          <span>About Us</span>
                        </Link>
                        <Link
                          href="#"
                          className="cta_tertiary cta_light"
                          data-scroll
                        >
                          <span>Career</span>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="col-12 col-lg-6 d-flex align-items-end"
                      data-scroll
                    >
                      <p data-scroll>
                        © 2023 Pixelflames Technologies Pvt Ltd | All Rights Reserved.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 footer_text" data-scroll>
                    <span data-scroll>Get in Touch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
