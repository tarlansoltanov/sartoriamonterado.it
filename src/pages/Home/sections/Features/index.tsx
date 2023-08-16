import { FeatureImage1, FeatureImage2, FeatureImage3 } from "src/assets/images";

import "./style.css";

const Features = () => {
  const featureItems = [
    {
      image: FeatureImage1,
      title: "Development of an individual cut",
      subtitle: "Development of an individual cut",
    },
    {
      image: FeatureImage2,
      title: "Clothes made by hand according to your exact requirements",
      subtitle:
        "Handmade garments to your exact specifications require over 80 hours of delicate and precise work",
    },
    {
      image: FeatureImage3,
      title: "Sartoria Monterado custom made suits for men",
      subtitle:
        "Sartoria Monterado bespoke suits for men who value exclusivity and attention to detail",
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
