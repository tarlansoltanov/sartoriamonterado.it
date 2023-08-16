import { useTranslation } from "react-i18next";

import { FabricsImage, ShapeIcon1 } from "src/assets/images";

import "./style.css";

const Fabrics = () => {
  const { t } = useTranslation();

  const fabricsData = {
    image: FabricsImage,
    title: t("pages.home.fabrics.title"),
    text: t("pages.home.fabrics.text"),
  };

  return (
    <section id="fabrics" className="introduction-section">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="introduction-block_image">
              <div className="img_hover_shine">
                <img src={fabricsData.image} alt="Fabric Image" />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="introduction-block">
              <div className="sec-title-dec">
                <img src={ShapeIcon1} alt="Arrow Shape" />
              </div>
              <div className="sec-title">{fabricsData.title}</div>
              <div className="introduction-block_text">{fabricsData.text}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fabrics;
