import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul className="footer-list">
          <li className="footer-item">
            <a
              href="https://www.flaticon.com/free-icon/worms_3584909?term=worm&page=1&position=5&origin=tag&related_id=3584909"
              className="footer-link"
              target="_blank"
              rel="noreferrer"
            >
              Worm icons created by Icons Field on Flaticon
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://icons8.com/illustrations/author/ZQDZn9ZZj5aQ"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Illustrations by Violetta Barsuk from Ouch!
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://www.coingecko.com/en/api"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Powered by CoinGecko
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-info">
        <img className="dev-logo" src="/src/assets/img/jmz_logo.png" alt="" />
        <p className="footer-text">Built by Jared Martinez 2024</p>
      </div>

      <div className="social-media">
        <ul className="social-media-list">
          <li className="social-media-item">
            <a
              href="https://medium.com/@jaredcv04"
              target="_blank"
              rel="noreferrer"
              className="social-media-link"
            ><i className="fa-brands fa-medium"></i></a>
          </li>
          <li className="social-media-item">
            <a
              href="https://www.linkedin.com/in/jaredcv04/"
              target="_blank"
              rel="noreferrer"
              className="social-media-link"
            ><i className="fa-brands fa-linkedin-in"></i></a>
          </li>
          <li className="social-media-item">
            <a
              href="https://github.com/jaredmz"
              target="_blank"
              rel="noreferrer"
              className="social-media-link"
            ><i className="fa-brands fa-github"></i></a>
          </li>
          <li className="social-media-item">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="social-media-link"
            ><i className="fa-brands fa-x-twitter"></i></a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
