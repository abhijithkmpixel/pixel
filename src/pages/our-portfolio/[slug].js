/** @format */

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NextProject from "@/components/portfolio/NextProject";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import GsapMagnetic from "../../components/gsap";
import axios from "axios";
const Portfolio = ({ data, footer, header }) => {
  const router = useRouter();
  useEffect(() => {
    if (typeof document != "undefined") {
      let allImages = document.querySelectorAll(".img_wrap img");
      let totalNum = allImages.length;
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
      let index = 1;
      if (window.screen.width > 1200) {
        window.addEventListener("scroll", function () {
          if (
            (window.scrollY / totalscrollabledist) * 100 >
              (100 / totalNum) * index &&
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
        });
      }
      let prevState = 0;
      function imageUpdate(index) {
        if (index >= prevState) {
          allImages.forEach((element) => {
            // element.style.opacity = 0;
            // element.style.transform = "translateY(100%)";
          });
          allImages[index].style.transform = "translateY(0%)";
        } else {
          allImages.forEach((element) => {
            // element.style.opacity = 0;
            // element.style.transform = "translateY(100%)";
          });
          allImages[index + 1].style.transform = "translateY(100%)";
        }
        // allImages[index].style.opacity = 1;
        // console.log(index);
        // console.log(prevState);
        prevState = index;
      }
    }

    return () => {};
  }, []);

  return (
    <>
      <Header data={header} />
      <section className="portfolio_details">
        <div className="row portfolio_details__row">
          <div className="col-xl-6 col-12">
            <div className="img_wrap">
              <Image
                src="/uploads/1.jpg"
                alt="portfoli_image"
                width={960}
                height={1080}
              />
              <Image
                src="/uploads/2.jpg"
                alt="portfoli_image"
                width={960}
                height={1080}
              />
              <Image
                src="/uploads/3.jpg"
                alt="portfoli_image"
                width={960}
                height={1080}
              />
              <Image
                src="/uploads/4.jpg"
                alt="portfoli_image"
                width={960}
                height={1080}
              />
            </div>
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
                  <h1 className="title_primary">
                    Tribal <br /> Experience
                  </h1>
                </div>
                <Image
                  src={"/uploads/1.jpg"}
                  alt="asd"
                  width={1200}
                  height={500}
                />
              </div>
              <div className="button_year_wrap">
                <Link className="cta_primary" href="#">
                  <span>visit website</span>
                </Link>
                <p>2023</p>
              </div>
              <p>
                Mayee consists of a small team of greentrepreneurs who are
                passionate about people and the planet. They aspire to make a
                difference by helping businesses Mayee consists of a small team
                of greentrepreneurs who are passionate about people and the
                planet. They aspire to make a difference by helping businesses
              </p>
              <p>
                Mayee consists of a small team of greentrepreneurs who are
                passionate about people and the planet. They aspire to make a
                difference by helping businesses Mayee consists of a small team
                of greentrepreneurs who are passionate about people and the
                planet. They aspire to make a difference by helping businesses
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, non ratione quae saepe iure suscipit, provident
                perferendis magnam, alias repudiandae perspiciatis sed quibusdam
                voluptas. Explicabo quaerat ab placeat ex voluptatum. Recusandae
                beatae quis repellat harum ut iusto placeat. Officiis ullam
                distinctio, fuga reprehenderit consectetur recusandae eius odio
                dicta possimus maiores?
              </p>
              <h3>about the project</h3>
              <p>
                We linked together with the design aspects of their website, the
                technological parts, using their design files and converting
                them into the core elements of front-end development.
              </p>
              <p>
                We linked together with the design aspects of their website, the
                technological parts, using their design files and converting
                them into the core elements of front-end development.
              </p>
              <p>
                We linked together with the design aspects of their website, the
                technological parts, using their design files and converting
                them into the core elements of front-end development.
              </p>
              <p>
                We linked together with the design aspects of their website, the
                technological parts, using their design files and converting
                them into the core elements of front-end development.
              </p>
              <div className="project_technology">
                <h3>technology used</h3>
                <p>Wordpress, HTML5, CSS3, Ajax, Jquery</p>
              </div>
              <div className="project_technology">
                <h3>technology used</h3>
                <ul>
                  <li>Branding</li>
                  <li>Packaging</li>
                  <li>Photo Shooting</li>
                  <li>Website UI</li>
                </ul>
              </div>
              <GsapMagnetic>
                <Link className="cta_secondary" href="/">
                  <span>Home</span>
                </Link>
              </GsapMagnetic>
            </div>
            <div className="min_1200">
              <NextProject />
            </div>
          </div>
        </div>
      </section>
      <div className="max_1200">
        <div className="container-fluid">
          <NextProject />
        </div>
      </div>
      <Footer data={footer} />
    </>
  );
};
export default Portfolio;
export async function getServerSideProps(context) {
  const data = await axios
    .get(`${process.env.DOMAIN_URL}/api/servicespage`)
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
            ? data?.data
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
    }, // will be passed to the page component as props
  };
}
