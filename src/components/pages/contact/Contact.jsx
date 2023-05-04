import React from "react";
import ContectHeader from "./sections/ContectHeader";
import ContactForm from "./sections/ContactForm";
import MapSection from "../common/sections/MapSection";

const Contact = () => {
  return (
    <div className="content clearfix">
      <ContectHeader />
      <ContactForm />
      <MapSection />
    </div>
  );
};

export default Contact;
