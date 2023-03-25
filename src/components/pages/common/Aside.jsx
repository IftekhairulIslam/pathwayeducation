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
            <ul>
              <li>
                <a href="#" className="contains-sub-menu">
                  About Us
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="index-mobile-application.html">
                      Mobile Application
                    </a>
                  </li>
                  <li>
                    <a href="index-web-application.html">Web Application</a>
                  </li>
                  <li>
                    <a href="index-barber-shop.html">Barber Shop</a>
                  </li>
                  <li>
                    <a href="index-design-agency.html">Agency</a>
                  </li>
                  <li className="current">
                    <a href="index-travel-agency.html">Travel Agency</a>
                  </li>
                  <li>
                    <a href="index-restaurant.html">Restaurant</a>
                  </li>
                  <li>
                    <a href="index-resume.html">Resume</a>
                  </li>
                  <li>
                    <a href="index-photo-studio.html">Photo Studio</a>
                  </li>
                  <li>
                    <a href="index-architecture.html">Architecture</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="contains-sub-menu">
                  Pages
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="about-style-one.html">About Original</a>
                  </li>
                  <li>
                    <a href="about-style-two.html">About Style 2</a>
                  </li>
                  <li>
                    <a href="about-style-three.html">About Style 3</a>
                  </li>
                  <li>
                    <a href="services-style-one.html">Services Original</a>
                  </li>
                  <li>
                    <a href="services-style-two.html">Services Style 2</a>
                  </li>
                  <li>
                    <a href="services-style-three.html">Services Style 3</a>
                  </li>
                  <li>
                    <a href="contact-style-two.html">Contact Style 2</a>
                  </li>
                  <li>
                    <a href="contact-style-three.html">Contact Style 3</a>
                  </li>
                  <li>
                    <a href="404.html">404</a>
                  </li>
                  <li>
                    <a href="500.html">500</a>
                  </li>
                  <li>
                    <a href="maintenance.html">Maintenance</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="contains-sub-menu">
                  Blog
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog.html">3 Column Grid</a>
                  </li>
                  <li>
                    <a href="blog-four-columns-full-width.html">
                      4 Column Full Width Grid
                    </a>
                  </li>
                  <li>
                    <a href="blog-sidebar-right-with-media.html">
                      Blog Index Sidebar Right
                    </a>
                  </li>
                  <li>
                    <a href="blog-sidebar-left-with-media.html">
                      Blog Index Sidebar Left
                    </a>
                  </li>
                  <li>
                    <a href="blog-wide-no-sidebar.html">Blog Without Sidebar</a>
                  </li>
                  <li>
                    <a href="blog-masonry-creative.html">Blog Creative</a>
                  </li>
                  <li>
                    <a href="blog-masonry-creative-with-parallax.html">
                      Blog Creative 2
                    </a>
                  </li>
                  <li>
                    <a href="blog-single-post-sidebar-right.html">
                      Single Post Sidebar Right
                    </a>
                  </li>
                  <li>
                    <a href="blog-single-post-sidebar-left.html">
                      Single Post Sidebar Left
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="contains-sub-menu">
                  Shop
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="shop-grid.html">Shop Grid</a>
                  </li>
                  <li>
                    <a href="shop-creative.html">Shop Creative</a>
                  </li>
                  <li>
                    <a href="shop-sidebar-right.html">Shop Sidebar Right</a>
                  </li>
                  <li>
                    <a href="single-product.html">Single Product</a>
                  </li>
                  <li>
                    <a href="single-product-with-gallery.html">
                      Product With Gallery
                    </a>
                  </li>
                  <li>
                    <a href="single-product-with-header.html">
                      Product With Header
                    </a>
                  </li>
                  <li>
                    <a href="single-product-with-parallax.html">
                      Product With Parallax
                    </a>
                  </li>
                  <li>
                    <a href="single-product-on-sale.html">Product On Sale</a>
                  </li>
                  <li>
                    <a href="single-product-no-stock.html">
                      Product Out Of Stock
                    </a>
                  </li>
                  <li>
                    <a href="cart.html">Cart</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="contains-sub-menu">
                  Folio
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="portfolio-three-columns.html">
                      3 Column Grid Default
                    </a>
                  </li>
                  <li>
                    <a href="portfolio-three-columns-alternative.html">
                      3 Column Grid Alt
                    </a>
                  </li>
                  <li>
                    <a href="portfolio-three-columns-full-width.html">
                      3 Column Grid Full Width
                    </a>
                  </li>
                  <li>
                    <a href="portfolio-three-columns-full-width-no-margins.html">
                      3 Column Grid Full Width No Margins
                    </a>
                  </li>
                  <li>
                    <a href="portfolio-four-columns-full-width-alternative.html">
                      4 Column Grid Full Width Alt
                    </a>
                  </li>
                  <li>
                    <a href="portfolio-four-columns-full-width-no-margins.html">
                      4 Column Grid Full Width No Margins
                    </a>
                  </li>
                  <li>
                    <a href="portfolio-masonry-grid.html">
                      Full Width Masonry Grid
                    </a>
                  </li>
                  <li>
                    <a href="portfolio-masonry-grid-no-margins.html">
                      Full Width Masonry Grid No Margins
                    </a>
                  </li>
                  <li>
                    <a href="project-style-one.html">Project Style One</a>
                  </li>
                  <li>
                    <a href="project-style-two.html">Project Style Two</a>
                  </li>
                  <li>
                    <a href="project-style-three.html">Project Style Three</a>
                  </li>
                  <li>
                    <a href="project-style-four.html">Project Style Four</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="contains-sub-menu">
                  Elements
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="elements-accordions.html">Accordions</a>
                  </li>
                  <li>
                    <a href="elements-buttons.html">Buttons</a>
                  </li>
                  <li>
                    <a href="elements-feature-columns.html">Feature Columns</a>
                  </li>
                  <li>
                    <a href="elements-footers.html">Footers</a>
                  </li>
                  <li>
                    <a href="elements-forms.html">Forms</a>
                  </li>
                  <li>
                    <a href="elements-lightbox.html">Lightbox</a>
                  </li>
                  <li>
                    <a href="elements-maps.html">Maps</a>
                  </li>
                  <li>
                    <a href="elements-pricing-tables.html">Pricing Tables</a>
                  </li>
                  <li>
                    <a href="elements-progress-bars.html">Progress Bars</a>
                  </li>
                  <li>
                    <a href="elements-rollovers.html">Rollovers</a>
                  </li>
                  <li>
                    <a href="elements-signup-forms.html">Subscribe Forms</a>
                  </li>
                  <li>
                    <a href="elements-slider.html">Slider</a>
                  </li>
                  <li>
                    <a href="elements-tabs.html">Tabs</a>
                  </li>
                  <li>
                    <a href="elements-testimonials.html">Testimonials</a>
                  </li>
                  <li>
                    <a href="elements-video.html">Video</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="side-navigation-footer">
            <ul className="social-list list-horizontal">
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
                  <span className="icon-instagram small"></span>
                </a>
              </li>
            </ul>
            <p className="copyright no-margin-bottom">
              &copy; 2014 THEMEMOUNTAIN.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
