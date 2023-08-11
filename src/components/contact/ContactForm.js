import { gsap } from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";

const ContactForm = () => {
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
        <div className="category_wrap">
          <h3>What would you like us to craft for you?</h3>
          <p>
            Want to start a project or need our expert consultation? We’d love
            to share our expertise with you.
          </p>
          <div className="button_wrap">
            <fieldset>
              <input type="radio" name="regarding" id="Strategy" />
              <label htmlFor="Strategy">Strategy</label>
            </fieldset>
            <fieldset>
              <input type="radio" name="regarding" id="Brand" />
              <label htmlFor="Brand">Brand</label>
            </fieldset>
            <fieldset>
              <input type="radio" name="regarding" id="Digital Product" />
              <label htmlFor="Digital Product">Digital Product</label>
            </fieldset>
            <fieldset>
              <input type="radio" name="regarding" id="Physical Design" />
              <label htmlFor="Physical Design">Physical Design</label>
            </fieldset>
            <fieldset>
              <input type="radio" name="regarding" id="Innovation" />
              <label htmlFor="Innovation">Innovation</label>
            </fieldset>
            <fieldset>
              <input type="radio" name="regarding" id="Other" />
              <label htmlFor="Other">Other</label>
            </fieldset>
          </div>
        </div>
        <div className="row form_wrap">
          <div className="col-md-8">
            <div className="form_sec">
              <fieldset>
                <label htmlFor="">What is your name?</label>
                <input type="text" placeholder="What is your name?" />
              </fieldset>
              <fieldset>
                <label htmlFor="">Your Email?</label>
                <input type="text" placeholder="Your Email?" />
              </fieldset>
              <fieldset>
                <label htmlFor="">Whats your thoughts?</label>
                <input type="text" placeholder="Whats your thoughts?" />
              </fieldset>
              <fieldset>
                <label htmlFor="">Please mention your budget?</label>
                <input type="text" placeholder="Please mention your budget?" />
              </fieldset>
              <button className="cta_primary cta_drk">
                {" "}
                <span>Send</span>{" "}
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image_wrap">
              <Image
                src="/uploads/fromimage.jpg"
                alt="asdsad"
                width={500}
                height={500}
              />
              <p>We work with individually adapted frameworks,but we prefer</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
