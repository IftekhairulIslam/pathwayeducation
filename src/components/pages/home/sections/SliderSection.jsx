import React from "react";
import { slider1 } from "../../../../utilities/imageSources";
import { Link } from "react-router-dom";

const SliderSection = () => {
  return (
    <section className="section-block featured-media window-height tm-slider-parallax-container">
      <div
        className="tm-slider-container full-width-slider"
        data-featured-slider
        data-parallax
        data-scale-under="960"
      >
        <ul className="tms-slides">
          <li
            className="tms-slide"
            data-image
            data-force-fit
            data-overlay-bkg-color="#000000"
            data-overlay-bkg-opacity="0.40"
          >
            <div className="tms-content">
              <div className="tms-content-inner center left-on-mobile v-align-middle">
                <div className="row">
                  <div className="column width-10 offset-1">
                    <h5
                      className="tms-caption no-padding-on-mobile text-uppercase lspacing-small mb-10 weight-bold color-white"
                      data-animate-in="preset:scaleOut;duration:900ms;delay:100ms;"
                      data-no-scale
                    >
                      You Choose the Adventure
                    </h5>
                    <div className="clear"></div>
                    <h1
                      className="tms-caption title-xlarge no-padding-on-mobile text-uppercase lspacing-medium mb-20 weight-bold color-white"
                      data-animate-in="preset:scaleOut;duration:900ms;delay:100ms;"
                      data-no-scale
                    >
                      we make it happen
                    </h1>
                    <div className="row">
                      <div className="column width-6 offset-3 weight-light">
                        <p
                          className="tms-caption color-white text-small"
                          data-animate-in="preset:slideInRightShort;duration:900ms;delay:200ms;"
                          data-no-scale
                        >
                          We help you find the travel experience that you have
                          always dreamed of and tailor it to your needs.
                        </p>
                        <a
                          href="/contact"
                          data-offset="-60"
                          className="tms-caption button scroll-link-OFF medium bkg-theme border-hover-white color-white color-hover-white text-uppercase"
                          data-animate-in="preset:scaleOut;duration:900ms;delay:400ms;"
                          data-no-scale
                        >
                          Book An Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img data-src={slider1} data-retina src={slider1} alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SliderSection;
