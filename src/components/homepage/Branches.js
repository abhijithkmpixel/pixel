import Image from "next/image";
import React from "react";

const Branches = () => {
  return (
    <section
      className="our_branches"
      data-scroll
      data-scroll-section
      id="branches"
    >
      <Image
        src={"/uploads/branch.jpg"}
        alt={"image"}
        width={1440}
        height={753}
        data-scroll
        data-scroll-sticky
        data-scroll-target="branches"
      />
      <div className="branches_innerwrap" data-scroll>
        <div className="container-fluid">
          <div className="branch_header" data-scroll>
            <h2 className="title_primary" data-scroll>
              Dubai with extended branches in India
            </h2>
            <h4 data-scroll>
              We are an award winning web design company web design agency that
              specialize in custom
            </h4>
          </div>
          <p>
            We are an award winning web design company web design agency that
            specialize in custom website design & development services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Branches;
