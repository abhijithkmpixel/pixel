/** @format */

import { gsap } from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";
import GsapMagnetic from "../../components/gsap";

const ContactForm = ({ data }) => {
  let ctx;

  useEffect(() => {
    if (typeof document != "undefined") {
      if (window.screen.width > 1200) {
        ctx = gsap.context(() => {
          let sideImage = gsap.timeline();

          sideImage.to(".image_wrap > img", {
            objectPosition: "50% 0%",
            scrollTrigger: {
              trigger: ".image_wrap",
              start: "0% 0%",
              end: "100% 0%",
              scrub: true,
            },
          });
        });
      }
    }

    return () => {
      if (ctx) {
        ctx.revert();
      }
    };
  }, []);
  return (
    <>
      <section className="contactform" id="contactform">
        <div className="container-fluid">
          <div className="category_wrap">
            <h3>{data?.Main_title}</h3>
            <p>{data?.Sub_title}</p>
            <div className="button_wrap">
              {data?.Form_categories &&
                data?.Form_categories?.map((cat, index) => {
                  return (
                    <fieldset key={index}>
                      <input type="radio" name="regarding" id={cat?.Label} />
                      <label htmlFor={cat?.Label}>{cat?.Label}</label>
                    </fieldset>
                  );
                })}
            </div>
          </div>
          <div className="row form_wrap">
            <div className="col-lg-8 col-12">
              <div className="form_sec">
                <fieldset>
                  <label htmlFor="">{data?.Form?.Name_placeholder}</label>
                  <input
                    type="text"
                    placeholder={data?.Form?.Name_placeholder}
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="">{data?.Form?.Email_placeholder}</label>
                  <input
                    type="text"
                    placeholder={data?.Form?.Email_placeholder}
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="">{data?.Form?.Message_placeholder}</label>
                  <input
                    type="text"
                    placeholder={data?.Form?.Message_placeholder}
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="">{data?.Form?.Budget_placeholder}</label>
                  <input
                    type="text"
                    placeholder={data?.Form?.Budget_placeholder}
                  />
                </fieldset>
                <GsapMagnetic>
                  <button className="cta_primary cta_drk" type="submit">
                    {" "}
                    <span>Send</span>{" "}
                  </button>
                </GsapMagnetic>
              </div>
            </div>
            <div className="col-md-4 min_820">
              <div className="image_wrap">
                <Image
                  src={data?.Form?.SIde_image?.data?.attributes?.url}
                  alt={
                    data?.Form?.SIde_image?.data?.attributes?.alternativeText !=
                    null
                      ? data?.Form?.SIde_image?.data?.attributes
                          ?.alternativeText
                      : "contact info image"
                  }
                  width={500}
                  height={500}
                />
                <p>{data?.Form?.SIde_image_description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
