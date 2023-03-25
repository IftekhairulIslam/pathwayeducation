import React from "react";
import About from "./sections/About";
import OurPresenceSection from "./sections/OurPresenceSection";
import Partners from "./sections/Partners";
import SliderSection from "./sections/SliderSection";

const Home = () => {
  return (
    <div className="content clearfix">
      <SliderSection />
      <OurPresenceSection />
      <About />
      <Partners />
    </div>
  );
};

export default Home;
