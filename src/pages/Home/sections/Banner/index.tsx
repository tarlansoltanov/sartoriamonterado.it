import { useEffect } from "react";

import Swiper, { Navigation, Autoplay } from "swiper";

import { SlideImage1, SlideImage2 } from "src/assets/images";

import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

const Banner = () => {
  const bannerItems = [
    {
      image: SlideImage1,
      title: "A suit is an expression of personality",
      subtitle: "Custom tailoring is part of our sartorial culture",
    },
    {
      image: SlideImage2,
      title: "Individual Tailoring",
      subtitle: "This is the pinnacle of tailoring",
    },
  ];

  const slider = new Swiper(".banner-slider", {
    modules: [Navigation, Autoplay],
    preloadImages: false,
    loop: true,
    grabCursor: true,
    centeredSlides: false,
    resistance: true,
    resistanceRatio: 0.6,
    speed: 1400,
    spaceBetween: 0,
    parallax: false,
    effect: "slide",
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".banner-slider-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".banner-slider-button-next",
      prevEl: ".banner-slider-button-prev",
    },
  });

  useEffect(() => {
    slider.init();
  }, []);

  return (
    <section className="banner-section style-two">
      <div className="swiper-container banner-slider">
        <div className="swiper-wrapper">
          {bannerItems.map((item, index) => (
            <div
              className="swiper-slide"
              style={{ backgroundImage: `url(${item.image})` }}
              key={index}>
              <div className="content-outer">
                <div className="content-box text-center justify-content-center">
                  <div className="inner">
                    <h4>{item.title}</h4>
                    <h2 style={{ color: "#ffffff" }}>{item.subtitle}</h2>
                    <div className="link-box"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="banner-slider-nav">
        <div className="banner-slider-control banner-slider-button-prev">
          <span>
            <i className="fas fa-arrow-right"></i>
          </span>
        </div>

        <div className="banner-slider-control banner-slider-button-next">
          <span>
            <i className="fas fa-arrow-right"></i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
