import { gsap } from "gsap";
import Link from "next/link";
import React, { useEffect } from "react";

const ServiceItemsList = () => {
  let ctx;
  useEffect(() => {
    if (typeof document != "undefined") {
      ctx = gsap.context(() => {
        let servicetitle = gsap.timeline();
        if (window.screen.width > 1200) {
          document
            .querySelectorAll(".services_grid .service_list_card .service_list_card__title")
            .forEach((elm) => {
              servicetitle.fromTo(
                elm,
                {
                  y: 100,
                },
                {
                  y: 0,
                  scrollTrigger: {
                    trigger: elm,
                    start: "0% 100%",
                    end: "100% 0%",
                    scrub: true,
                  },
                }
              );
            });
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
    <section className="services_grid">
      <span className="float_text">services</span>
      <div className="container-fluid">
        <Link
          href={"#"}
          className="row service_list_card"
          data-cursor-text="read more"
        >
          <div className="col-12 col-md-6 col-lg-4">
            <div className="service_list_card__title">
              <h3>
                <span>01</span>Web Development
              </h3>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-8">
            <p>
              We are a web design company based in Dubai, dedicated to creating
              websites that are tailored to meet your business requirements
              while delivering a memorable experience for your target audience.
              Our team of experienced designers.
            </p>
            <h4>
              Individual software / web portal / platform / SaaS software /
              business software / Azure cloud / mobile apps / PWA
            </h4>
          </div>
        </Link>
        <Link
          href={"#"}
          className="row service_list_card"
          data-cursor-text="read more"
        >
          <div className="col-12 col-md-6 col-lg-4">
            <div className="service_list_card__title">
              <h3>
                <span>02</span>Mobile Application Development
              </h3>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-8">
            <p>
              We are a web design company based in Dubai, dedicated to creating
              websites that are tailored to meet your business requirements
              while delivering a memorable experience for your target audience.
              Our team of experienced designers.
            </p>
            <h4>
              Individual software / web portal / platform / SaaS software /
              business software / Azure cloud / mobile apps / PWA
            </h4>
          </div>
        </Link>
        <Link
          href={"#"}
          className="row service_list_card"
          data-cursor-text="read more"
        >
          <div className="col-12 col-md-6 col-lg-4">
            <div className="service_list_card__title">
              <h3>
                <span>03</span>Ecommerce Development
              </h3>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-8">
            <p>
              We are a web design company based in Dubai, dedicated to creating
              websites that are tailored to meet your business requirements
              while delivering a memorable experience for your target audience.
              Our team of experienced designers.
            </p>
            <h4>
              Individual software / web portal / platform / SaaS software /
              business software / Azure cloud / mobile apps / PWA
            </h4>
          </div>
        </Link>
        <Link
          href={"#"}
          className="row service_list_card"
          data-cursor-text="read more"
        >
          <div className="col-12 col-md-6 col-lg-4">
            <div className="service_list_card__title">
              <h3>
                <span>04</span>UI Design Service in Dubai
              </h3>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-8">
            <p>
              We are a web design company based in Dubai, dedicated to creating
              websites that are tailored to meet your business requirements
              while delivering a memorable experience for your target audience.
              Our team of experienced designers.
            </p>
            <h4>
              Individual software / web portal / platform / SaaS software /
              business software / Azure cloud / mobile apps / PWA
            </h4>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ServiceItemsList;
