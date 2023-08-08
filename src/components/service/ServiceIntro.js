import { gsap } from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";

const ServiceIntro = () => {
  let ctx;
  useEffect(() => {
    if (typeof document != "undefined") {
      ctx = gsap.context(() => {
        let sideimage = gsap.timeline();
        sideimage.to(".service_intro figure img", {
          objectPosition: "50% 0%",
          scrollTrigger: {
            trigger: ".service_intro figure",
            start: "0% 100%",
            end: "100% 0",
            scrub: true,
          },
        });
      });
      let titletext = document.querySelector(
        ".service_intro .content_inner h2"
      );
      document.querySelector(".service_intro .content_inner h2").innerHTML = "";
      let splittetext = titletext.split("");
    }
    return () => {
      if (ctx) {
        ctx.revert();
      }
    };
  }, []);
  return (
    <section className="service_intro" id="serviceintro">
      <div className="container-fluid">
        <div className="row m-0">
          <div className="col-12 col-md-6 p-0 ">
            <div className="content_inner position-relative">
              <h2>
                Our services are aimed to realize our mission to make your
                business better with visual solutions.
              </h2>
              <h4>
                We work with individually adapted frameworks,but we prefer to
                work according to
              </h4>
            </div>
          </div>
          <div className="col-12 col-md-6 p-0">
            <figure>
              <Image
                src="/uploads/ser.jpg"
                alt="asd"
                width={663}
                height={385}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntro;
