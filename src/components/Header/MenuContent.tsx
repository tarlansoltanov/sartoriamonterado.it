const MenuContent = () => {
  const isHome = true;

  return (
    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
      <ul className="navigation">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Philosophy</a>
        </li>

        {isHome && (
          <>
            <li>
              <a href="#C4">Fabrics</a>
            </li>
            <li>
              <a href="#C5">Bespoke</a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default MenuContent;
