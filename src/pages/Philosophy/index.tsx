import React, { useEffect } from "react";

import { useTranslation } from "react-i18next";

import AOS from "aos";

import { PageTitle } from "src/components";

import { ShapeIcon1, PhilosophyBackground, PhilosophyImage } from "src/assets/images";

import "aos/dist/aos.css";
import "./style.css";

const Philosophy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <PageTitle title={t("philosophy")} background={PhilosophyBackground} />

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

                <div className="sub-title">{t("pages.philosophy.title")}</div>
              </div>

              <div className="introduction-section-two_description">
                <p>{t("pages.philosophy.text")}</p>
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
