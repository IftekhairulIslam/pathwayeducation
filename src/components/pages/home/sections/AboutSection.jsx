import React from "react";
import { logoSqrLight } from "./../../../../utilities/imageSources";

const AboutSection = () => {
  return (
    <section className="section-block bkg-charcoal feature-2" id="about">
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
                Guiding Students towards Successful Careers
              </p>
              <p className="color-grey-light">
                For a long time, students have been served by Pathway Education.
                Numerous students have discovered their career path and
                established a successful career in their desired field by
                relying on our experience and knowledge. We provide through
                partnerships with numerous colleges and universities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
