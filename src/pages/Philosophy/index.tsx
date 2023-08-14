import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import AOS from "aos";

import { ShapeIcon1, PhilosophyBackground, PhilosophyImage } from "src/assets/images";

import "aos/dist/aos.css";
import "./style.css";

const Philosophy = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      {/* Page Title */}
      <section className="page-title">
        <div
          className="bg"
          style={{
            backgroundImage: `url(${PhilosophyBackground})`,
            backgroundPosition: "center",
          }}></div>
        <div className="auto-container">
          <div className="content-box">
            <div className="content-wrapper">
              <ul className="bread-crumb">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Philosophy</li>
              </ul>
              <div className="title">
                <h1>Philosophy</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="introduction-section-two">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8">
              <div
                className="sec-title-box"
                data-aos="fade-up"
                data-aos-delay="0ms"
                data-aos-duration="1500">
                <div className="sec-title-dec">
                  <img src={ShapeIcon1} alt="Arrow Shape Icon" />
                </div>
                <div className="sub-title">Our Philosophy</div>
              </div>
              <div className="introduction-section-two_description mb-30">
                The philosophy of Sartoria Monterado embodies Italian elegance. The uniqueness of
                the designed details has stood the test of time. A classic silhouette is combined
                with exceptional comfort. In every detail, under every stitch and between the
                textures of every fabric there is it's a story: it's the existential spirit of the
                craftsmen, the hands, the passion and the experience of those who love their work
                and have decided to make dreams come true.
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="introduction-block-two_image-wrapper"
                data-aos="fade-up"
                data-aos-delay="0ms"
                data-aos-duration="1500ms">
                <div className="introduction-block-two_image img_hover_shine">
                  <img src={PhilosophyImage} alt="Philosophy Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Philosophy;
