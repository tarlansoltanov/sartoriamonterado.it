import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollMiddleWare = ({ children }: { children: React.ReactElement }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        window.scrollTo({ top: element.getBoundingClientRect().top - 130, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return <React.Fragment>{children}</React.Fragment>;
};
