/** @format */

import React from "react";
import Image from "next/image";
import Slider from "react-slick";

const Testimonials = ({ data }) => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  var settings2 = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 2500,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: 4,
    variableWidth: true,
    cssEase: "linear",
    slidesToScroll: -1,
    // rtl: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    // useTransform: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          // slidesToScroll: -1
        },
      },
    ],
  };
  var settings3 = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 2500,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: 4,
    variableWidth: true,
    cssEase: "linear",
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
    // useTransform: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          // slidesToScroll: 1
        },
      },
    ],
  };
  return (
    <section className="client_testimonials" data-scroll-section>
      <div className="container-fluid">
        <div className="client_testimonials_wrapper" data-scroll>
          <h2
            className="title_primary"
            data-scroll
            dangerouslySetInnerHTML={{ __html: data?.Title }}></h2>
          <div
            className="testimony_slider_wrap"
            data-scroll
            data-scroll-offset="200">
            {data?.Testimonials?.data &&
              data?.Testimonials?.data?.length > 0 && (
                <Slider {...settings} className="testimony_slider" data-scroll>
                  {data?.Testimonials?.data?.map((test, index) => {
                    return (
                      <div className="testimony_wrap" data-scroll key={index}>
                        <div className="bodycopy" data-scroll>
                          <p>
                            <Image
                              src={
                                test?.attributes?.Profile_image?.data
                                  ?.attributes?.url
                              }
                              alt={
                                test?.attributes?.Profile_image?.data
                                  ?.attributes?.alternativeText != null
                                  ? test?.attributes?.Profile_image?.data
                                      ?.attributes?.alternativeText
                                  : test?.attributes?.Name
                              }
                              width={144}
                              height={54}
                              data-scroll
                            />
                            {test?.attributes?.Testimony_body}
                          </p>
                        </div>

                        <h5 data-scroll>{test?.attributes?.Name}</h5>
                        <span data-scroll>{test?.attributes?.Designation}</span>
                      </div>
                    );
                  })}
                </Slider>
              )}
          </div>
        </div>
      </div>
      <div className="clients_sliders_wrap">
        {data?.Logo_slider1 && data?.Logo_slider1.Image?.data?.length > 0 && (
          <Slider {...settings2} className="clients_slider">
            {data?.Logo_slider1.Image?.data?.map((img, index) => {
              return (
                <div className="client" key={index}>
                  <Image
                    src={img?.attributes?.url}
                    alt={
                      img?.attributes?.alternativeText != null
                        ? img?.attributes?.alternativeText
                        : ""
                    }
                    width={250}
                    height={70}
                  />
                </div>
              );
            })}
          </Slider>
        )}
        {data?.Logo_slider2 && data?.Logo_slider2.Image?.data?.length > 0 && (
          <Slider {...settings3} className="clients_slider">
            {data?.Logo_slider2.Image?.data?.map((img, index) => {
              return (
                <div className="client" key={index}>
                  <Image
                    src={img?.attributes?.url}
                    alt={
                      img?.attributes?.alternativeText != null
                        ? img?.attributes?.alternativeText
                        : ""
                    }
                    width={250}
                    height={70}
                  />
                </div>
              );
            })}
          </Slider>
        )}
      </div>
    </section>
  );
};

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button className={"slick-arrow slick-next"} onClick={onClick}>
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
  const { onClick } = props;
  return (
    <button className={"slick-arrow slick-prev"} onClick={onClick}>
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

export default Testimonials;
