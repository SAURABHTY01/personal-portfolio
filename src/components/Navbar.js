import React, { useState, useEffect } from "react";
import "../style/navbar.css";

const Navbar = () => {
  const TOP_OFFSET = 50;
  const [navItem, setNavItem] = useState("home");

  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`navbar ${showBackground ? 'navbar-onscroll' : ''}`}>
      <ul className="nav-list">
        <li className={`nav-item ${navItem === "home" ? "active" : ""}`}>
          <a href="/" className="nav-link" onClick={() => setNavItem("home")}>
            Home
          </a>
        </li>
        <li className={`nav-item ${navItem === "about" ? "active" : ""}`}>
          <a
            href="about"
            className="nav-link"
            onClick={() => setNavItem("about")}
          >
            About
          </a>
        </li>
        <li className={`nav-item ${navItem === "experience" ? "active" : ""}`}>
          <a
            href="experience"
            className="nav-link"
            onClick={() => setNavItem("experience")}
          >
            Experience
          </a>
        </li>
        <li className={`nav-item ${navItem === "projects" ? "active" : ""}`}>
          <a
            href="projects"
            className="nav-link"
            onClick={() => setNavItem("projects")}
          >
            Projects
          </a>
        </li>
        <li className={`nav-item ${navItem === "contact" ? "active" : ""}`}>
          <a
            href="contact"
            className="nav-link"
            onClick={() => setNavItem("contact")}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
