import { useTranslation } from "react-i18next";

// Assets
import {
  ServiceImage1,
  ServiceImage2,
  ServiceImage3,
  ServiceImage4,
  ShapeIcon1,
} from "@/assets/images";

// Styles
import "./style.css";

const Services = () => {
  const { t } = useTranslation();

  const serviceItems = [
    {
      image: ServiceImage1,
      title: t("pages.home.services.item1.title"),
      text: t("pages.home.services.item1.subtitle"),
    },
    {
      image: ServiceImage2,
      title: t("pages.home.services.item2.title"),
    },
    {
      image: ServiceImage3,
      title: t("pages.home.services.item3.title"),
    },
    {
      image: ServiceImage4,
      title: t("pages.home.services.item4.title"),
    },
  ];

  return (
    <section className="service-offer-section">
      <div className="auto-container">
        <div className="text-center">
          <div className="sec-title-dec">
            <img src={ShapeIcon1} alt="Arrow Shape Icon" />
          </div>
          <div className="sub-title"></div>
          <div className="sec-title">{t("pages.home.services.title")}</div>
        </div>

        <div className="row">
          {serviceItems.map((item, index) => (
            <div className="col-lg-6" key={index}>
              <div className="service-block-three">
                <div className="service-block-three_border_top"></div>
                <div className="service-block-three_border_left"></div>
                <div className="service-block-three_border_right"></div>
                <div className="service-block-three_border_bottom"></div>
                <div className="service-block-three_image img_hover_2">
                  <img src={item.image} alt="Service Image" />
                </div>
                <h4 className="service-block-three_title">{item.title}</h4>
                {item.text && <div className="service-block-three_text">{item.text}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
