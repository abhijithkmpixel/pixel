/** @format */

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NextProject from "@/components/portfolio/NextProject";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import GsapMagnetic from "../../components/gsap";
import axios from "axios";
import HeadComponent from "@/components/HeadComponent";
import { PrevPage } from "../../../context/prevPage";
import ErrorMsg from "@/components/ErrorMsg";
import Slider from "react-slick";
// import { truncat } from "../../../lib/truncat";
import { message } from "antd";

const ProductPage = ({ data, footer, header }) => {
  const { prevPageSLug, setprevPageSLug } = useContext(PrevPage);
  const [isClient, setisClient] = useState(false);
  const [formOpen, setformOpen] = useState(false);
  const [formLoading, setformLoading] = useState(false);
  const [formError, setformError] = useState(null);
  const userName = useRef();
  const userEmail = useRef();
  const userMsg = useRef();
  let index = 1;

  const router = useRouter();
  useEffect(() => {
    let next;

    setisClient(true);

    return () => {};
  }, []);
  var settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: "unslick",
      },
    ],
  };

  const truncat = (text) => {
    let textLength = text.length;
    if (typeof document != "undefined") {
      if (textLength > 14 && window?.screen?.width > 1200 && !/\s/.test(text)) {
        if (window?.screen?.width > 1450) {
          let first = text.slice(0, 13);
          let last = text.slice(13, textLength);

          return first + " - " + last;
        } else {
          let first = text.slice(0, 10);
          let last = text.slice(10, textLength);
          return first + " - " + last;
        }
      } else {
        return text;
      }
    }
  };
  const openDemoForm = () => {
    setformOpen(formOpen == true ? false : true);
  };
  const handleDemoFormSubmit = async (e) => {
    e.preventDefault();
    setformError(null);
    setformLoading(true);
    userName.current.classList = "";
    userEmail.current.classList = "";
    const values = {
      name: userName.current.value,
      email: userEmail.current.value,
      message: userMsg.current.value,
    };
    if (userName.current.value == "") {
      setformError("Please input name");
      userName.current.classList = "error";
    } else if (userName.current.value.length < 3) {
      setformError("Minimum character length for name is 3");
      userName.current.classList = "error";
    } else if (userEmail.current.value == "") {
      setformError("Please input email");
      userEmail.current.classList = "error";
    } else if (
      !/^([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63})$/i.test(
        userEmail.current.value
      )
    ) {
      userEmail.current.classList = "error";

      setformError("Please enter a valid email");
    } else {
      const sendMail = await axios
        .post(`/api/scheduledemo`, { values })
        .then(function (response) {
          // handle success
          return response?.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      message.success({
        content: sendMail?.message,
        style: {
          marginTop: "10vh",
        },
        duration: 5,
      });
      userName.current.value = "";
      userEmail.current.value = "";
      userMsg.current.value = "";
      setformOpen(false);
    }
    setformLoading(false);
  };
  return (
    <>
      <HeadComponent data={data?.attributes?.seo} />
      <Header data={header} />
      {data != null && (
        <>
          <div
            onClick={openDemoForm}
            className={
              formOpen == true ? "form__overlay overlayOpen" : "form__overlay"
            }></div>
          <div
            className={
              formOpen == true
                ? "schedule__demo__contact__form formOpen"
                : "schedule__demo__contact__form"
            }>
            <h5>
              Let's talk?{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
                onClick={openDemoForm}>
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </h5>
            <form onSubmit={(e) => handleDemoFormSubmit(e)}>
              <fieldset>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  ref={userName}
                  placeholder="Name"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  ref={userEmail}
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  ref={userMsg}
                  placeholder="Message"
                  rows="10"></textarea>
              </fieldset>
              <fieldset>
                {formError && <p className="error">{formError}</p>}
                <button
                  className="cta_primary cta_drk"
                  type="submit"
                  title={"Send"}
                  disabled={formLoading}>
                  {" "}
                  <span className="d-flex align-items-center">
                    Send
                    {formLoading && (
                      <div
                        className="spinner-border spinner-border-sm text-light ms-2"
                        role="status"></div>
                    )}
                  </span>{" "}
                </button>
              </fieldset>
            </form>
          </div>
          <section className="portfolio_details">
            <div className="row portfolio_details__row">
              <div className="col-xl-6 col-12">
                {data?.attributes?.Images &&
                  data?.attributes?.Images?.data?.length > 0 && (
                    <>
                      {data?.attributes?.Images?.data?.map((img, index) => {
                        return (
                          <div className="img_wrap" key={index}>
                            <Image
                              src={img?.attributes?.url}
                              priority={true}
                              alt={
                                img?.attributes?.alternativeText != null
                                  ? img?.attributes?.alternativeText
                                  : "portfoli_image"
                              }
                              width={1200}
                              height={1080}
                            />
                          </div>
                        );
                      })}
                    </>
                  )}
                {data?.attributes?.Images_slider?.data != null && (
                  <Slider
                    {...settings}
                    className="img_wrap img_wrap--slider"
                    key={index}>
                    {data?.attributes?.Images_slider?.data?.map(
                      (img, index) => {
                        return (
                          <Image
                            src={img?.attributes?.url}
                            priority={true}
                            key={index}
                            alt={
                              img?.attributes?.alternativeText != null
                                ? img?.attributes?.alternativeText
                                : "portfoli_image"
                            }
                            width={1200}
                            height={1080}
                          />
                        );
                      }
                    )}
                  </Slider>
                )}
              </div>
              <div className="col-xl-6 col-12 d-flex- flex-column- justify-content-between- portfolio__content__holder__wrap">
                {/* <Link
                  className="btn-bck"
                  aria-label={"go back to portfolio listing page"}
                  href="/our-portfolio">
                  <svg
                    width="40"
                    height="13"
                    viewBox="0 0 40 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.68535 0.155718C6.89524 0.365599 6.88847 0.697347 6.68535 0.920768L2.18952 5.9579L38.9593 5.66001C39.2572 5.66001 39.501 5.90374 39.501 6.20164C39.501 6.49953 39.2572 6.74326 38.9593 6.74326L2.18952 7.04116L6.67858 12.0783C6.87494 12.3085 6.89524 12.6267 6.68535 12.8366C6.47545 13.0465 6.10983 13.06 5.91348 12.8433C5.91348 12.8433 0.550976 6.95314 0.496811 6.88544C0.442646 6.81774 0.334312 6.69587 0.334312 6.49953C0.334312 6.30319 0.442646 6.16778 0.496811 6.11362C0.550976 6.05946 5.91348 0.155718 5.91348 0.155718C6.01504 0.054163 6.15723 0 6.29942 0C6.4416 0 6.57701 0.054163 6.68535 0.155718Z"
                      fill="black"
                    />
                  </svg>

                  <span>Back to the List</span>
                </Link> */}
                <div className="content_holder">
                  <div className="case__banner">
                    <div className="case__banner__inner">
                      {/* <Link
                        className="btn-bck"
                        aria-label={"go back to portfolio listing page"}
                        href="/our-portfolio">
                        <svg
                          width="40"
                          height="13"
                          viewBox="0 0 40 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6.68535 0.155718C6.89524 0.365599 6.88847 0.697347 6.68535 0.920768L2.18952 5.9579L38.9593 5.66001C39.2572 5.66001 39.501 5.90374 39.501 6.20164C39.501 6.49953 39.2572 6.74326 38.9593 6.74326L2.18952 7.04116L6.67858 12.0783C6.87494 12.3085 6.89524 12.6267 6.68535 12.8366C6.47545 13.0465 6.10983 13.06 5.91348 12.8433C5.91348 12.8433 0.550976 6.95314 0.496811 6.88544C0.442646 6.81774 0.334312 6.69587 0.334312 6.49953C0.334312 6.30319 0.442646 6.16778 0.496811 6.11362C0.550976 6.05946 5.91348 0.155718 5.91348 0.155718C6.01504 0.054163 6.15723 0 6.29942 0C6.4416 0 6.57701 0.054163 6.68535 0.155718Z"
                            fill="black"
                          />
                        </svg>

                        <span>Back to the List</span>
                      </Link> */}
                      <h1 className="title_primary">
                        {isClient == true
                          ? truncat(data?.attributes?.Name)
                          : data?.attributes?.Name}
                      </h1>
                    </div>
                    <Image
                      src={
                        data?.attributes?.Mobile_banner_image?.data?.attributes
                          ?.url
                      }
                      priority={true}
                      alt={
                        data?.attributes?.Mobile_banner_image?.data?.attributes
                          ?.alternativeText != null
                          ? data?.attributes?.Mobile_banner_image?.data
                              ?.attributes?.alternativeText
                          : data?.attributes?.Name
                      }
                      width={1200}
                      height={500}
                    />
                  </div>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.attributes?.Bodycopy,
                    }}></div>
                  <div className="button_year_wrap">
                    {/* {data?.attributes?.Live_url &&
                      data?.attributes?.Live_url != null && ( */}
                    <button
                      aria-label={"Schedule a demo"}
                      className="cta_primary mt-4"
                      onClick={openDemoForm}>
                      <span>{"Schedule a demo"}</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <line
                          x1="4.31389"
                          y1="12.2781"
                          x2="11.2333"
                          y2="4.03194"
                          stroke="#181818"
                          strokeWidth="0.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.21547 4.09155L11.7401 3.43318L12.3985 10.9579"
                          stroke="#181818"
                          strokeWidth="0.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {/* // )} */}
                    {/* <p>{data?.attributes?.Year}</p> */}
                  </div>
                  {/* <div
                    className="project_technology"
                    dangerouslySetInnerHTML={{
                      __html: data?.attributes?.Technology_used,
                    }}></div>
                  <div
                    className="project_technology"
                    dangerouslySetInnerHTML={{
                      __html: data?.attributes?.Services_used,
                    }}></div> */}
                  {prevPageSLug == "/" && (
                    <GsapMagnetic>
                      <Link
                        aria-label={"homepage link"}
                        className="cta_secondary"
                        href="/">
                        <span>Home</span>
                      </Link>
                    </GsapMagnetic>
                  )}
                </div>
                {/* <div className="min_1200">
                  {nextProject && <NextProject data={nextProject} />}
                </div> */}
              </div>
            </div>
          </section>
          {/* <div className="max_1200">
            <div className="container-fluid">
              {nextProject && <NextProject data={nextProject} />}
            </div>
          </div> */}
        </>
      )}
      {data == null && (
        <ErrorMsg
          errerCode="500"
          errorMsg="Internal Server Error"
          // button={{ link: "/", text: "Homepage" }}
        />
      )}
      <Footer data={footer} />
    </>
  );
};
export default ProductPage;
export async function getServerSideProps(context) {
  const { params } = context;

  const data = await axios
    .get(`${process.env.DOMAIN_URL}/api/product?slug=${params.slug}`)
    .then(function (response) {
      // handle success
      return response?.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  return {
    props: {
      data:
        Object.keys(data).length > 0
          ? data?.data && data?.data !== null
            ? data?.data[0]
            : null
          : null,
      header:
        Object.keys(data).length > 0
          ? data?.header && data?.header !== null
            ? data?.header
            : null
          : null,
      footer:
        Object.keys(data).length > 0
          ? data?.footer && data?.footer !== null
            ? data?.footer
            : null
          : null,
    }, // will be passed to the page component as props
  };
}

function SampleNextArrow(props) {
  const { onClick, className } = props;
  return (
    <button
      className={className + " slick_arrow slick_next"}
      aria-label="Next slide"
      title="next"
      onClick={onClick}>
      <svg
        width="28"
        height="16"
        viewBox="0 0 28 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <line
          x1="0.684881"
          y1="8.15252"
          x2="26.0974"
          y2="8.15252"
          stroke="#181818"
          strokeWidth="1.36976"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.833 1L26.7828 7.99995L19.833 15"
          stroke="#181818"
          strokeWidth="1.36976"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick, className } = props;
  return (
    <button
      className={className + " slick_arrow slick_prev"}
      title="previous"
      aria-label="previous slide"
      onClick={onClick}>
      <svg
        width="28"
        height="16"
        viewBox="0 0 28 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <line
          x1="0.684881"
          y1="-0.684881"
          x2="26.0974"
          y2="-0.684881"
          transform="matrix(-1 0 0 1 27.7827 8.8374)"
          stroke="#181818"
          strokeWidth="1.36976"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.94971 1L0.999961 7.99995L7.94971 15"
          stroke="#181818"
          strokeWidth="1.36976"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
