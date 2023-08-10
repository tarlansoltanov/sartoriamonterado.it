import React from "react";

import Banner from "./sections/Banner";
import Features from "./sections/Features";
import Fabrics from "./sections/Fabrics";

import "./style.css";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Features />
      <Fabrics />
    </React.Fragment>
  );
};

export default Home;
