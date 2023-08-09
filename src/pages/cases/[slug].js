import NextProject from "@/components/portfolio/NextProject";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Portfolio = ({data}) => {
  const { asPath, push, pathname } = useRouter()
  useEffect(() => {
    if (typeof document != "undefined") {
      console.log(asPath, pathname);
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
      window.addEventListener("scroll", function () {
        // console.log(
        //   `scroll percentage = ${(window.scrollY / totalscrollabledist) * 100}`
        // );
        if (
          (window.scrollY / totalscrollabledist) * 100 >
            (100 / totalNum) * index &&
          (window.scrollY / totalscrollabledist) * 100 <= 100
        ) {
          index++;
          imageUpdate(index - 1);
          // console.log(index);
        } else if (index <= 1) {
          index = 1;
          imageUpdate(index - 1);
          // console.log(index);
        }
        //else if (index > totalNum - 1) {
        //   index = totalNum - 1;
        //   console.log(index);
        //   imageUpdate(index);
        // }
        else {
          index--;
          // console.log(index);
          // imageUpdate(index - 1);
        }
      });
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
      <section className="portfolio_details">
        <div className="row">
          <div className="col-md-6">
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
          <div className="col-md-6">
            <div className="content_holder">
              <a className="btn-bck " href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                <span>Back to the List</span>
              </a>
              <h1 className="title_primary">
                Tribal <br /> Experience
              </h1>
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
              <a className="cta_secondary" href="">
                <span>Home</span>
              </a>
              <NextProject />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  console.log(context.req.headers.referer);
  return {
    props: {
      data: context.req.headers.referer,
    },
  };
}
export default Portfolio;
