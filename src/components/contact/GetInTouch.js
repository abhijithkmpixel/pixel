/** @format */

import React from "react";

const GetInTouch = ({ data }) => {
  return (
    <section className="getin_touch">
      <div
        className="container-fluid"
        dangerouslySetInnerHTML={{ __html: data }}>
        {/* <h2>
          NEW BUSINESS & ENQUIRIES <br />
          Get in touch with{" "}
          <a href={"mailto:hello@pixelflames.com"}>
            {" "}
            <span>hello@pixelflames.com</span>{" "}
          </a>
        </h2> */}
      </div>
    </section>
  );
};

export default GetInTouch;
