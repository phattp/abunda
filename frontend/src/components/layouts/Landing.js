import React, { Component } from "react";
import Hero from "./Hero";
import Recommended from "./Recommended";
import PopLocation from "./PopLocation";
import Footer from "./Footer";

class Landing extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Hero />
        <Recommended />
        <PopLocation />
        <Footer />
      </div>
    );
  }
}

export default Landing;
