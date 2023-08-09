import { gsap } from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";

const ServiceIntro = ({ title, subtitle, img, classes }) => {
  let ctx;
  useEffect(() => {
    if (typeof document != "undefined") {
      let titletext = document
        .querySelector(".service_intro .content_inner h2")
        .innerText.split(" ");
      document.querySelector(".service_intro .content_inner h2").innerText = "";
      titletext.map((element) => {
        document.querySelector(".service_intro .content_inner h2").innerHTML +=
          "<span>" + element + "</span> ";
      });
      ctx = gsap.context(() => {
        let sideimage = gsap.timeline();
        let introtitle = gsap.timeline();
        if (window.screen.width > 1200) {
          sideimage.to(".service_intro figure img", {
            objectPosition: "50% 0%",
            scrollTrigger: {
              trigger: ".service_intro figure",
              start: "0% 100%",
              end: "100% 0",
              scrub: true,
            },
          });
          introtitle.to(".service_intro h2 span", {
            color: "#000",
            stagger: 0.1,
            scrollTrigger: {
              trigger: ".service_intro h2",
              start: "0% 60%",
              end: "100% 50%",
              scrub: true,
            },
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
    <section
      className={classes ? `service_intro ${classes}` : "service_intro"}
      id="serviceintro"
    >
      <div className="container-fluid">
        <div className="row m-0">
          <div className="col-12 col-md-6 p-0 ">
            <div className="content_inner position-relative">
              <h2>{title}</h2>
              <h4>{subtitle}</h4>
            </div>
          </div>
          <div className="col-12 col-md-6 p-0">
            <figure>
              <Image src={img} alt="asd" width={663} height={385} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntro;
