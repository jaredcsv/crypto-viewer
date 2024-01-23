import "/src/styles/components/MenuBar.css";

function MenuBar() {
  return (
    <nav className="menu-bar">
      <div className="logo-container">
        <img className="logo-img" src="/src/assets/img/wormcoins.png" alt="" />
        <h2 className="logo-text">WormCoins</h2>
      </div>
      <ul className="menu-items">
        <li>
          <a className="menu-item" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="menu-item" href="#">
            Services
          </a>
        </li>
        <li>
          <a className="menu-item" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default MenuBar;
