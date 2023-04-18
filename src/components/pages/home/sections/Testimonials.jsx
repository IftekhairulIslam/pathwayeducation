import React from "react";
import { profileAvatar } from "../../../../utilities/imageSources";

const Testimonials = () => {
  return (
    <div className="section-block">
      <div className="row full-width collapse">
        <div className="column width-12 center">
          <h3 className="mb-50">Testimonial Slider</h3>
          <div className="tm-slider-container testimonial-slider" data-nav-dark>
            <ul className="tms-slides">
              <li className="tms-slide" data-image>
                <div className="tms-content-scalable">
                  <div className="row full-width no-margins">
                    <div className="column width-8 offset-2">
                      <blockquote className="avatar large center">
                        <span>
                          <img src={profileAvatar} alt="" />
                        </span>
                        <p>
                          Incredible work! Best creative experience ever;
                          timely, well executed and one hell of the result.
                          Would recommend Sartre to anyone who is looking to
                          revamp their identity.
                          <cite>John K. Riley - Harvest Goods.</cite>
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
                          <img src={profileAvatar} alt="" />
                        </span>
                        <p>
                          A five star agency without doubt. Hire them!
                          <cite>John A. Adams - Repetition</cite>
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
                          <img src={profileAvatar} alt="" />
                        </span>
                        <p>
                          Creativity redefined. These guys offer a unique
                          approach to every aspect of design and the result is
                          simply stunning.
                          <cite>Jane Lariken - MUD Clothing.</cite>
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
