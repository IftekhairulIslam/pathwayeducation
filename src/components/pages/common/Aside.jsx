import React from "react";

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
          <nav className="side-navigation">
            {/* About Us */}
            <ul>
              <li className="current">
                <a href="/about">About Us</a>
              </li>

              {/* Addmission */}
              <li>
                <a href="#" className="contains-sub-menu">
                  Admission
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="">Study In Australia</a>
                  </li>
                  <li>
                    <a href="">Study In London</a>
                  </li>
                  <li>
                    <a href="">Study In USA</a>
                  </li>
                </ul>
              </li>

              {/* Migration */}
              <li>
                <a href="#" className="contains-sub-menu">
                  Migration
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="">All Kinds Of Visas</a>
                  </li>
                </ul>
              </li>

              {/* Coaching */}
              <li>
                <a href="#" className="contains-sub-menu">
                  Coaching
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="">IELTS</a>
                  </li>
                  <li>
                    <a href="">PTE</a>
                  </li>
                  <li>
                    <a href="">Spoken English</a>
                  </li>
                  <li>
                    <a href="">Japanese Language</a>
                  </li>
                </ul>
              </li>

              {/* Tourist & Travels */}
              <li className="">
                <a href="">Tourist & Travels</a>
              </li>

              {/* Other Services */}
              <li className="">
                <a href="">Other Services</a>
              </li>
            </ul>
          </nav>
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
