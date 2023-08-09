import React from "react";

const Trends = () => {
  return (
    <section className="development__trends">
      <div className="container-fluid">
        <h2 className="title__secondary">Web Development Trends</h2>
        <div className="development__trends__grid row">
          <div className="col-12 col-lg-3"></div>
          <div className="col-12 col-lg-9">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="development__trends__grid__card">
                  <h3>Progressive Web Applications (PWAs)</h3>
                  <p>
                    PWAs are web applications that provide a native app-like
                    experience to users by utilizing modern web technologies.
                    They offer features such as push notifications
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="development__trends__grid__card">
                  <h3>No Code Development</h3>
                  <p>
                    No-code website development is a way of building websites
                    without the need for coding or programming knowledge.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="development__trends__grid__card">
                  <h3>Voice User Interface (VUI)</h3>
                  <p>
                    VUI involves integrating voice-activated features into
                    websites, allowing users to interact with the site using
                    their voice.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="development__trends__grid__card">
                  <h3>Single Page Applications (SPAs)</h3>
                  <p>
                    SPAs are web applications that load a single HTML page and
                    dynamically update the content as users interact with the
                    site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trends;
