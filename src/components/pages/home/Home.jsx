import React from "react";
import SliderSection from "./sections/SliderSection";
import OurPresenceSection from "./sections/OurPresenceSection";
import AboutSection from "./sections/AboutSection";
import Testimonials from "./sections/Testimonials";
import Partners from "./sections/Partners";
import MapSection from "../common/sections/MapSection";

const Home = () => {
  return (
    <div className="content clearfix">
      <SliderSection />
      <OurPresenceSection />
      <AboutSection />
      <Testimonials />
      <Partners />
      <MapSection />
    </div>
  );
};

export default Home;
