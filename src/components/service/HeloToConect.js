/** @format */

import Image from "next/image";
import React from "react";

const HeloToConect = ({ data }) => {
  return (
    <section className="help__to__connect">
      <div className="container-fluid">
        <h2 className="title__secondary">{data?.Header?.Main_title}</h2>
        <div className="help__to__connect__row row">
          <div className="col-12 col-md-6- col-xl-4">
            <h4>{data?.Header?.Subtitle}</h4>
            <p>{data?.Header?.Bodycopy}</p>
          </div>
          <div className="col-12 col-md-6- col-xl-8">
            {data?.Technology_icons &&
              data?.Technology_icons?.data?.length > 0 && (
                <div className="help__to__connect__row__grid">
                  {data?.Technology_icons?.data?.map((tech, index) => {
                    return (
                      <div className="help__to__connect__row__grid__imagewrap">
                        <Image
                          key={index}
                          src={tech?.attributes?.url}
                          alt={
                            tech?.attributes?.alternativeText != null
                              ? tech?.attributes?.alternativeText
                              : "technology icon"
                          }
                          width={400}
                          height={300}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeloToConect;
