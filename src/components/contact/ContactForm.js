/** @format */

import { gsap } from "gsap";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import GsapMagnetic from "../../components/gsap";
import { message } from "antd";
import axios from "axios";

const ContactForm = ({ data }) => {
  let ctx;
  const [formLoading, setformLoading] = useState(false);
  const [formError, setformError] = useState(null);
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
  const firstName = useRef();
  const emailId = useRef();
  const messages = useRef();
  const budget = useRef();
  function clearFields() {
    firstName.current.value = "";
    budget.current.value = "";
    emailId.current.value = "";
    messages.current.value = "";
    document.querySelectorAll('input[type="radio"]').forEach((element) => {
      element.checked = false;
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setformLoading(true);
    setformError(false);
    firstName.current.classList = "";
    emailId.current.classList = "";
    messages.current.classList = "";

    let values = {
      name: firstName?.current?.value,
      email: emailId?.current?.value,
      category: document.querySelector('input[type="radio"]:checked + label')
        ? document.querySelector('input[type="radio"]:checked + label')
            .innerText
        : "N/P",
      budget: budget?.current?.value,
      message: messages?.current?.value,
    };

    if (values.name == "") {
      setformError("Please fill name field!");
      firstName.current.classList = "error";
      firstName.current.focus = false;
    } else if (values.name.length < 2) {
      firstName.current.classList = "error";
      setformError("Minimum character length for name is 2");
    } else if (values.email == "") {
      setformError("Please fill email field!");
      emailId.current.classList = "error";
    } else if (
      !/^([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63})$/i.test(
        values.email
      )
    ) {
      setformError("Invalid email");
      emailId.current.classList = "error";
    } else if (values.message == "") {
      messages.current.classList = "error";

      setformError("Please fill message field!");
    } else {
      setformError(null);
      const sendMail = await axios
        .post(`/api/contactform`, { values })
        .then(function (response) {
          // handle success
          return response?.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      clearFields();
      message.success({
        content: sendMail?.message,
        style: {
          marginTop: "10vh",
        },
        duration: 5,
      });
      // toggleState !== undefined && toggleState();
    }
    setformLoading(false);
  };
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
                    ref={firstName}
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="">{data?.Form?.Email_placeholder}</label>
                  <input
                    type="text"
                    placeholder={data?.Form?.Email_placeholder}
                    ref={emailId}
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="">{data?.Form?.Message_placeholder}</label>
                  <input
                    type="text"
                    placeholder={data?.Form?.Message_placeholder}
                    ref={messages}
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="">{data?.Form?.Budget_placeholder}</label>
                  <input
                    type="text"
                    placeholder={data?.Form?.Budget_placeholder}
                    ref={budget}
                  />
                </fieldset>
                {formError && (
                  <fieldset className="mb-2">
                    <span className="error">{formError}</span>
                  </fieldset>
                )}
                {/* <GsapMagnetic> */}
                <button
                  className="cta_primary cta_drk"
                  type="button"
                  title={"Send"}
                  disabled={formLoading}
                  onClick={(e) => handleSubmit(e)}>
                  {" "}
                  <span className="d-flex align-items-center">
                    Send{" "}
                    {formLoading && (
                      <div
                        className="spinner-border spinner-border-sm text-light ms-2"
                        role="status">
                        {/* <span className="sr-only">Loading...</span> */}
                      </div>
                    )}
                  </span>{" "}
                </button>
                {/* </GsapMagnetic> */}
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
