import {
  ServiceImage1,
  ServiceImage2,
  ServiceImage3,
  ServiceImage4,
  ShapeIcon1,
} from "src/assets/images";

import "./style.css";

const Services = () => {
  const serviceItems = [
    {
      image: ServiceImage1,
      title: "Individual Tailoring:",
      text: "suits, jackets, trousers, shirts, coats.",
    },
    {
      image: ServiceImage2,
      title: "The silhouette and shape of the unique cut.",
    },
    {
      image: ServiceImage3,
      title: "The silhouette and shape of the unique cut.",
    },
    {
      image: ServiceImage4,
      title: "Handmade",
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
          <div className="sec-title">Our Services</div>
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
