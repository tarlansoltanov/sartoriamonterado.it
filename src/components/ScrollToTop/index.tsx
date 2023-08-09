import { useEffect } from "react";

import "./style.css";

const ScrollToTop = () => {
  const offset = 220;

  useEffect(() => {
    const elem = document.querySelector(".scroll-to-top")!;

    window.addEventListener("scroll", () => {
      if (window.scrollY > offset) {
        elem.classList.remove("hide");
      } else {
        elem.classList.add("hide");
      }
    });

    elem.addEventListener("click", (e) => {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });

  return (
    <div className="scroll-to-top hide">
      <a href="#" className="back-to-top" title="Back To Top">
        <i className="fa fa-angle-up"></i>
      </a>
    </div>
  );
};

export default ScrollToTop;
