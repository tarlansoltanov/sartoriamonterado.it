import React from "react";

import Banner from "./sections/Banner";
import Features from "./sections/Features";
import Fabrics from "./sections/Fabrics";
import Services from "./sections/Services";

import "./style.css";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Features />
      <Fabrics />
      <Services />
    </React.Fragment>
  );
};

export default Home;
