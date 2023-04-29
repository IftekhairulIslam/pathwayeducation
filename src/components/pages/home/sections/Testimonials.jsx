import React from "react";
import { profileAvatar } from "../../../../utilities/imageSources";

const Testimonials = () => {
  return (
    <div className="section-block">
      <div className="row full-width collapse">
        <div className="column width-12 center">
          <h3>Reviews</h3>
          <h1 className="mb-50">By Our Students</h1>
          <div className="tm-slider-container testimonial-slider" data-nav-dark>
            <ul className="tms-slides">
              <li className="tms-slide" data-image>
                <div className="tms-content-scalable">
                  <div className="row full-width no-margins">
                    <div className="column width-8 offset-2">
                      <blockquote className="avatar large center">
                        <span>
                          <img
                            data-src={profileAvatar}
                            src={profileAvatar}
                            alt=""
                          />
                        </span>
                        <p>
                          I had no idea what I wanted to do after high school,
                          but Pathway Education helped me explore different
                          career paths and find the perfect fit for me. I am now
                          studying computer science and couldn't be happier.
                          Thank you, Pathway Education!
                          <cite> Farhana Ahmed - 12/03/2023</cite>
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </li>
              <li className="tms-slide" data-image>
                <div className="tms-content-scalable">
                  <div className="row full-width no-margins">
                    <div className="column width-8 offset-2">
                      <blockquote className="avatar large center">
                        <span>
                          <img
                            data-src={profileAvatar}
                            src={profileAvatar}
                            alt=""
                          />
                        </span>
                        <p>
                          I was struggling with my coursework and feeling
                          overwhelmed, but Pathway Education provided me with
                          valuable academic support and helped me develop the
                          study skills I needed to succeed. I highly recommend
                          their services to any student looking for guidance and
                          assistance.
                          <cite>Hasan Mahmud - 26/03/2023</cite>
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </li>
              <li className="tms-slide" data-image>
                <div className="tms-content-scalable">
                  <div className="row full-width no-margins">
                    <div className="column width-8 offset-2">
                      <blockquote className="avatar large center">
                        <span>
                          <img
                            data-src={profileAvatar}
                            src={profileAvatar}
                            alt=""
                          />
                        </span>
                        <p>
                          Pathway Education is the reason I was able to get
                          accepted into my dream university. Their assistance
                          with the application process and interview preparation
                          was invaluable. I am grateful for their expertise and
                          highly recommend their services.
                          <cite>Nafisa Rahman - 24/04/2023</cite>
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
