import React, { useState, useEffect } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "../style/navbar.css";

const Navbar = () => {
  const TOP_OFFSET = 100;
  const [navItem, setNavItem] = useState("home");
  const [showMenu, setShowMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleNavItemClick = (item) => {
    setNavItem(item);
    setShowMenu(false);
    // You can add more functionality, like smooth scrolling or closing the menu after a navigation item is clicked
  };

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      // Your code that uses window object
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll, true);

    return () => window.removeEventListener("scroll", handleScroll, true);
  }, []);

  return (
    <nav className={`navbar ${showBackground ? "navbar-onscroll" : ""}`}>
      div.
      <div className="menu-icon" onClick={toggleMenu}>
        {showMenu ? <FaTimes /> : <FaBarsStaggered />}
      </div>
      <ul className={`nav-list ${showMenu ? "show" : ""}`}>
        <li className={`nav-item ${navItem === "home" ? "active" : ""}`}>
          <Link
            href="home"
            className="nav-link"
            onClick={() => handleNavItemClick("home")}
            activeClass="active"
            smooth
            spy
            to="home"
          >
            Home
          </Link>
        </li>
        <li className={`nav-item ${navItem === "about" ? "active" : ""}`}>
          <Link
            href="about"
            className="nav-link"
            onClick={() => handleNavItemClick("about")}
            activeClass="active"
            smooth
            spy
            to="about"
          >
            About
          </Link>
        </li>
        <li className={`nav-item ${navItem === "experience" ? "active" : ""}`}>
          <Link
            href="experience"
            className="nav-link"
            onClick={() => handleNavItemClick("experience")}
            activeClass="active"
            smooth
            spy
            to="experience"
          >
            Experience
          </Link>
        </li>
        <li className={`nav-item ${navItem === "projects" ? "active" : ""}`}>
          <Link
            href="projects"
            className="nav-link"
            onClick={() => handleNavItemClick("projects")}
          >
            Projects
          </Link>
        </li>
        <li className={`nav-item ${navItem === "contact" ? "active" : ""}`}>
          <Link
            href="contact"
            className="nav-link"
            onClick={() => handleNavItemClick("contact")}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
