import React, { Component } from "react";
import Hero from "./Hero";
import Recommended from "./Recommended";
import PopLocation from "./PopLocation";

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
      </div>
    );
  }
}

export default Landing;
