import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"; // We'll create this CSS file next

const Footer = () => {
  // This function scrolls the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">Armaan's Portfolio Version 0.0</div>
        <div className="footer-right">
          <Link to="/" className="footer-link">
            Home
          </Link>
          {/* We use an onClick handler for the 'Back to Top' */}
          <button onClick={scrollToTop} className="footer-link back-to-top">
            Back Up
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
