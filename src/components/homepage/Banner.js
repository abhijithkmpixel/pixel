import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Slider from "react-slick";

const Banner = () => {
  // useEffect(() => {
  //   return () => {};
  // }, []);

  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    autoplayScpped: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
    variableWidth: true,
    useTransform: false,
    responsive: [
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <section className="hero_banner" data-scroll-section id="banner">
      <div
        className="hero_container"
        data-scroll-sticky
        data-scroll-target="#banner"
        data-scroll
      >
        <div className="herobanner_inner_wrap" data-scroll>
          <div className="banner_head" data-scroll>
            <div className="content_wrap" data-scroll>
              <h1 data-scroll>
                we are <br />
                <span
                  id="textOut"
                  data-animator-text="Design,digital"
                ></span>agency<span>.</span>
              </h1>
              <Link href={"#"} className="cta_primary" data-scroll>
                book a meeting
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
              </Link>
            </div>
          </div>
          <div className="quick_links_wrap" data-scroll>
            <div className="hero_quick_links" data-scroll>
              <Link
                href={"#"}
                className="quick_link"
                data-cursor-img="/icons/quicklink.svg"
              >
                <div className="wrapper">
                  <Image
                    src={"/uploads/burj.png"}
                    width={400}
                    height={500}
                    alt=""
                    priority
                  />
                  <div className="link_footer">
                    <span>01</span>
                    <h4>Burj Khalifa</h4>
                    <h5>Web development</h5>
                  </div>
                </div>
              </Link>
              <Link
                href={"#"}
                className="quick_link"
                data-cursor-img="/icons/quicklink.svg"
              >
                <div className="wrapper">
                  <Image
                    src={"/uploads/afc.png"}
                    width={400}
                    height={500}
                    alt=""
                    priority
                  />
                  <div className="link_footer">
                    <span>02</span>
                    <h4>Afc President</h4>
                    <h5>Web development</h5>
                  </div>
                </div>
              </Link>
              <Link
                href={"#"}
                className="quick_link"
                data-cursor-img="/icons/quicklink.svg"
              >
                <div className="wrapper">
                  <Image
                    src={"/uploads/lady.png"}
                    width={400}
                    height={500}
                    alt=""
                    priority
                  />
                  <div className="link_footer">
                    <span>03</span>
                    <h4>Afc President</h4>
                    <h5>Web development</h5>
                  </div>
                </div>
              </Link>
              <Link
                href={"#"}
                className="quick_link"
                data-cursor-img="/icons/quicklink.svg"
              >
                <div className="wrapper">
                  <Image
                    src={"/uploads/afc.png"}
                    width={400}
                    height={500}
                    alt=""
                    priority
                  />
                  <div className="link_footer">
                    <span>02</span>
                    <h4>Afc President</h4>
                    <h5>Web development</h5>
                  </div>
                </div>
              </Link>
              <Link
                href={"#"}
                className="quick_link"
                data-cursor-img="/icons/quicklink.svg"
              >
                <div className="wrapper">
                  <Image
                    src={"/uploads/lady.png"}
                    width={400}
                    height={500}
                    alt=""
                    priority
                  />
                  <div className="link_footer">
                    <span>03</span>
                    <h4>Afc President</h4>
                    <h5>Web development</h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {/* <div className="quick_links_wrap banner_slider_wrap" data-scroll>
            <Slider {...settings} className="hero_quick_links" data-scroll>
              <Link href={"#"} className="quick_link">
                <div className="wrapper" data-scroll>
                  <Image
                    src={"/uploads/burj.png"}
                    width={400}
                    height={500}
                    alt=""
                    priority
                  />
                  <div className="link_footer">
                    <span>01</span>
                    <h4>Burj Khalifa</h4>
                    <h5>Web development</h5>
                  </div>
                </div>
              </Link>
              <Link href={"#"} className="quick_link">
                <div className="wrapper" data-scroll>
                  <Image
                    src={"/uploads/afc.png"}
                    width={400}
                    height={500}
                    alt=""
                    priority
                  />
                  <div className="link_footer">
                    <span>02</span>
                    <h4>Afc President</h4>
                    <h5>Web development</h5>
                  </div>
                </div>
              </Link>
              <Link href={"#"} className="quick_link">
                <div className="wrapper" data-scroll>
                  <Image
                    src={"/uploads/lady.png"}
                    width={400}
                    height={500}
                    alt=""
                    priority
                  />
                  <div className="link_footer">
                    <span>03</span>
                    <h4>Afc President</h4>
                    <h5>Web development</h5>
                  </div>
                </div>
              </Link>
            </Slider>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
