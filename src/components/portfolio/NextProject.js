/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";

const NextProject = ({ data }) => {
  return (
    <div className="project_navigation_link">
      <Image
        src={
          data?.attributes?.Portfolio_page_listing_image?.data?.attributes?.url
        }
        fill
        alt={
          data?.attributes?.Portfolio_page_listing_image?.data?.attributes
            ?.alternativeText != null
            ? data?.attributes?.Portfolio_page_listing_image?.data?.attributes
                ?.alternativeText
            : data?.attributes?.Name
        }
      />
      <h5>next project /</h5>
      <Link
        href={"/our-portfolio/" + data?.attributes?.Slug}
        data-cursor-img-="/uploads/burg.jpeg">
        {data?.attributes?.Name}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 1.33329V18.6661C24 19.0197 23.8595 19.3588 23.6095 19.6089C23.3594 19.8589 23.0203 19.9994 22.6667 19.9994C22.3131 19.9994 21.974 19.8589 21.7239 19.6089C21.4739 19.3588 21.3334 19.0197 21.3334 18.6661V4.55153L2.27734 23.6093C2.02716 23.8595 1.68784 24 1.33403 24C0.980226 24 0.640909 23.8595 0.390729 23.6093C0.140549 23.3591 0 23.0198 0 22.666C0 22.3122 0.140549 21.9728 0.390729 21.7227L19.4485 2.66658H5.33391C4.9803 2.66658 4.64117 2.52611 4.39113 2.27607C4.14109 2.02603 4.00062 1.6869 4.00062 1.33329C4.00062 0.979681 4.14109 0.640553 4.39113 0.390512C4.64117 0.140472 4.9803 0 5.33391 0H22.6667C23.0203 0 23.3594 0.140472 23.6095 0.390512C23.8595 0.640553 24 0.979681 24 1.33329Z"
            fill="black"
          />
        </svg>
      </Link>
    </div>
  );
};

export default NextProject;
