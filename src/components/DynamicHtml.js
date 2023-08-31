/** @format */

import React from "react";

const DynamicHtml = ({ title, data }) => {
  console.log("title");
  return (
    <section className="dynamic__content__block" id="dynamiccontent">
      <div className="container-fluid">
        <h1>{title}</h1>

        <div dangerouslySetInnerHTML={{ __html: data }}></div>
      </div>
    </section>
  );
};

export default DynamicHtml;
