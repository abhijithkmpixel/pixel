/** @format */

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const PortfolioListing = () => {
  const [portfolioList, setportfolioList] = useState([
    {
      name: "Al Gurg Building Services",
      img: "/uploads/esag.jpg",
      category: "website design | development",
    },
    {
      name: "ESA SALEH AL GURG Group",
      img: "/uploads/sal.jpg",
      category: "website design",
    },
    {
      name: "SAFQAT",
      img: "/uploads/saf.jpg",
      category: "development",
    },
    {
      name: "Tribal Experience",
      img: "/uploads/tri.jpg",
      category: "mobile application",
    },
    {
      name: "Hemslojdenidalarna",
      img: "/uploads/hem.jpg",
      category: "website design",
    },
  ]);
  const [currentList, setcurrentList] = useState(portfolioList);
  const [filterOpen, setfilterOpen] = useState(false);
  useEffect(() => {
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

      let linkItems = document.querySelectorAll(
        ".portfolio_listing .portfolio_nav_links li"
      );
      let portfolioCards = document.querySelectorAll(
        ".portfolio_listing .portfolio_listing_grid .portfolio_card_outer"
      );
      linkItems.forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          linkItems.forEach((element) => {
            element.classList.remove("active_cat");
            setTimeout(() => {
              setfilterOpen(false);
            }, 500);
          });
          this.classList.add("active_cat");
          filterPortfolioCards(this.getAttribute("data-category"));
        });
      });
      const filterPortfolioCards = (category) => {
        if (category.toLowerCase() == "all") {
          setcurrentList(portfolioList);
        } else {
          setcurrentList(
            portfolioList?.filter((elm) => {
              if (elm.category.includes(category)) {
                return elm;
              }
            })
          );
        }
        // console.log(currentList);
      };
    }
    return () => {};
  }, [filterOpen]);

  const openFilter = () => {
    setfilterOpen(filterOpen == true ? false : true);
  };

  return (
    <section className="portfolio_listing" id="portfolio_list_section">
      <div className="container-fluid">
        <div
          className={
            filterOpen == true
              ? "portfolio_nav_links open"
              : "portfolio_nav_links "
          }>
          <button onClick={() => openFilter()}>View Filter</button>
          <ul className="">
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
        </div>
        <div className="portfolio_listing_grid" id="portfolio_list">
          {currentList &&
            currentList.length > 0 &&
            currentList?.map((p, index) => {
              return (
                <div
                  key={index}
                  className="portfolio_card_outer"
                  data-case-category={p?.category}>
                  <Link
                    href="/our-portfolio/portfolio"
                    className="portfolio_card_inner"
                    data-cursor-img="/icons/arr.svg">
                    <h3>{p?.name}</h3>
                    <figure>
                      <Image src={p?.img} alt="asd" width={500} height={350} />
                    </figure>
                    <div className="card_footer">
                      <span>
                        {index + 1 < 10 ? "0" : null}
                        {index + 1}
                      </span>
                      <span>{p?.category}</span>
                    </div>
                  </Link>
                </div>
              );
            })}
          {currentList?.length == 0 && (
            <div className="portfolio_card_outer">
              <div className="portfolio_card_inner">
                <h3 className="text-center">NO results found!</h3>
              </div>
            </div>
          )}
        </div>
        {currentList && currentList?.length > 0 && (
          <div className="d-flex justify-content-center">
            <button className="cta_primary" data-scroll>
              <span>View more</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioListing;
