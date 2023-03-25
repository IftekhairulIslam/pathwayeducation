import React from "react";
import { logoLight } from "./../../../utilities/imageSources";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top two-columns-on-tablet">
        <div className="row flex">
          <div className="column width-6">
            <div className="widget">
              <h4 className="widget-title weight-light">
                <img src={logoLight} alt="Pathway Eduction" />
              </h4>
            </div>
          </div>

          <div className="column width-6 right">
            <div className="widget">
              <h4 className="widget-title">More Links</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Admission</a>
                </li>
                <li>
                  <a href="#">Migration</a>
                </li>
                <li>
                  <a href="#">Coaching</a>
                </li>
                <li>
                  <a href="#">Tourist & Travels</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="row">
          <div className="column width-12">
            <div className="footer-bottom-inner center">
              <ul className="social-list list-horizontal pull-right clear-float-on-mobile no-margin-bottom">
                <li>
                  <a href="#">
                    <span className="icon-twitter small"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-facebook small"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-youtube small"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-vimeo small"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-instagram small"></span>
                  </a>
                </li>
              </ul>
              <p className="copyright pull-left clear-float-on-mobile">
                &copy; ThemeMountain. All Rights Reserved.{" "}
                <a href="#">Terms &amp; Conditions</a> |{" "}
                <a href="#">Cookie policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
