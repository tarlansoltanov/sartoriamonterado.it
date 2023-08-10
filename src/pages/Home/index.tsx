import React from "react";

import Banner from "./sections/Banner";
import Features from "./sections/Features";

import "./style.css";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Features />
    </React.Fragment>
  );
};

export default Home;
