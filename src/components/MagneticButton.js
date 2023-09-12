/** @format */

import React from "react";
import GsapMagnetic from "../components/gsap";
import Link from "next/link";

const MagneticButton = ({ text, url, icon, arialabel }) => {
  const mouseEnter = (e) => {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; //y position within the element.
    e.target.style.setProperty("--x", x + "px");
    e.target.style.setProperty("--y", y + "px");
  };
  const mouseLeave = (e) => {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; //y position within the element.
    e.target.style.setProperty("--x", x + "px");
    e.target.style.setProperty("--y", y + "px");
  };
  return (
    <GsapMagnetic>
      <Link
        aria-label={arialabel}
        href={url != null ? url : "#"}
        onMouseEnter={(e) => mouseEnter(e)}
        onMouseLeave={(e) => mouseLeave(e)}
        className="cta_secondary"
        data-scroll
        style={{ "--x": "10px", "--y": "10px" }}
        id="magnetic-area">
        <span>{text} </span>
        {icon == true && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line
              x1="4.34872"
              y1="11.7146"
              x2="10.7539"
              y2="4.08125"
              stroke="#F0F0F0"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.29962 4.09155L11.8243 3.43318L12.4826 10.9579"
              stroke="#F0F0F0"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </Link>
    </GsapMagnetic>
  );
};

export default MagneticButton;
