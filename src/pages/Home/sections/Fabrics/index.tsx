import { FabricsImage, ShapeIcon1 } from "src/assets/images";

import "./style.css";

const Fabrics = () => {
  const fabricsData = {
    image: FabricsImage,
    title: "Fabrics",
    text: "Because we strive for craftsmanship, quality materials and attention to detail with the same passion we did ninety years ago: we offer expertise and excellence in tailoring, combined with a selection of the world's finest and most renowned fabrics.",
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
