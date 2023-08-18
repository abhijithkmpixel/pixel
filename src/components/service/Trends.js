/** @format */

import React from "react";
import Slider from "react-slick";

const Trends = ({ title, body }) => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    autoplay: false,
    autoplayScpped: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 5000,
        settings: "unslick",
      },
      {
        breakpoint: 720,
        settings: {
          settings: "slick",
          useTransform: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  };
  return (
    <section className="development__trends">
      <div className="container-fluid">
        <h2 className="title__secondary">{title}</h2>
        <div className="development__trends__grid">
          <div className=" row">
            <div className="col-12 col-lg-3"></div>
            <div className="col-12 col-lg-9">
              {body && body?.length > 0 && (
                <Slider
                  {...settings}
                  className="row development__trends__grid__cards__wrap">
                  {body?.map((cnt, index) => {
                    return (
                      <div className="col-12 col-md-6 " key={index}>
                        <div className="development__trends__grid__card">
                          <h3>{cnt?.Title}</h3>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: cnt?.Description,
                            }}></div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              )}
            </div>
          </div>
        </div>
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
export default Trends;
