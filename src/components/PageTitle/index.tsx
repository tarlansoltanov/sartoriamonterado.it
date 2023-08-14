import { Link } from "react-router-dom";

import "./style.css";

interface Props {
  title: string;
  background: string;
}

const PageTitle = ({ title, background }: Props) => {
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
                <Link to="/">Home</Link>
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
