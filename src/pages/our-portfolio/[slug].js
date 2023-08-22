/** @format */

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NextProject from "@/components/portfolio/NextProject";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import GsapMagnetic from "../../components/gsap";
import axios from "axios";
const Portfolio = ({ data, footer, header, portfolios }) => {
  const [nextProject, setnextProject] = useState();

  let prevState = 0;
  let index = 1;

  const router = useRouter();
  let allImages;
  let totalNum;
  // let totalscrollabledist;
  useEffect(() => {
    let next = portfolios?.filter((p) => {
      return (
        new Date(p?.attributes?.createdAt) >
        new Date(data?.attributes?.createdAt)
      );
    });
    setnextProject(next[0]);
    if (typeof document != "undefined") {
      allImages = document.querySelectorAll(".img_wrap img");
      totalNum = allImages.length;
      var htmlElement = document.documentElement;
      var bodyElement = document.body;
      var height = Math.max(
        htmlElement.clientHeight,
        htmlElement.scrollHeight,
        htmlElement.offsetHeight,
        bodyElement.scrollHeight,
        bodyElement.offsetHeight
      );

      let totalscrollabledist = height - document.documentElement.clientHeight;
      if (window.screen.width > 1200 && allImages.length > 0) {
        window.addEventListener("scroll", () =>
          onScroller(totalscrollabledist)
        );
      }
    }

    return () => {
      window.removeEventListener("scroll", () => onScroller());
    };
  }, []);

  function onScroller(totalscrollabledist) {
    if (
      (window.scrollY / totalscrollabledist) * 100 > (100 / totalNum) * index &&
      (window.scrollY / totalscrollabledist) * 100 <= 100
    ) {
      index++;
      imageUpdate(index - 1);
    } else if (index <= 1) {
      index = 1;
      imageUpdate(index - 1);
    }
    //else if (index > totalNum - 1) {
    //   index = totalNum - 1;
    //   imageUpdate(index);
    // }
    else {
      index--;
      // imageUpdate(index - 1);
    }
  }
  function imageUpdate(index) {
    if (index >= prevState) {
      // allImagesState?.forEach((element) => {
      //   // element.style.opacity = 0;
      //   // element.style.transform = "translateY(100%)";
      // });
      allImages[index].style.transform = "translateY(0%)";
    } else {
      // allImagesState?.forEach((element) => {
      //   // element.style.opacity = 0;
      //   // element.style.transform = "translateY(100%)";
      // });
      allImages[index + 1].style.transform = "translateY(100%)";
    }
    // allImages[index].style.opacity = 1;
    // console.log(index);
    // console.log(prevState);
    prevState = index;
  }
  return (
    <>
      <Header data={header} />
      <section className="portfolio_details">
        <div className="row portfolio_details__row">
          <div className="col-xl-6 col-12">
            {data?.attributes?.Images &&
              data?.attributes?.Images?.data?.length > 0 && (
                <div className="img_wrap">
                  {data?.attributes?.Images?.data?.map((img, index) => {
                    return (
                      <Image
                        key={index}
                        src={img?.attributes?.url}
                        alt={
                          img?.attributes?.alternativeText != null
                            ? img?.attributes?.alternativeText
                            : "portfoli_image"
                        }
                        width={960}
                        height={1080}
                      />
                    );
                  })}
                </div>
              )}
          </div>
          <div className="col-xl-6 col-12">
            <div className="content_holder">
              <div className="case__banner">
                <div className="case__banner__inner">
                  <Link className="btn-bck " href="/our-portfolio">
                    <svg
                      width="40"
                      height="13"
                      viewBox="0 0 40 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.68535 0.155718C6.89524 0.365599 6.88847 0.697347 6.68535 0.920768L2.18952 5.9579L38.9593 5.66001C39.2572 5.66001 39.501 5.90374 39.501 6.20164C39.501 6.49953 39.2572 6.74326 38.9593 6.74326L2.18952 7.04116L6.67858 12.0783C6.87494 12.3085 6.89524 12.6267 6.68535 12.8366C6.47545 13.0465 6.10983 13.06 5.91348 12.8433C5.91348 12.8433 0.550976 6.95314 0.496811 6.88544C0.442646 6.81774 0.334312 6.69587 0.334312 6.49953C0.334312 6.30319 0.442646 6.16778 0.496811 6.11362C0.550976 6.05946 5.91348 0.155718 5.91348 0.155718C6.01504 0.054163 6.15723 0 6.29942 0C6.4416 0 6.57701 0.054163 6.68535 0.155718Z"
                        fill="black"
                      />
                    </svg>

                    <span>Back to the List</span>
                  </Link>
                  <h1 className="title_primary">{data?.attributes?.Name}</h1>
                </div>
                <Image
                  src={"/uploads/1.jpg"}
                  alt="asd"
                  width={1200}
                  height={500}
                />
              </div>
              <div className="button_year_wrap">
                {data?.attributes?.Live_url &&
                  data?.attributes?.Live_url != null && (
                    <Link
                      className="cta_primary"
                      href={data?.attributes?.Live_url?.Url}>
                      <span>{data?.attributes?.Live_url?.Text}</span>
                    </Link>
                  )}
                <p>{data?.attributes?.Year}</p>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.attributes?.Bodycopy,
                }}></div>

              <div
                className="project_technology"
                dangerouslySetInnerHTML={{
                  __html: data?.attributes?.Technology_used,
                }}></div>
              <div
                className="project_technology"
                dangerouslySetInnerHTML={{
                  __html: data?.attributes?.Services_used,
                }}></div>
              <GsapMagnetic>
                <Link className="cta_secondary" href="/">
                  <span>Home</span>
                </Link>
              </GsapMagnetic>
            </div>
            <div className="min_1200">
              {nextProject && <NextProject data={nextProject} />}
            </div>
          </div>
        </div>
      </section>
      <div className="max_1200">
        <div className="container-fluid">
          {nextProject && <NextProject data={nextProject} />}
        </div>
      </div>
      <Footer data={footer} />
    </>
  );
};
export default Portfolio;
export async function getServerSideProps(context) {
  const { params } = context;

  const data = await axios
    .get(`${process.env.DOMAIN_URL}/api/portfolio?slug=${params.slug}`)
    .then(function (response) {
      // handle success
      return response?.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  return {
    props: {
      data:
        Object.keys(data).length > 0
          ? data?.data && data?.data !== null
            ? data?.data[0]
            : null
          : null,
      header:
        Object.keys(data).length > 0
          ? data?.header && data?.header !== null
            ? data?.header
            : null
          : null,
      footer:
        Object.keys(data).length > 0
          ? data?.footer && data?.footer !== null
            ? data?.footer
            : null
          : null,
      portfolios:
        Object.keys(data).length > 0
          ? data?.portfolios && data?.portfolios !== null
            ? data?.portfolios
            : null
          : null,
    }, // will be passed to the page component as props
  };
}
