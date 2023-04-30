import React from "react";
import { logoSqrLight } from "./../../../../utilities/imageSources";

const AboutSection = () => {
  return (
    <section className="section-block bkg-charcoal feature-2" id="about">
      <div className="row flex">
        <div className="column width-6 push-6">
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
        <div className="column width-6 pull-6">
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
                At Pathway Education, we believe that every student has the
                potential to succeed and achieve their dreams. Our team of
                experienced and dedicated professionals strive to provide the
                best possible support and guidance to students seeking higher
                education. We understand that choosing the right college or
                university can be a daunting task, and that is why we have
                established partnerships with some of the best colleges and
                universities across the globe. Through these partnerships, we
                are able to offer our students a wide range of educational
                opportunities in various fields of study. Our goal is to help
                students find the right path and provide them with the necessary
                tools and resources to reach their full potential. Whether you
                are a high school student looking for guidance in choosing the
                right college, or a college student seeking help with career
                planning and job placement, we are here to help you every step
                of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
