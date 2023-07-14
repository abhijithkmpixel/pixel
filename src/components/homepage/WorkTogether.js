import Link from "next/link";
import React from "react";

const WorkTogether = () => {
  return (
    <section className="work_together" data-scroll-section>
      <div className="container-fluid">
        <div className="work_together_wrap" data-scroll>
          <h2 className="title_primary" data-scroll>
            Let’s work together?
          </h2>
          <h5>
            If you’re excited, we’re excited. Drop us a line to start the
            conversation.
          </h5>
          <div className="row work_footer" data-scroll>
            <div className="col-12 col-xl-2" data-scroll>
              <h4 data-scroll>Say hello</h4>
            </div>
            <div className="col-12 col-xl-10" data-scroll>
              <div className="d-flex wrk_contact_info" data-scroll>
                <div className="info" data-scroll>
                  <Link
                    href="#"
                    className="contact_info"
                    data-scroll
                    data-animate-text="hello@pixelflames.com"
                  >
                    <span>hello@pixelflames.com</span>
                  </Link>
                  <Link
                    href="#"
                    className="contact_info"
                    data-scroll
                    data-animate-text="+971 50 250 4787"
                  >
                    <span>+971 50 250 4787</span>
                  </Link>
                </div>
                <div data-scroll data-scroll-speed="1.3">
                  <Link href={"#"} className="cta_secondary" data-scroll>
                    start a project{" "}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
