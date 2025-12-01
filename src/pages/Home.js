import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaSteam, FaGithub } from "react-icons/fa";
import LogoCarousel from "../components/LogoCarousel";
import DecryptedText from "../components/DecryptedText";
import { projectsData } from "../data/projectData";
import "./Home.css";

const Home = () => {
  // Logic to get the latest 3 projects (Project 7, 6, 5)
  const featuredProjects = [...projectsData].reverse().slice(0, 3);

  return (
    <div className="home-page">
      {/* SECTION 1: HERO */}
      <section className="container hero-section">
        <h1 className="hero-name">
          Armaan Aijaz Siddiqui
          <a
            href="https://www.linkedin.com/in/armaan-aijaz-siddiqui-0b11751b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-icon-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://steamcommunity.com/id/Armaanical/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-icon-link"
          >
            <FaSteam />
          </a>
          <a
            href="https://github.com/ArmaanS1ddiqui"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-icon-link"
          >
            <FaGithub />
          </a>
        </h1>
        <TypeAnimation
          sequence={[
            "// Deployment Consultant",
            2000,
            "// Full-Stack Developer",
            2000,
            "// Automation Expert",
            2000,
            "// Dev-Ops Enthusiast",
            2000,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "1.2rem",
            color: "var(--accent-color)",
            display: "inline-block",
            fontWeight: "500",
          }}
          repeat={Infinity}
        />
      </section>

      {/* SECTION 2: PROJECTS PREVIEW */}
      <section className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              {/* 1. The Image Area */}
              <div className="card-image-wrapper">
                <img src={project.imageUrl} alt={project.title} />
              </div>

              {/* 2. The Title Area */}
              <div className="card-info">
                <h3>{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SECTION 3: TOOLKIT */}
      <section className="container">
        <h2 className="section-title">Toolkit</h2>
        <LogoCarousel />
      </section>

      {/* SECTION 4: ABOUT */}
      <section className="container">
        <h2 className="section-title">ABOUT</h2>
        <div className="about-box">
          <DecryptedText />
        </div>
      </section>
    </div>
  );
};

export default Home;
