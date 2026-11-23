
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappLink = "https://wa.me/8801712166614";

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">

      <NavLink to="/" className="logo" onClick={closeMenu}>
        JR<span>.</span>
      </NavLink>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <ul className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
        <li>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        </li>

        <li>
          <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
        </li>

        <li>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </li>
      </ul>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="nav-btn"
      >
        Let's Talk ↗
      </a>

    </nav>
  );
}

export default Navbar;
