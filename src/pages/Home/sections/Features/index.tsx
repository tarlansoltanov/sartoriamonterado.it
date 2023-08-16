import { useTranslation } from "react-i18next";

import { FeatureImage1, FeatureImage2, FeatureImage3 } from "src/assets/images";

import "./style.css";

const Features = () => {
  const { t } = useTranslation();

  const featureItems = [
    {
      image: FeatureImage1,
      title: t("pages.home.features.item1.title"),
      subtitle: t("pages.home.features.item1.subtitle"),
    },
    {
      image: FeatureImage2,
      title: t("pages.home.features.item2.title"),
      subtitle: t("pages.home.features.item2.subtitle"),
    },
    {
      image: FeatureImage3,
      title: t("pages.home.features.item3.title"),
      subtitle: t("pages.home.features.item3.subtitle"),
    },
  ];

  return (
    <section className="features-section">
      <div className="auto-container">
        <div className="row justify-content-center">
          {featureItems.map((item, index) => (
            <div className="col-md-4 col-sm-6 d-flex justify-content-center" key={index}>
              <div className="feature-block">
                <div className="feature-block_image">
                  <img src={item.image} alt="Feature Image" />
                </div>
                <h4 className="feature-block_title">{item.title}</h4>
                <div className="feature-block_hover-content">
                  <h4 className="feature-block_title">{item.subtitle}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
