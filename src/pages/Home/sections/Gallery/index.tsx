import { useTranslation } from "react-i18next";

import { Fancybox } from "src/components";

import {
  ProcessImage1,
  ProcessImage2,
  ProcessImage3,
  ProcessImage4,
  GalleryImage1,
  GalleryImage2,
  GalleryImage3,
  GalleryImage4,
  ShapeIcon1,
} from "src/assets/images";

import "./style.css";

const Gallery = () => {
  const { t } = useTranslation();

  const processItems = [
    {
      image: ProcessImage1,
      position: "top",
    },
    {
      image: ProcessImage2,
      position: "top",
    },
    {
      image: ProcessImage3,
      position: "top",
    },
    {
      image: ProcessImage4,
      position: "top",
    },
  ];

  const galleryItems = [
    {
      image: GalleryImage1,
      position: "top",
    },
    {
      image: GalleryImage2,
      position: "top",
    },
    {
      image: GalleryImage3,
      position: "top",
    },
    {
      image: GalleryImage4,
      position: "right",
    },
  ];

  return (
    <section className="gallery-section">
      <div className="text-center">
        <div className="sec-title-dec">
          <img src={ShapeIcon1} alt="Arrow Shape Icon" />
        </div>
        <div className="sub-title">{t("pages.home.gallery.subtitle1")}</div>
        <div className="sec-title">{t("pages.home.gallery.title1")}</div>
      </div>

      <div className="auto-continer">
        <Fancybox
          className="row row-3"
          options={{
            Carousel: {
              infinite: false,
            },
          }}>
          {processItems.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="gallery-block gallery-overlay">
                <div className="gallery-block_image">
                  <img
                    src={item.image}
                    alt="Process Image"
                    style={{ objectPosition: item.position }}
                  />
                </div>

                <div className="overlay-box">
                  <a href={item.image} className="link" data-fancybox="process">
                    <div className="overlay-inner">
                      <div className="content">
                        <span className="icon fal fa-plus"></span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Fancybox>
      </div>

      <div className="text-center" style={{ marginTop: "20px" }}>
        <div className="sec-title-dec">
          <img src={ShapeIcon1} alt="Arrow Shape Icon" />
        </div>
        <div className="sec-title">{t("pages.home.gallery.title2")}</div>
      </div>

      <div className="auto-continer">
        <Fancybox
          className="row row-3"
          options={{
            Carousel: {
              infinite: false,
            },
          }}>
          {galleryItems.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="gallery-block gallery-overlay">
                <div className="gallery-block_image">
                  <img
                    src={item.image}
                    alt="Gallery Image"
                    style={{ objectPosition: item.position }}
                  />
                </div>

                <div className="overlay-box">
                  <a href={item.image} className="link" data-fancybox="gallery">
                    <div className="overlay-inner">
                      <div className="content">
                        <span className="icon fal fa-plus"></span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Fancybox>
      </div>
    </section>
  );
};

export default Gallery;
