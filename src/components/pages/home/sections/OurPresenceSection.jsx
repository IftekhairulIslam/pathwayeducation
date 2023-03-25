import React from "react";
import { presence } from "../../../../utilities/imageSources";

const OurPresenceSection = () => {
  return (
    <section className="section-block replicable-content">
      <div className="row">
        <div className="column width-6 offset-3 center">
          <h2>Our Active Presence</h2>
          <p className="mb-50">
            Melbourne, Australia | Sunshine, Australia | Dhaka, Bangladesh
          </p>
        </div>
        <div className="column width-10 offset-1 tmh-perspective">
          <div className="feature-image">
            <div
              className="feature-image-inner center-on-mobile horizon"
              data-animate-in="preset:scaleIn;duration:1000;"
              data-threshold="0.6"
            >
              <img src={presence} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPresenceSection;
