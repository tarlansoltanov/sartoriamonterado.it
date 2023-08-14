import React from "react";

import { Link } from "react-router-dom";

import { PageTitle } from "src/components";

import { ErrorBackground } from "src/assets/images";

import "./style.css";

const Error = () => {
  return (
    <React.Fragment>
      {/* Page Title */}
      <PageTitle title="Page Not Found" background={ErrorBackground} />

      {/* Error Section */}
      <section className="error-section">
        <div className="auto-container">
          <div className="content">
            <h1>404</h1>

            <h2>Oops! This page can’t be found</h2>

            <div className="text">Sorry, but the page you are looking for does not exists!</div>

            <Link to="/" className="home-btn">
              <span> Go to home page</span>
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Error;
