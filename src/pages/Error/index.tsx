import React from "react";

import { ErrorBackground } from "src/assets/images";

import "./style.css";

const Error = () => {
  return (
    <React.Fragment>
      {/* Page Title */}
      <section className="page-title">
        <div className="bg" style={{ backgroundImage: `url(${ErrorBackground})` }}></div>
        <div className="auto-container">
          <div className="content-box">
            <div className="content-wrapper">
              <ul className="bread-crumb">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>Page Not Found</li>
              </ul>

              <div className="title">
                <h1>Page Not Found</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Error Section */}
      <section className="error-section">
        <div className="auto-container">
          <div className="content">
            <h1>404</h1>
            <h2>Oops! This page can’t be found</h2>
            <div className="text">Sorry, but the page you are looking for does not exists!</div>
            <a href="#" className="home-btn">
              <span> Go to home page</span>
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Error;
