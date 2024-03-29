import React from "react";

const ContactForm = () => {
  return (
    <section className="section-block replicable-content contact-2">
      <div className="row">
        <div className="column width-8 offset-2 center">
          <div className="contact-form-container">
            <form className="contact-form" action="" method="post" noValidate>
              <div className="row">
                <div className="column width-12">
                  <input
                    type="text"
                    name="name"
                    className="form-fname form-element large"
                    placeholder="First Name*"
                    tabIndex="1"
                    required
                  />
                </div>

                <div className="column width-12">
                  <input
                    type="text"
                    name="mobile"
                    className="form-website form-element large"
                    placeholder="Mobile*"
                    tabIndex="4"
                    required
                  />
                </div>
                <div className="column width-12">
                  <input
                    type="email"
                    name="email"
                    className="form-email form-element large"
                    placeholder="Email address*"
                    tabIndex="3"
                    required
                  />
                </div>
                <div className="column width-6">
                  <input
                    type="text"
                    name="honeypot"
                    className="form-honeypot form-element large"
                  />
                </div>
              </div>
              <div className="row">
                <div className="column width-12">
                  <div className="field-wrapper">
                    <textarea
                      name="message"
                      className="form-message form-element large"
                      placeholder="Message*"
                      tabIndex="5"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="column width-12">
                  <input
                    type="submit"
                    value="Send Email"
                    className="form-submit button medium bkg-charcoal bkg-hover-theme color-white color-hover-white"
                  />
                </div>
              </div>
            </form>
            <div className="form-response center"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
