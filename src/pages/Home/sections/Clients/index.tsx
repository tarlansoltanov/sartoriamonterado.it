import { useEffect } from "react";

import Swiper, { Autoplay } from "swiper";
import "swiper/css";

import {
  ClientImage1,
  ClientImage2,
  ClientImage3,
  ClientImage4,
  ClientImage5,
  ClientImage6,
  ClientImage7,
  ClientImage8,
  ClientImage9,
  ClientImage10,
  ClientImage11,
  ClientImage12,
  ClientImage13,
} from "@/assets/images";

import "./style.css";

const Clients = () => {
  const slider = new Swiper(".theme_carousel", {
    modules: [Autoplay],
    loop: true,
    direction: "horizontal",
    grabCursor: true,
    spaceBetween: 30,
    autoHeight: true,
    autoplay: {
      delay: 3000,
    },
    preventClicks: true,
    resistance: true,
    resistanceRatio: 0.6,
    speed: 1000,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });

  const clientItems = [
    {
      image: ClientImage1,
    },
    {
      image: ClientImage2,
    },
    {
      image: ClientImage3,
    },
    {
      image: ClientImage4,
    },
    {
      image: ClientImage5,
    },
    {
      image: ClientImage6,
    },
    {
      image: ClientImage7,
    },
    {
      image: ClientImage8,
    },
    {
      image: ClientImage9,
    },
    {
      image: ClientImage10,
    },
    {
      image: ClientImage11,
    },
    {
      image: ClientImage12,
    },
    {
      image: ClientImage13,
    },
  ];

  useEffect(() => {
    slider.init();
  }, [slider]);

  return (
    <section id="clients" className="client-logo">
      <div className="auto-container" style={{ overflow: "hidden" }}>
        <div className="swiper-container theme_carousel">
          <div className="swiper-wrapper">
            {clientItems.map((item, index) => (
              <div className="swiper-slide image" key={index}>
                <img src={item.image} alt="Client Logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
