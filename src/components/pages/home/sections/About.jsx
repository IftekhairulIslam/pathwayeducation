import React from "react";
import { about } from "./../../../../utilities/imageSources";

const About = () => {
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
                src={about}
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
                Choosing a right degree or institution for your higher studies
                can be very confusing and challenging.
              </p>
              <p className="color-grey-light">
                We are partnered with over 200 plus institutions in Australia to
                give you better options and the right choice for your future
                study pathways. Our experienced and professional education
                counsellors will be able to help you with your future career
                plan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
