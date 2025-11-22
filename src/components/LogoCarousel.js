import React from "react";
import "./LogoCarousel.css";
// Import any icons you want to use
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript,
  SiPostgresql,
  SiMetabase,
  SiN8N, // <-- CORRECTED: It's 'SiN8N' (capital N)
  SiCplusplus,
} from "react-icons/si";

const LogoCarousel = () => {
  // You can add/remove any icons from react-icons here
  const logos = [
    <FaReact />,
    <FaPython />,
    <SiJavascript />,
    <FaNodeJs />,
    <SiPostgresql />,
    <SiMetabase />,
    <FaDocker />,
    <SiN8N />, // <-- CORRECTED
    <FaAws />,
    <SiCplusplus />,
    <FaDatabase />, // Icon for SQL
  ];

  // We duplicate the logos to create the seamless loop
  const allLogos = [...logos, ...logos];

  return (
    <div className="logo-carousel-container">
      <div className="logo-carousel-track">
        {allLogos.map((logo, index) => (
          <div className="logo-slide" key={index}>
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
