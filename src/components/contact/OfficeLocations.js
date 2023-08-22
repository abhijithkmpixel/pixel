/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";

const OfficeLocations = ({ data }) => {
  return (
    <section className="office_location ">
      <div className="container-fluid">
        <div className="row">
          {data?.length > 0 &&
            data?.map((loc, index) => {
              return (
                <div className="col-md-6" key={index}>
                  <div className="location_card">
                    <h5>{loc?.Location_details?.Title}</h5>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: loc?.Location_details?.Description,
                      }}></div>
                    <Link
                      href={
                        loc?.Location_link?.Url != null
                          ? loc?.Location_link?.Url
                          : "#"
                      }
                      target="_blank">
                      <picture
                        data-cursor-text={
                          loc?.Location_link?.Text != null
                            ? loc?.Location_link?.Text
                            : "#"
                        }>
                        <Image
                          src={
                            loc?.Location_details?.Image?.data?.attributes?.url
                          }
                          alt={
                            loc?.Location_details?.Image?.data?.attributes
                              ?.alternativeText != null
                              ? loc?.Location_details?.Image?.data?.attributes
                                  ?.alternativeText
                              : loc?.Location_details?.Title
                          }
                          width={1080}
                          height={1080}
                        />
                      </picture>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
