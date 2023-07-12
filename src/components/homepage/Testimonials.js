import React from "react";
import Image from "next/image";
import Slider from "react-slick";

const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
  };
  var settings2 = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: 5,
    // variableWidth: true,
    easing: "linear",
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
  };
  return (
    <section className="client_testimonials" data-scroll-section>
      <div className="container-fluid">
        <div className="client_testimonials_wrapper" data-scroll>
          <h2 className="title_primary" data-scroll>
            What Our{" "}
            <span>
              Clients
              <br /> Say
            </span>{" "}
            About Us !
          </h2>
          <div className="testimony_slider_wrap">
            <Slider {...settings} className="testimony_slider" data-scroll>
              <div className="testimony_wrap" data-scroll>
                <div className="bodycopy" data-scroll>
                  <p>
                    <Image
                      src={"/uploads/hilt.png"}
                      alt={"hilton logo"}
                      width={144}
                      height={54}
                      data-scroll
                    />
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface.
                  </p>
                </div>

                <h5 data-scroll>Chris Hughes Mark</h5>
                <span data-scroll>CEO, Hilton</span>
              </div>
              <div className="testimony_wrap" data-scroll>
                <div className="bodycopy" data-scroll>
                  <p>
                    <Image
                      src={"/uploads/hilt.png"}
                      alt={"hilton logo"}
                      width={144}
                      height={54}
                      data-scroll
                    />
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface.
                  </p>
                </div>

                <h5 data-scroll>Chris Hughes Mark</h5>
                <span data-scroll>CEO, Hilton</span>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="clients_sliders_wrap">
        <Slider {...settings2} className="clients_slider">
          <div className="client">
            <Image
              src={"/uploads/toyota.svg"}
              alt="logo"
              width={250}
              height={70}
            />
          </div>
          <div className="client">
            <Image
              src={"/uploads/intra.svg"}
              alt="logo"
              width={250}
              height={70}
            />
          </div>
          <div className="client">
            <Image
              src={"/uploads/coke.svg"}
              alt="logo"
              width={250}
              height={70}
            />
          </div>
          <div className="client">
            <Image
              src={"/uploads/prada.svg"}
              alt="logo"
              width={250}
              height={70}
            />
          </div>
          <div className="client">
            <Image
              src={"/uploads/sam.svg"}
              alt="logo"
              width={250}
              height={70}
            />
          </div>
          <div className="client">
            <Image
              src={"/uploads/intra.svg"}
              alt="logo"
              width={250}
              height={70}
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
