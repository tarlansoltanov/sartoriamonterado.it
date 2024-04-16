import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Constants
import { CONTACT_NAME, CONTACT_EMAIL, DEVELOPER_NAME, DEVELOPER_WEBSITE } from "@/constants";

// Assets
import { FooterBackground } from "@/assets/images";

// Styles
import "./style.css";

const Footer = () => {
  const { t } = useTranslation();

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
                    <h4 className="widget-title">{t("footer.services")}</h4>
                    <div className="widget-content">
                      <ul>
                        <li>
                          <Link to="/home#fabrics">{t("fabrics")}</Link>
                        </li>
                        <li>
                          <Link to="/home#clients">{t("bespoke")}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Links Widget */}
                <div className="col-md-6">
                  <div className="widget links-widget">
                    <h4 className="widget-title">{t("footer.links")}</h4>
                    <div className="widget-content">
                      <ul>
                        <li>
                          <Link to="/about">{t("about")}</Link>
                        </li>
                        <li>
                          <Link to="/philosophy">{t("philosophy")}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-border-bottom"></div>
              <div className="row">
                {/* Slogan */}
                <div className="col-md-6">
                  <div className="contact-widget_slogan">Disegni tagliati su misura</div>
                </div>

                {/* Mail */}
                <div className="col-md-6">
                  <div className="contact-widget_mail-title">{t("footer.send_email")}</div>
                  <div className="contact-widget_mail">
                    <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
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
          <div className="copyright">
            © Copyright {new Date().getFullYear()} by {CONTACT_NAME}
          </div>
          <div className="copyright">
            Design and Develop by{" "}
            <a href={DEVELOPER_WEBSITE} target="_blank">
              {DEVELOPER_NAME}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
