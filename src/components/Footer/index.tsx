import { FooterBackground } from "src/assets/images";

import "./style.css";

const Footer = () => {
  return (
    <footer className="main-footer" style={{ backgroundImage: `url("${FooterBackground}")` }}>
      <div className="auto-container">
        {/* Widgets Section */}
        <div className="widgets-section">
          <div className="row">
            <div className="column col-lg-12 col-md-12">
              <div className="row">
                {/* Services Widget */}
                <div className="col-md-6">
                  <div className="widget links-widget">
                    <h4 className="widget-title">Our Services</h4>
                    <div className="widget-content">
                      <ul>
                        <li>
                          <a href="#">Fabrics</a>
                        </li>
                        <li>
                          <a href="#">Bespoke</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Links Widget */}
                <div className="col-md-6">
                  <div className="widget links-widget">
                    <h4 className="widget-title">Links</h4>
                    <div className="widget-content">
                      <ul>
                        <li>
                          <a href="#">About</a>
                        </li>
                        <li>
                          <a href="#">Philosophy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-border-bottom mb-40"></div>
              <div className="row">
                {/* Slogan */}
                <div className="col-md-6">
                  <div className="contact-widget_slogan mb-40">Disegni tagliati su misura</div>
                </div>

                {/* Mail */}
                <div className="col-md-6">
                  <div className="contact-widget_mail-title">Send us an email</div>
                  <div className="contact-widget_mail mb-40">
                    <a href="mailto:info@sartoriamonterado.it">info@sartoriamonterado.it</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="copyright">© Copyright 2023 by Sartoria Monterado</div>
          <div className="copyright">
            Design and Develop by <a href="https://codeshift.az">CodeShift</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
