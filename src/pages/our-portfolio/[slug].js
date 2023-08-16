/** @format */

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NextProject from "@/components/portfolio/NextProject";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import GsapMagnetic from "../../components/gsap";
const Portfolio = ({ data }) => {
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
      function imageUpdate(index) {
        allImages.forEach((element) => {
          element.style.opacity = 0;
        });
        allImages[index].style.opacity = 1;
      }
    }

    return () => {};
  }, []);

  return (
    <>
      <Header />
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
                  <Link className="btn-bck " href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16">
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
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
              <div className="min_990">
                <NextProject />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max_990">
        <div className="container-fluid">
          <NextProject />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Portfolio;
