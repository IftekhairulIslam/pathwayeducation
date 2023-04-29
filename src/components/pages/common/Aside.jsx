import React from "react";
import Navigation from "./Navigation";

const Aside = () => {
  //Side Navigation Menu
  return (
    <aside
      className="side-navigation-wrapper enter-right"
      data-no-scrollbar
      data-animation="push-in"
    >
      <div className="side-navigation-scroll-pane">
        <div className="side-navigation-inner">
          <div className="side-navigation-header">
            <div className="navigation-hide side-nav-hide">
              <a href="#">
                <span className="icon-cancel medium"></span>
              </a>
            </div>
          </div>
          <Navigation isInAside={true} />
          <div className="side-navigation-footer">
            <ul className="social-list list-horizontal">
              <li>
                <a href="https://www.facebook.com/pathwayeducation.com.bd">
                  <span className="icon-facebook small"></span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/pathwayeducationbd">
                  <span className="icon-instagram small"></span>
                </a>
              </li>
            </ul>
            <p className="copyright no-margin-bottom">
              &copy; Pathway Education. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
