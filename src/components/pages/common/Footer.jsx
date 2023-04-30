import React from "react";
import { logoLight } from "./../../../utilities/imageSources";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top two-columns-on-tablet">
        <div className="row flex">
          <div className="column width-4">
            <div className="widget">
              <a className="widget-title weight-light" href="/">
                <img src={logoLight} alt="Pathway Eduction" />
              </a>
            </div>
          </div>

          <div className="column width-4 center">
            <div className="widget">
              <h4 className="widget-title">Address</h4>
              <p className="no-margin-bottom">
                House-08 (Monico Qulthum), 5th Floor, Progoti Sarani, <br />
                Baridhara (J Block), Notun Bazar, Dhaka-1212, <br />
                Dhaka Division, Bangladesh.
              </p>
              <p className="no-margin-bottom">+8801323299761, +8801886177303</p>
              <p>
                <a href="mailto:#">pathwayeducationbd@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="column width-4 right">
            <div className="widget">
              <h4 className="widget-title">More Links</h4>
              <ul>
                <li>
                  <a href="about">About Us</a>
                </li>
                <li>
                  <a href="admission">Admission</a>
                </li>
                <li>
                  <a href="migration">Migration</a>
                </li>
                <li>
                  <a href="coaching">Coaching</a>
                </li>
                <li>
                  <a href="travels">Tourist & Travels</a>
                </li>
                <li>
                  <a href="contact">Contact Us</a>
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
                {/* <li>
                  <a href="#">
                    <span className="icon-twitter small"></span>
                  </a>
                </li> */}
                <li>
                  <a href="https://www.facebook.com/pathwayeducation.com.bd">
                    <span className="icon-facebook small"></span>
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <span className="icon-youtube small"></span>
                  </a>
                </li> */}
                {/* <li>
                  <a href="#">
                    <span className="icon-vimeo small"></span>
                  </a>
                </li> */}
                <li>
                  <a href="https://www.instagram.com/pathwayeducationbd">
                    <span className="icon-instagram small"></span>
                  </a>
                </li>
              </ul>
              <p className="copyright pull-left clear-float-on-mobile">
                &copy; Pathway Education. All Rights Reserved.{" "}
                <a href="#">Terms &amp; Conditions</a> | Developed by{" "}
                <a
                  href="https://iftekhairul.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  iftekhairul.net
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
