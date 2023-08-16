import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import "./style.css";

interface Props {
  title: string;
  background: string;
}

const PageTitle = ({ title, background }: Props) => {
  const { t } = useTranslation();

  return (
    <section className="page-title">
      <div
        className="bg"
        style={{
          backgroundImage: `url(${background})`,
        }}></div>
      <div className="auto-container">
        <div className="content-box">
          <div className="content-wrapper">
            <ul className="bread-crumb">
              <li>
                <Link to="/">{t("home")}</Link>
              </li>
              <li>{title}</li>
            </ul>
            <div className="title">
              <h1>{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
