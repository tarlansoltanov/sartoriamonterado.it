import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// i18n
import i18n from "@/i18n";

const MenuContent = () => {
  const { t } = useTranslation();

  const changeLanguage = (language: string) => {
    localStorage.setItem("I18N_LANGUAGE", language);
    i18n.changeLanguage(language);
  };

  const [languageDropdown, setLanguageDropdown] = useState(false);

  return (
    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
      <ul className="navigation">
        <li>
          <Link to="/">{t("home")}</Link>
        </li>

        <li>
          <Link to="/about">{t("about")}</Link>
        </li>

        <li>
          <Link to="/philosophy">{t("philosophy")}</Link>
        </li>

        <li>
          <Link to="/home#fabrics">{t("fabrics")}</Link>
        </li>

        <li>
          <Link to="/home#clients">{t("bespoke")}</Link>
        </li>

        {/* Language */}
        <li className={`dropdown ${languageDropdown && "open"}`}>
          <a href="#">{t("language")}</a>

          <ul>
            <li>
              <a href="javascript:void(0)" onClick={() => changeLanguage("it")}>
                Italian
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" onClick={() => changeLanguage("en")}>
                English
              </a>
            </li>
          </ul>

          <div className="dropdown-btn" onClick={() => setLanguageDropdown(!languageDropdown)}>
            <span className="fa fa-angle-right"></span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MenuContent;
