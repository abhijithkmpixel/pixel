/** @format */

import React from "react";

const DynamicHtmlTwoColumn = ({ title, subtitle, data }) => {
  return (
    <section className="dynamic__content__block" id="dynamiccontent">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-12 col-md-6- col-xl-8"
            dangerouslySetInnerHTML={{ __html: data }}></div>
          <div className="col-12 col-md-6- col-xl-4">
            <h4>{title}</h4>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicHtmlTwoColumn;
