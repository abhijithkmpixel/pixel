import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <section className="services_listing" data-scroll-section>
      <div className="container-fluid">
        <h2 className="title" data-scroll data-scroll-offset='200'>
          <span>
            We are <br />
            here to{" "}
          </span>
          <span> help you</span>
          <Image
            src="/icons/sphere.svg"
            alt="pixelated sphere  icon"
            width={249}
            height={249}
            data-scroll
            data-scroll-speed="1"
            data-scroll-direction="horizontal"
          />
        </h2>
        <div className="services_outer_wrap">
          <div className="services_row" data-scroll>
            <div className="services_item" data-scroll data-scroll-offset="300">
              <span data-scroll>01</span>
              <Link href={"#"} className="item_inner" data-scroll>
                <Image
                  src="/uploads/wd.jpg"
                  alt="image"
                  width={440}
                  height={450}
                  data-scroll
                />
                <h4>
                  Web Development{" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_117_188)">
                      <path
                        d="M0 8H16"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 0V16"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_117_188">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </h4>
                <div className="hover_icon" data-scroll>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="4.26461"
                      y1="11.7147"
                      x2="10.6698"
                      y2="4.08137"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.21545 4.09155L11.7401 3.43318L12.3984 10.9579"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <div className="services_item" data-scroll data-scroll-offset="300">
              <span data-scroll>02</span>
              <Link href={"#"} className="item_inner" data-scroll>
                <Image
                  src="/uploads/ux.jpg"
                  alt="image"
                  width={440}
                  height={450}
                  data-scroll
                />
                <div className="hover_icon" data-scroll>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="4.26461"
                      y1="11.7147"
                      x2="10.6698"
                      y2="4.08137"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.21545 4.09155L11.7401 3.43318L12.3984 10.9579"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4>
                  UX UI Strategy{" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_117_188)">
                      <path
                        d="M0 8H16"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 0V16"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_117_188">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </h4>
              </Link>
            </div>
            <div className="services_item" data-scroll data-scroll-offset="300">
              <span data-scroll>03</span>
              <Link href={"#"} className="item_inner" data-scroll>
                <Image
                  src="/uploads/seo.jpg"
                  alt="image"
                  width={440}
                  height={450}
                  data-scroll
                />
                <div className="hover_icon" data-scroll>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="4.26461"
                      y1="11.7147"
                      x2="10.6698"
                      y2="4.08137"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.21545 4.09155L11.7401 3.43318L12.3984 10.9579"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4>
                  SEO Marketing{" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_117_188)">
                      <path
                        d="M0 8H16"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 0V16"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_117_188">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </h4>
              </Link>
            </div>
          </div>
        </div>
        <div className="row" data-scroll>
          <div className="col-12 col-xl-6" data-scroll>
            <p>
              We provide tailored services for businesses to succeed in the
              digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
