/** @format */

import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useLayoutEffect } from "react";

const Footer = ({ data }) => {
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
        <footer
          data-scroll-section
          className={
            router.pathname.includes("contact") ||
            (router.pathname.includes("our-portfolio") &&
              !router.pathname.includes("[slug]")) ||
            (router.pathname.includes("services") &&
              !router.pathname.includes("[slug]"))
              ? "decorated__footer"
              : null
          }>
          <div className="container-fluid" data-scroll>
            <div className="footer_inner_wrap" data-scroll>
              <div className="row">
                <div className="col-12 col-xl-5 footer_top_left">
                  <div className="social_media_links" data-scroll>
                    <h4 data-scroll>{data?.attributes?.Social_media?.Title}</h4>
                    {data?.attributes?.Social_media?.Links && (
                      <ul>
                        {data?.attributes?.Social_media?.Links?.map(
                          (link, index) => {
                            return (
                              <li data-scroll key={index}>
                                <Link
                                  href={link?.Url != null ? link?.Url : "#"}>
                                  <Image
                                    src={link?.Icon?.data?.attributes?.url}
                                    alt={
                                      link?.Icon?.data?.attributes
                                        ?.alternativeText != null
                                        ? link?.Icon?.data?.attributes
                                            ?.alternativeText
                                        : "Social medi icon"
                                    }
                                    width={30}
                                    height={30}
                                    data-scroll
                                  />
                                </Link>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    )}
                  </div>
                  <div className="contact_pane_wrap" data-scroll>
                    <div className="logo_wrap" data-scroll>
                      <Image
                        src={
                          data?.attributes?.Footer_contact_bg?.data?.attributes
                            ?.url
                        }
                        alt={
                          data?.attributes?.Footer_contact_bg?.data?.attributes
                            ?.alternativeText != null
                            ? data?.attributes?.Footer_contact_bg?.data
                                ?.attributes?.alternativeText
                            : "image"
                        }
                        width={160}
                        height={160}
                        className="bg_image"
                      />
                      {/* <Image
                        src={data?.attributes?.}
                        alt="image"
                        width={42}
                        height={53}
                        className="brand_logo"
                      /> */}
                    </div>
                    {data?.attributes?.Footer_contact_icon && (
                      <Link
                        href={"/contact"}
                        className="contact-btn_wrap"
                        data-scroll
                        data-scroll-speed="1.4"
                        data-scroll-direction="horizontal">
                        <Image
                          src={
                            data?.attributes?.Footer_contact_icon?.data
                              ?.attributes?.url
                          }
                          alt={
                            data?.attributes?.Footer_contact_icon?.data
                              ?.attributes?.alternativeText != null
                              ? data?.attributes?.Footer_contact_icon?.data
                                  ?.attributes?.alternativeText
                              : "get in touch round animated text"
                          }
                          width={163}
                          height={163}
                        />
                        <div className="inner_wrap" data-scroll>
                          <svg
                            width="30"
                            height="31"
                            viewBox="0 0 30 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
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
                    )}
                  </div>
                </div>
                <div className="col-12 col-xl-7">
                  <div className="row">
                    {data?.attributes?.Addresses?.map((add, index) => {
                      return (
                        <div className="col-12 col-md-6" key={index}>
                          <address>
                            <h4>{add?.Name}</h4>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: add?.Address,
                              }}></p>
                          </address>
                        </div>
                      );
                    })}

                    <div className="col-12 footer_quick_links">
                      <div className="col-12 col-xl-2" data-scroll>
                        <h5 data-scroll>
                          {data?.attributes?.Quick_links_title}
                        </h5>
                      </div>
                      <div className="col-12 col-xl-10">
                        {data?.attributes?.Quick_links &&
                          data?.attributes?.Quick_links?.length > 0 && (
                            <ul className="footer_quick_links" data-scroll>
                              {data?.attributes?.Quick_links?.map(
                                (link, index) => {
                                  return (
                                    <li key={index}>
                                      <Link
                                        href={
                                          link?.Url != null ? link?.Url : "#"
                                        }
                                        data-scroll
                                        data-animate-text={link?.Text}>
                                        <span>{link?.Text}</span>
                                      </Link>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 bottom_booter">
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      {data?.attributes?.Footer_cta &&
                        data?.attributes?.Footer_cta?.length > 0 && (
                          <div className="footer_btn_wrapper" data-scroll>
                            {data?.attributes?.Footer_cta?.map(
                              (link, index) => {
                                return (
                                  <Link
                                    key={index}
                                    href={link?.Url != null ? link?.Url : "#"}
                                    className="cta_tertiary cta_light"
                                    data-scroll>
                                    <span>{link?.Text}</span>
                                  </Link>
                                );
                              }
                            )}
                          </div>
                        )}
                    </div>
                    <div
                      className="col-12 col-lg-6 d-flex align-items-end"
                      data-scroll>
                      <p data-scroll>
                        © {new Date().getFullYear()}{" "}
                        {data?.attributes?.Copy_right_text}
                      </p>
                    </div>
                  </div>
                  <div className="col-12 footer_text" data-scroll>
                    <span data-scroll>{data?.attributes?.Footer_text}</span>
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
