import React from "react";
import Slider from "react-slick";

const Trends = () => {
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
        <h2 className="title__secondary">Web Development Trends</h2>
        <div className="development__trends__grid">
          <div className=" row">
            <div className="col-12 col-lg-3"></div>
            <div className="col-12 col-lg-9">
              <Slider
                {...settings}
                className="row development__trends__grid__cards__wrap"
              >
                <div className="col-12 col-md-6 ">
                  <div className="development__trends__grid__card">
                    <h3>Progressive Web Applications (PWAs)</h3>
                    <p>
                      PWAs are web applications that provide a native app-like
                      experience to users by utilizing modern web technologies.
                      They offer features such as push notifications
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="development__trends__grid__card">
                    <h3>No Code Development</h3>
                    <p>
                      No-code website development is a way of building websites
                      without the need for coding or programming knowledge.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="development__trends__grid__card">
                    <h3>Voice User Interface (VUI)</h3>
                    <p>
                      VUI involves integrating voice-activated features into
                      websites, allowing users to interact with the site using
                      their voice.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="development__trends__grid__card">
                    <h3>Single Page Applications (SPAs)</h3>
                    <p>
                      SPAs are web applications that load a single HTML page and
                      dynamically update the content as users interact with the
                      site.
                    </p>
                  </div>
                </div>
              </Slider>
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
        xmlns="http://www.w3.org/2000/svg"
      >
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
        xmlns="http://www.w3.org/2000/svg"
      >
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
