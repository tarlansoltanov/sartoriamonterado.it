import { Link } from "react-router-dom";

const MenuContent = () => {
  return (
    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/philosophy">Philosophy</Link>
        </li>

        <li>
          <Link to="/home#fabrics">Fabrics</Link>
        </li>

        <li>
          <Link to="/home#clients">Bespoke</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuContent;
