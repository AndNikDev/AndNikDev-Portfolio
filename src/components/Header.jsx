import React, { useState } from "react";
import "../assets/styles/components/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav__container">
      {/* Logo */}
      <div className="nav__logo">
        <h1 className="nav__logo_wave">AndNik</h1>
        <p className="nav__logo_static">
          Dev
          <strong className="nav__logo_dot">.</strong>
        </p>
      </div>

      <div className="nav__hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`nav__links ${menuOpen ? "active" : ""}`}>
        <a href="#experience" className="nav__link">
          Experience
        </a>
        <a href="#projects" className="nav__link">
          Projects
        </a>
        <a href="#skills" className="nav__link">
          Skills
        </a>
        <a href="#about" className="nav__link">
          AboutMe
        </a>
      </div>
    </nav>
  );
};

export default Header;
