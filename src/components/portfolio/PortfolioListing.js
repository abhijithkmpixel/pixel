/** @format */

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const PortfolioListing = ({ data, options }) => {
  const [currentList, setcurrentList] = useState(data?.data);
  const [filterOpen, setfilterOpen] = useState(false);
  const [loading, setloading] = useState(false);
  const [pagination, setpagination] = useState(5);
  useEffect(() => {
    if (typeof document != "undefined") {
      // let portfolios = document
      //   .querySelectorAll(".portfolio_card_inner")
      //   .forEach((element) => {
      //     element.addEventListener("mousemove", function () {
      //       document.querySelector("body").classList.add("portfolio_hover");
      //     });
      //     element.addEventListener("mouseleave", function () {
      //       document.querySelector("body").classList.remove("portfolio_hover");
      //     });
      //   });

      document.addEventListener("click", checkForCLick);
    }
    return () => {};
  }, [filterOpen]);

  const filterPortfolioCards = (e, category) => {
    setloading(true);
    setpagination(5);
    document
      .querySelectorAll(".portfolio_nav_links li")
      .forEach((elm) => elm.classList.remove("active_cat"));
    e.target.classList.add("active_cat");
    if (category.toLowerCase() == "all") {
      setcurrentList(data?.data);
    } else {
      let temparr = data?.data?.filter((elm) => {
        let found = false;
        elm?.attributes?.portfolio_categories?.data?.map((cat) => {
          if (cat?.attributes?.Name?.toLowerCase() == category) {
            found = true;
          }
        });

        if (found) {
          return elm;
        }
      });
      setTimeout(() => {
        setcurrentList(temparr);
      }, 500);
    }
    setTimeout(() => {
      setloading(false);
    }, 1000);
  };
  function checkForCLick(event) {
    var $trigger = document.querySelector(".portfolio_nav_links button");
    if (
      $trigger !== event.target
      // && $trigger.contains(event.target)
    ) {
      //  $("body").removeClass("language_select-open");
      setfilterOpen(false);
    }
  }
  function mouseMoveOverCards() {
    document.querySelector("body").classList.add("portfolio_hover");
  }
  function mouseLeaveOverCards() {
    document.querySelector("body").classList.remove("portfolio_hover");
  }
  const openFilter = () => {
    setfilterOpen(filterOpen == true ? false : true);
  };
  const incrementPagination = () => {
    setloading(true);
    setTimeout(() => {
      setpagination((pagination) => pagination + 5);
    }, 500);
    setTimeout(() => {
      setloading(false);
    }, 1000);
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
          {options && options?.length > 0 && (
            <ul className="">
              <li
                className="active_cat"
                data-category="all"
                onClick={(e) => filterPortfolioCards(e, "all")}>
                All
              </li>
              {options?.map((o, index) => {
                return (
                  <li
                    key={index}
                    className={""}
                    data-category={o?.attributes?.Name?.toLowerCase()}
                    onClick={(e) =>
                      filterPortfolioCards(
                        e,
                        o?.attributes?.Name?.toLowerCase()
                      )
                    }>
                    {o?.attributes?.Name}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div
          className={
            loading == true
              ? "portfolio_listing_grid opacity-50"
              : "portfolio_listing_grid"
          }
          id="portfolio_list">
          {currentList &&
            currentList.length > 0 &&
            currentList?.map((p, index) => {
              if (index < pagination) {
                return (
                  <div
                    key={index}
                    className="portfolio_card_outer"
                    data-case-category={p?.attributes?.portfolio_categories?.data?.map(
                      (p) => {
                        return p?.attributes?.Name.toLowerCase() + " ";
                      }
                    )}>
                    <Link
                      href={"/our-portfolio/" + p?.attributes?.Slug}
                      className="portfolio_card_inner"
                      onMouseMove={mouseMoveOverCards}
                      onMouseLeave={mouseLeaveOverCards}
                      data-cursor-img="/icons/arr.svg">
                      <h3>{p?.attributes?.Name}</h3>
                      <figure>
                        <Image
                          src={
                            p?.attributes?.Portfolio_page_listing_image?.data
                              ?.attributes?.url
                          }
                          alt={
                            p?.attributes?.Portfolio_page_listing_image?.data
                              ?.attributes?.alternativeText != null
                              ? p?.attributes?.Portfolio_page_listing_image
                                  ?.data?.attributes?.alternativeText
                              : p?.attributes?.Name
                          }
                          width={500}
                          height={350}
                        />
                      </figure>
                      <div className="card_footer">
                        <span>
                          {index + 1 < 10 ? "0" : null}
                          {index + 1}
                        </span>
                        <span>
                          {p?.attributes?.portfolio_categories?.data?.map(
                            (p) => {
                              return p?.attributes?.Name.toLowerCase() + ", ";
                            }
                          )}
                        </span>
                      </div>
                    </Link>
                  </div>
                );
              }
            })}
          {currentList?.length == 0 && (
            <div className="portfolio_card_outer">
              <div className="portfolio_card_inner">
                <h3 className="text-center">NO results found!</h3>
              </div>
            </div>
          )}
        </div>
        {currentList &&
          currentList?.length > 0 &&
          currentList?.length > 5 &&
          currentList?.length > pagination && (
            <div className="d-flex justify-content-center">
              <button
                className="cta_primary"
                data-scroll
                onClick={incrementPagination}>
                <span>View more</span>
              </button>
            </div>
          )}
      </div>
    </section>
  );
};

export default PortfolioListing;
