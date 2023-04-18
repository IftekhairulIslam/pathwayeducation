import React from "react";
import { services } from "./../../../../utilities/imageSources";

const ServicesSection = () => {
  return (
    <div class="section-block replicable-content bkg-grey-ultralight">
      <div class="row">
        <div class="column width-10 offset-1 center">
          <h3 class="mb-50">Our Services</h3>
        </div>
      </div>
      <div class="row flex boxes">
        <div class="column width-4">
          <div
            class="feature-column box rounded xlarge bkg-theme color-white center horizon"
            data-animate-in="preset:slideInUpShort;duration:1000ms;delay:200ms;"
            data-threshold="1"
          >
            <div class="feature-text">
              <div class="mb-20">
                <img src={services.admission} alt="" />
              </div>
              <strong>Admission</strong>
              <p>
                Pathway Education provides admission in various kinds of
                courses...
              </p>
            </div>
          </div>
        </div>
        <div class="column width-4">
          <div
            class="feature-column box rounded xlarge bkg-theme color-white center horizon"
            data-animate-in="preset:slideInUpShort;duration:1000ms;delay:200ms;"
            data-threshold="1"
          >
            <div class="feature-text">
              <div class="mb-20">
                <img src={services.migration} alt="" />
              </div>
              <strong>Migration</strong>
              <p>
                Pathway education is the most affordable & trustworthy migration
                service...
              </p>
            </div>
          </div>
        </div>
        <div class="column width-4">
          <div
            class="feature-column box rounded xlarge bkg-theme color-white center horizon"
            data-animate-in="preset:slideInUpShort;duration:1000ms;delay:200ms;"
            data-threshold="1"
          >
            <div class="feature-text">
              <div class="mb-20">
                <img src={services.rpl} alt="" />
              </div>
              <strong>PRL</strong>
              <p>
                Pathway education is a leading provider of RPL-Recognition of
                Prior Learning...
              </p>
            </div>
          </div>
        </div>

        <div class="column width-4">
          <div
            class="feature-column box rounded xlarge bkg-theme color-white center horizon"
            data-animate-in="preset:slideInUpShort;duration:1000ms;delay:200ms;"
            data-threshold="1"
          >
            <div class="feature-text">
              <div class="mb-20">
                <img src={services.preparation} alt="" />
              </div>
              <strong>PTE/IELTS</strong>
              <p>
                Pathway also provides coaching for PTE/IELTS assisted by our
                experience faculty...
              </p>
            </div>
          </div>
        </div>
        <div class="column width-4">
          <div
            class="feature-column box rounded xlarge bkg-theme color-white center horizon"
            data-animate-in="preset:slideInUpShort;duration:1000ms;delay:200ms;"
            data-threshold="1"
          >
            <div class="feature-text">
              <div class="mb-20">
                <img src={services.courseChange} alt="" />
              </div>
              <strong>Course Change</strong>
              <p>
                Pathway Education is just a click away to help your concerns.
              </p>
            </div>
          </div>
        </div>
        <div class="column width-4">
          <div
            class="feature-column box rounded xlarge bkg-theme color-white center horizon"
            data-animate-in="preset:slideInUpShort;duration:1000ms;delay:200ms;"
            data-threshold="1"
          >
            <div class="feature-text">
              <div class="mb-20">
                <img src={services.professional} alt="" />
              </div>
              <strong>Professional Year</strong>
              <p>
                We are offering a different kind of professional year program in
                accounting engineering, IT...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
