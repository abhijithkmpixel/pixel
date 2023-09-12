/** @format */

import Link from "next/link";
import React from "react";
import GsapMagnetic from "../../components/gsap";
import MagneticButton from "../MagneticButton";

const WorkTogether = ({ data }) => {
  return (
    <section className="work_together" data-scroll-section>
      <div className="container-fluid">
        <div className="work_together_wrap" data-scroll>
          <h2 className="title_primary" data-scroll>
            {data?.Main_title}
          </h2>
          <h5>{data?.Subtitle}</h5>
          <div className="row work_footer" data-scroll>
            <div className="col-12 col-xl-2" data-scroll>
              <h4 data-scroll>{data?.Short_title}</h4>
            </div>
            <div className="col-12 col-xl-10" data-scroll>
              <div className="d-flex wrk_contact_info" data-scroll>
                <div className="info" data-scroll>
                  {data?.Email_id && (
                    <Link
                      aria-label={data?.Email_id?.Text}
                      href={
                        data?.Email_id?.Url != null ? data?.Email_id?.Url : "#"
                      }
                      className="contact_info"
                      data-scroll
                      data-animate-text={data?.Email_id?.Text}>
                      <span>{data?.Email_id?.Text}</span>
                    </Link>
                  )}
                  {data?.Phone_number && (
                    <Link
                      aria-label={data?.Phone_number?.Text}
                      href={
                        data?.Phone_number?.Url != null
                          ? data?.Phone_number?.Url
                          : "#"
                      }
                      className="contact_info"
                      data-scroll
                      data-animate-text={data?.Phone_number?.Text}>
                      <span>{data?.Phone_number?.Text}</span>
                    </Link>
                  )}
                </div>
                {data?.Contact_cta && (
                  <div data-scroll data-scroll-speed="1.3">
                    <MagneticButton
                      text={data?.Contact_cta?.Text}
                      url={data?.Contact_cta?.Url}
                      icon={true}
                      arialabel={data?.Contact_cta?.Text}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
