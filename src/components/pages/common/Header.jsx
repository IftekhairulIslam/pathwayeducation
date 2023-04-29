import React from "react";
import { Link, useLocation } from "react-router-dom";
import { logoDark, logoLight } from "./../../../utilities/imageSources";
import HeaderInnerTop from "./HeaderInnerTop";
import Navigation from "./Navigation";

const Header = () => {
  const location = useLocation();
  const isHomePage = ["/"].includes(location.pathname);
  return (
    <header
      className={
        "header header-absolute header-fixed-on-mobile" +
        (isHomePage ? " header-transparent" : "")
      }
      data-helper-in-threshold="200"
      data-helper-out-threshold="500"
      data-sticky-threshold="200"
      data-bkg-threshold="100"
      data-compact-threshold="100"
    >
      {isHomePage && <HeaderInnerTop />}
      <div className="header-inner">
        <div className="row nav-bar">
          <div className="column width-12 nav-bar-inner">
            <div className="logo">
              <div className="logo-inner">
                <a href="/">
                  <img src={logoDark} alt="Pathway Education" />
                </a>
                <a href="/">
                  <img src={logoLight} alt="Pathway Education" />
                </a>
              </div>
            </div>
            <nav className="navigation nav-block secondary-navigation nav-right">
              <ul>
                <li>
                  <div className="v-align-middle">
                    <Link
                      to="/contact"
                      className="button scroll-link-OFF small pull-right no-margin-bottom"
                    >
                      Contact Us
                    </Link>
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
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
