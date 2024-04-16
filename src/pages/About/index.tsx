import React from "react";
import { useTranslation } from "react-i18next";

// Assets
import {
  AboutBackground,
  HistoryImage1,
  HistoryImage2,
  HistoryImage3,
  HistoryImage4,
  HistoryImage5,
  HistoryImage6,
  HistoryImage7,
  HistoryImage8,
  HistoryImage9,
  HistoryImage10,
  HistoryImage11,
} from "@/assets/images";

// Components
import PageTitle from "@/components/PageTitle";

// Styles
import "./style.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <PageTitle title={t("about")} background={AboutBackground} />

      {/* History Section */}
      <div className="about-page-container">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="history-section">
                <img className="history-header-image" src={HistoryImage1} alt="History Image" />

                <h2 className="history-section-title">{t("pages.about.title")}</h2>

                <div className="history-section-description">
                  <img className="image image-left" src={HistoryImage2} alt="History Image" />
                  {t("pages.about.text1")}
                </div>

                <div className="history-section-description">
                  {t("pages.about.text2")}
                  <img className="image image-right" src={HistoryImage3} alt="History Image" />
                </div>

                <div className="history-section-description" style={{ marginTop: "65px" }}>
                  {t("pages.about.text3")}
                </div>

                <div className="history-section-description">
                  <img className="image image-left" src={HistoryImage4} alt="History Image" />
                  {t("pages.about.text4")}
                </div>

                <div className="history-section-description mt-70">
                  <img className="image image-right" src={HistoryImage5} alt="History Image" />
                </div>

                <div className="history-section-description">{t("pages.about.text5")}</div>

                <div className="history-section-description">
                  <img
                    className="image image-left"
                    src={HistoryImage6}
                    alt="History Image"
                    style={{ objectFit: "contain" }}
                  />
                  {t("pages.about.text6")}
                </div>

                <div className="history-section-description">
                  <img className="image image-right" src={HistoryImage7} alt="History Image" />
                </div>

                <div className="history-section-description">{t("pages.about.text7")}</div>

                <div className="history-section-description">
                  {t("pages.about.text8")}
                  <img
                    className="image image-left"
                    src={HistoryImage8}
                    alt="History Image"
                    style={{ objectFit: "contain" }}
                  />
                  {t("pages.about.text9")}
                </div>

                <img className="image image-right mt-70" src={HistoryImage9} alt="History Image" />

                <div className="history-section-description mt-100">{t("pages.about.text10")}</div>

                <img className="image image-left mt-70" src={HistoryImage10} alt="History Image" />

                <div className="history-section-description mt-100">{t("pages.about.text11")}</div>

                <p className="history-section-description mt-50">{t("pages.about.text12")}</p>

                <img className="history-footer-image" src={HistoryImage11} alt="History Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
