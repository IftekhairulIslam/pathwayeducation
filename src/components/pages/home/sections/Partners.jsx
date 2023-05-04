import React from "react";
import { partners } from "../../../../utilities/imageSources";

const Partners = () => {
  return (
    <div>
      <div className="section-block replicable-content pb-20">
        <div className="row">
          <div className="column width-12 center">
            <h2 className="mb-20">Our Partners</h2>
          </div>
        </div>
      </div>
      <div className="section-block pt-0">
        <div className="row">
          <div className="column width-12">
            <div
              className="tm-slider-container logo-slider pb-30"
              data-nav-dark
              data-nav-keyboard="false"
              data-auto-advance
              data-auto-advance-interval="4000"
              data-progress-bar="false"
              data-pause-on-hover="false"
              data-carousel-visible-slides="5"
            >
              <ul className="tms-slides">
                {Object.keys(partners).map((key) => (
                  <li className="tms-slide" key={key}>
                    <div className="tms-content-scalable">
                      <img
                        data-src={partners[key]}
                        src={partners[key]}
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
