import Link from "next/link";
import React from "react";

const ServiceItemsList = () => {
  return (
    <section className="services_grid">
      <span className="float_text">
        services
      </span>
      <div className="container-fluid">
        <Link
          href={"#"}
          className="row service_list_card"
          data-cursor-text="read more"
        >
          <div className="col-12 col-md-6 col-lg-4">
            <h3>
              <span>01</span>Web Development
            </h3>
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
            <h3>
              <span>02</span>Mobile Application Development
            </h3>
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
            <h3>
              <span>03</span>Ecommerce Development
            </h3>
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
            <h3>
              <span>04</span>UI Design Service in Dubai
            </h3>
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
