import Image from "next/image";
import React from "react";

const HeloToConect = () => {
  return (
    <section className="help__to__connect">
      <div className="container-fluid">
        <h2 className="title__secondary">We help to connect</h2>
        <div className="help__to__connect__row row">
          <div className="col-12 col-md-6- col-xl-4">
            <h4>CMS & Platforms we use</h4>
            <p>
              VUI involves integrating voice-activated features into websites,
              allowing users to interact with the site using their voice.
            </p>
          </div>
          <div className="col-12 col-md-6- col-xl-8">
            <div className="help__to__connect__row__grid">
              <Image
                src={"/uploads/umb1.svg"}
                alt="image"
                width={100}
                height={55}
              />
              <Image
                src={"/uploads/pro1.svg"}
                alt="image"
                width={100}
                height={55}
              />
              <Image
                src={"/uploads/kent1.svg"}
                alt="image"
                width={100}
                height={55}
              />{" "}
              <Image
                src={"/uploads/str1.svg"}
                alt="image"
                width={100}
                height={55}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeloToConect;
