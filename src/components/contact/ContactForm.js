import Image from "next/image";
import React from "react";

const ContactForm = () => {
  return (
    <>
      <section className="contactform">
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
      <section className="office_location container-fluid">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="location_card">
                <h5>PIXELFLAMES FZE</h5>
                <p>
                  Level 21, Al Habtoor Business <br />
                  Towers, Marina Dubai, UAE <br />
                  <span>+971 4 453 2628</span>
                </p>
                <picture>
                  <Image
                    src="/uploads/l1.jpg"
                    alt=""
                    width={1080}
                    height={1080}
                  />
                </picture>
              </div>
            </div>
            <div className="col-md-6">
              <div className="location_card">
                <h5>PIXELFLAMES TECHNOLOGIES</h5>
                <p>
                  2/2525-B13 3rd floor, Olive Arcade, <br /> Malaparamba,
                  Thondayadu bypass road, <br />
                  <span>+91 8075 360 472</span>
                </p>
                <picture>
                  <Image
                    src="/uploads/l2.jpg"
                    alt=""
                    width={1080}
                    height={1080}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="getin_touch">
        <div className="container-fluid">
          <h2>
            NEW BUSINESS & ENQUIRIES <br />
            Get in touch with <a href="">hello@pixelflames.com</a>
          </h2>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
