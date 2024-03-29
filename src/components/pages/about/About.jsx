import React from "react";
import { logoSqrLight } from "./../../../utilities/imageSources";

const About = () => {
  return (
    <div className="content clearfix">
      <section className="section-block bkg-charcoal feature-2" id="about">
        <div className="row flex">
          <div className="column width-6 push-5">
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
                <h2 className="color-white">Pathway Education</h2>
                <p className="lead color-grey-light">
                  Welcome to Pathway Education!
                </p>
                <p className="color-grey-light">
                  At Pathway Education, we believe in providing exceptional
                  services to students and educational institutions. Our mission
                  is to assume leadership in the student consultancy sector and
                  set an example for others to follow. We are dedicated to
                  offering the student community and educational institutions
                  comprehensive, skilled, and professional support to sustain
                  the excellence of higher education.
                </p>
                <p className="color-grey-light">
                  We understand that choosing a career path and finding the
                  right educational institution can be a daunting task. That's
                  why our team of experts is here to help guide you every step
                  of the way. Our services include career counseling, academic
                  advising, and assistance with university admissions.
                </p>
                <p className="color-grey-light">
                  We take pride in our personalized approach to every student's
                  needs. We work closely with our clients to understand their
                  goals, strengths, and challenges to provide tailored guidance
                  and support. Our team consists of highly trained and
                  experienced professionals who are committed to helping you
                  achieve your academic and career goals.
                </p>
                <p className="color-grey-light">
                  At Pathway Education, we value integrity, professionalism, and
                  excellence. We are committed to maintaining the highest
                  standards in all our services and interactions with clients.
                  We believe in building long-lasting relationships with our
                  clients based on trust, respect, and mutual understanding.
                </p>
                <p className="color-grey-light">
                  Thank you for considering Pathway Education for your academic
                  and career needs. We look forward to helping you achieve your
                  full potential.
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
