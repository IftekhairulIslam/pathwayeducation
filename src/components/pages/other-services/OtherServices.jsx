import React from "react";
import ServicesSection from "./sections/ServicesSection";

const OtherServices = () => {
  return (
    <div className="content clearfix">
      <section className="section-block feature-2 no-padding-bottom">
        <div className="row flex">
          <div className="column">
            <div className="feature-content">
              <div
                className="feature-content-inner horizon"
                data-animate-in="preset:slideInUpShort;duration:1000;delay:300ms;"
                data-threshold="0.6"
              >
                <h2 className="color-theme">Other Services</h2>
                <p className="lead color-black">Our other services for you!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServicesSection />
    </div>
  );
};

export default OtherServices;
