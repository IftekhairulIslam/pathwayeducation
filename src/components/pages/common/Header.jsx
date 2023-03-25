import React from "react";
import { logoDark, logoLight } from "./../../../utilities/imageSources";

const Header = () => {
  return (
    <header
      className="header header-absolute header-fixed-on-mobile header-transparent"
      data-helper-in-threshold="200"
      data-helper-out-threshold="500"
      data-sticky-threshold="200"
      data-bkg-threshold="100"
      data-compact-threshold="100"
    >
      <div className="header-inner-top">
        <div className="row nav-bar">
          <div className="column width-6 nav-bar-inner left">
            <p>Melbourne | Sunshine | Bangladesh </p>
          </div>
          <div className="column width-6 nav-bar-inner right">
            <p>Call Us +880 1323299761, +880 1323299762</p>
          </div>
        </div>
      </div>
      <div className="header-inner">
        <div className="row nav-bar">
          <div className="column width-12 nav-bar-inner">
            <div className="logo">
              <div className="logo-inner">
                <a href="index.html">
                  <img src={logoDark} alt="Pathway Education" />
                </a>
                <a href="index.html">
                  <img src={logoLight} alt="Pathway Education" />
                </a>
              </div>
            </div>
            <nav className="navigation nav-block secondary-navigation nav-right">
              <ul>
                <li>
                  <div className="v-align-middle">
                    <a
                      href="#"
                      className="button scroll-link small pull-right no-margin-bottom"
                    >
                      Contact Us
                    </a>
                  </div>
                </li>
                <li className="aux-navigation hide">
                  <a
                    href="#"
                    className="navigation-show side-nav-show nav-icon"
                  >
                    <span className="icon-menu"></span>
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="navigation nav-block primary-navigation sub-menu-indicator nav-right no-margin-right">
              <ul>
                <li className="current">
                  <a href="#about">About Us</a>
                </li>
                {/* Addmission */}
                <li className="contains-sub-menu">
                  <a href="">Admission</a>
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
                <li className="contains-sub-menu">
                  <a href="">Migration</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="">All Kinds Of Visas</a>
                    </li>
                  </ul>
                </li>
                {/* Coaching */}
                <li className="contains-sub-menu">
                  <a href="">Coaching</a>
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
