import React from "react";
import Hero from "./Hero";
import Recommended from "./Recommended";
import PopLocation from "./PopLocation";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Recommended />
      <PopLocation />
      <Footer />
    </div>
  );
};

export default Landing;
