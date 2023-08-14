import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { BarIconBlack, BarIconWhite, Logo, LogoClear } from "src/assets/images";

import MenuContent from "./MenuContent";

import "./style.css";

const Header = () => {
  const location = useLocation();

  const isHome = location.pathname.includes("home");

  const [posY, setPosY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPosY(window.scrollY);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    if (mobileMenu) {
      document.querySelector("body")?.classList.add("mobile-menu-visible");
    } else {
      document.querySelector("body")?.classList.remove("mobile-menu-visible");
    }
  };

  return (
    <header
      className={`main-header ${isHome ? "header-style-two" : "header-style-one"} ${
        posY > 100 && "fixed-header"
      }`}>
      {/* Header Top */}
      <div className={isHome ? "header-top-two" : "header-top"}>
        <div className="auto-container">
          <div className="inner-container">
            <div className="left-column">
              {!isHome && (
                <ul className="contact-info">
                  <li>
                    <i className="flaticon-pin"></i>Via Caduti Del Lavoro 8
                  </li>
                  <li>
                    <a href="mailto:info@sartoriamonterado.it">
                      <i className="flaticon-email"></i>info@sartoriamonterado.it
                    </a>
                  </li>
                </ul>
              )}
            </div>

            {isHome && (
              <div className="middle-column">
                {/* Logo */}
                <div className="logo-box">
                  <div className="logo">
                    <a href="#" title="Logo">
                      <img src={LogoClear} className="logo-home" alt="Sartoria Monterado" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            <div className="right-column"></div>
          </div>
        </div>
      </div>

      {/* Header Upper */}
      <div className="header-upper">
        <div className="auto-container">
          <div className="inner-container">
            <div
              className={`${!isHome ? "left-column" : "inner-container"}`}
              style={{ width: "100%" }}>
              {/* Logo */}
              <div className={`logo-box ${isHome && "d-none"}`}>
                <div className="logo">
                  {isHome ? (
                    <a href="#">
                      <img src={LogoClear} className="logo-home" alt="Sartoria Monterado" />
                    </a>
                  ) : (
                    <a href="#">
                      <img src={Logo} alt="Sartoria Monterado" />
                    </a>
                  )}
                </div>
              </div>

              {/* Nav Box */}
              <div className="nav-outer">
                {/* Mobile Navigation Toggler */}
                <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                  <img src={isHome ? BarIconWhite : BarIconBlack} alt="Bar Icon" />
                </div>

                {/* Main Menu */}
                <nav className="main-menu navbar-expand-md navbar-light">
                  <MenuContent />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <div className={`sticky-header  ${posY > 100 && "animated slideInDown"}`}>
        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container">
              {/* Logo */}
              <div className="logo-box">
                <div className="logo">
                  {isHome ? (
                    <a href="#">
                      <img src={LogoClear} className="sticky-logo-home" alt="Sartoria Monterado" />
                    </a>
                  ) : (
                    <a href="#">
                      <img src={Logo} alt="Sartoria Monterado" />
                    </a>
                  )}
                </div>
              </div>
              <div className="right-column">
                {/* Nav Box */}
                <div className="nav-outer">
                  {/* Mobile Navigation Toggler */}
                  <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                    <img src={isHome ? BarIconWhite : BarIconBlack} alt="Bar Icon" />
                  </div>

                  {/* Main Menu */}
                  <nav className="main-menu navbar-expand-md navbar-light">
                    <MenuContent />
                  </nav>
                </div>
                {!isHome && <div className="navbar-right"></div>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu  */}
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={toggleMobileMenu}></div>
        <div className="close-btn" onClick={toggleMobileMenu}>
          <i className="icon fal fa-times"></i>
        </div>

        <nav className="menu-box">
          <div className="nav-logo">
            <a href="#">
              <img src={LogoClear} style={{ width: "50%" }} alt="Sartoria Monterado" />
            </a>
          </div>
          <div className="menu-outer">
            <MenuContent />
          </div>
        </nav>
      </div>

      <div className="nav-overlay">
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
      </div>
    </header>
  );
};

export default Header;
