import React from "react";
import { logoSqrLight } from "./../../../utilities/imageSources";

const About = () => {
  return (
    <div className="content clearfix">
      <section
        className="section-block mt-40 bkg-charcoal feature-2"
        id="about"
      >
        <div className="row flex">
          <div className="column width-6 push-5 offset-1">
            <div className="feature-image mb-mobile-50">
              <div
                className="feature-image-inner center-on-mobile horizon"
                data-animate-in="preset:slideInRightShort;duration:1000;"
                data-threshold="0.6"
              >
                <img
                  src={logoSqrLight}
                  style={{ height: "360px", objectFit: "contain" }}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="column width-5 pull-7">
            <div className="feature-content">
              <div
                className="feature-content-inner horizon"
                data-animate-in="preset:slideInUpShort;duration:1000;delay:300ms;"
                data-threshold="0.6"
              >
                <h2 className="mb-30 color-white">Pathway Education</h2>
                <p className="lead color-grey-light">
                  Our Commitment to Excellence in Higher Education
                </p>
                <p className="color-grey-light">
                  With our exceptional level of services for students and
                  educational institutions, we hope to assume leadership in the
                  student consultancy sector and serve as a role model for
                  others. By offering the student community and educational
                  institutions comprehensive, skilled, and professional support,
                  we work to sustain the excellence of higher education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
