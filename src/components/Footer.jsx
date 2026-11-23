
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              JR<span>.</span>
            </Link>

            <p>
              Building modern and user-friendly web
              experiences with JavaScript.
            </p>
          </div>

          <div className="footer-navigation">
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-social">
            <h3>Connect</h3>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://wa.me/8801712166614"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Jahangir Rasel. All rights reserved.
          </p>

          <p>Designed & Built with React</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
