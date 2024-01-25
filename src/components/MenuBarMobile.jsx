import "/src/styles/components/MenuBarMobile.css";

function MenuBarMobile() {
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="logo">
              <img className="logo-img-mobile" src="/src/assets/img/wormcoins-logo.png" alt="" />
            </div>
            <div className="menu-items">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MenuBarMobile;
