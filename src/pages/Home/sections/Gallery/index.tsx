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
        <div className="sub-title">Checkout our Products</div>
        <div className="sec-title">Our Products</div>
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

      <div className="text-center mt-20">
        <div className="sec-title-dec">
          <img src={ShapeIcon1} alt="Arrow Shape Icon" />
        </div>
        <div className="sec-title">And Details</div>
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
