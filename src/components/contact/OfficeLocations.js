import Image from "next/image";
import Link from "next/link";
import React from "react";

const OfficeLocations = () => {
  return (
    <section className="office_location ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="location_card">
              <h5>PIXELFLAMES FZE</h5>
              <p>
                Level 21, Al Habtoor Business <br />
                Towers, Marina Dubai, UAE
                <span>+971 4 453 2628</span>
              </p>
              <Link href={"#"} target="_blank">
                <picture data-cursor-text="Click to view">
                  <Image
                    src="/uploads/l1.jpg"
                    alt=""
                    width={1080}
                    height={1080}
                  />
                </picture>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="location_card">
              <h5>PIXELFLAMES TECHNOLOGIES</h5>
              <p>
                2/2525-B13 3rd floor, Olive Arcade, Malaparamba, <br />
                Thondayadu bypass road,
                <span>+91 8075 360 472</span>
              </p>
              <Link href={"#"} target="_blank">
                <picture data-cursor-text="Click to view">
                  <Image
                    src="/uploads/l2.jpg"
                    alt=""
                    width={1080}
                    height={1080}
                  />
                </picture>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
