import Image from "next/image";
import Link from "next/link";
import React from "react";

const PortfolioListing = () => {
  if (typeof document != "undefined") {
    let portfolios = document
      .querySelectorAll(".portfolio_card_inner")
      .forEach((element) => {
        element.addEventListener("mousemove", function () {
          document.querySelector("body").classList.add("portfolio_hover");
        });
        element.addEventListener("mouseleave", function () {
          document.querySelector("body").classList.remove("portfolio_hover");
        });
      });
  }
  return (
    <section className="portfolio_listing" id="portfolio_list_section">
      <div className="container-fluid">
        <ul className="portfolio_nav_links">
          <li className="active_cat" data-category="all">
            All
          </li>
          <li href="#" className="" data-category="website design">
            website designs
          </li>
          <li href="#" className="" data-category="mobile application">
            mobile application
          </li>
          <li href="#" className="" data-category="Digital Marketing">
            Digital Marketing
          </li>
        </ul>
        <div className="portfolio_listing_grid" id="portfolio_list">
          <div
            className="portfolio_card_outer"
            data-case-category="web design | development"
          >
            <Link
              href="#"
              className="portfolio_card_inner"
              data-cursor-img="/icons/arr.svg"
            >
              <h3>Al Gurg Building Services</h3>
              <figure>
                <Image
                  src={"/uploads/esag.jpg"}
                  alt="asd"
                  width={500}
                  height={350}
                />
              </figure>
              <div className="card_footer">
                <span>01</span>
                <span>web design | development</span>
              </div>
            </Link>
          </div>
          <div className="portfolio_card_outer" data-case-category="web design">
            <Link
              href="#"
              className="portfolio_card_inner"
              data-cursor-img="/icons/arr.svg"
            >
              <h3>ESA SALEH AL GURG Group</h3>
              <figure>
                <Image
                  src={"/uploads/sal.jpg"}
                  alt="asd"
                  width={500}
                  height={350}
                />
              </figure>
              <div className="card_footer">
                <span>02</span>
                <span>web design</span>
              </div>
            </Link>
          </div>
          <div
            className="portfolio_card_outer"
            data-case-category="development"
          >
            <Link
              href="#"
              className="portfolio_card_inner"
              data-cursor-img="/icons/arr.svg"
            >
              <h3>SAFQAT</h3>
              <figure>
                <Image
                  src={"/uploads/saf.jpg"}
                  alt="asd"
                  width={500}
                  height={350}
                />
              </figure>
              <div className="card_footer">
                <span>03</span>
                <span>development</span>
              </div>
            </Link>
          </div>
          <div
            className="portfolio_card_outer"
            data-case-category="mobile application"
          >
            <Link
              href="#"
              className="portfolio_card_inner"
              data-cursor-img="/icons/arr.svg"
            >
              <h3>Tribal Experience</h3>
              <figure>
                <Image
                  src={"/uploads/tri.jpg"}
                  alt="asd"
                  width={500}
                  height={350}
                />
              </figure>
              <div className="card_footer">
                <span>04</span>
                <span>mobile application</span>
              </div>
            </Link>
          </div>
          <div className="portfolio_card_outer" data-case-category="web design">
            <Link
              href="#"
              className="portfolio_card_inner"
              data-cursor-img="/icons/arr.svg"
            >
              <h3>Hemslojdenidalarna</h3>
              <figure>
                <Image
                  src={"/uploads/hem.jpg"}
                  alt="asd"
                  width={500}
                  height={350}
                />
              </figure>
              <div className="card_footer">
                <span>05</span>
                <span>web design</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="cta_primary" data-scroll>
            View more
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioListing;
