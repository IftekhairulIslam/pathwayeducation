import React from "react";
import AboutSection from "./sections/AboutSection";
import OurPresenceSection from "./sections/OurPresenceSection";
import Partners from "./sections/Partners";
import ServicesSection from "./sections/ServicesSection";
import SliderSection from "./sections/SliderSection";
import Testimonials from "./sections/Testimonials";

const Home = () => {
  return (
    <div className="content clearfix">
      <SliderSection />
      <OurPresenceSection />
      <AboutSection />
      <ServicesSection />
      <Testimonials />
      <Partners />
    </div>
  );
};

export default Home;
