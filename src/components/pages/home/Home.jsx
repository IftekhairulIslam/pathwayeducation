import React from "react";
import SliderSection from "./sections/SliderSection";
import OurPresenceSection from "./sections/OurPresenceSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import Testimonials from "./sections/Testimonials";
import Partners from "./sections/Partners";

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
