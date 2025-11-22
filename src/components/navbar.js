import React from "react";
import { Link } from "react-router-dom"; // Use Link for internal navigation
import "./navbar.css"; // We'll create this CSS file next

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Porfolio Website
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links">
              Projects
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/terminal" className="nav-links">
              Terminal
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-links">
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
