import React from "react";
import { aboutData } from "../data/aboutData";
import { FaMapMarkerAlt, FaBuilding, FaMicrochip } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        {/* Clean, simple header */}
        <h2 className="section-title">/ ABOUT_ME</h2>

        <div className="dossier-grid">
          {/* LEFT COLUMN: PROFILE CARD */}
          <div className="dossier-sidebar">
            <div className="id-card">
              <div className="id-header">
                <span>REF: 31724</span>
                <span className="id-status">{aboutData.profile.status}</span>
              </div>

              <div className="id-photo">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQHsEfzmGatP4A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725755211157?e=1765411200&v=beta&t=FKpDJO6d5vD_JWbWFCh4NS8oJ1YDdGWvXCKF5Uc4gmo"
                  alt="Armaan"
                />
                <div className="scan-line"></div>
              </div>

              <div className="id-details">
                <h3>{aboutData.profile.name}</h3>
                <p className="id-role">{aboutData.profile.role}</p>

                <div className="id-meta">
                  <p>
                    <FaBuilding /> {aboutData.profile.company}
                  </p>
                  <p>
                    <FaMapMarkerAlt /> {aboutData.profile.location}
                  </p>
                </div>
              </div>

              <div className="id-specs">
                <h4>
                  <FaMicrochip /> CERTIFICATIONS
                </h4>
                <ul>
                  {aboutData.certifications.map((cert, index) => (
                    <li key={index} style={{ marginBottom: "10px" }}>
                      <span
                        style={{
                          color: "var(--accent-color)",
                          display: "block",
                        }}
                      >
                        {cert.title}
                      </span>
                      <span style={{ color: "#888", fontSize: "0.75rem" }}>
                        {cert.issuer}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="id-export">
                <a
                  href="/armaan_profile.pdf"
                  download="Armaan_Siddiqui_CV.pdf"
                  className="export-btn"
                >
                  <span className="btn-icon">⇩</span>
                  <span className="btn-text">EXPORT_PROFILE_DATA</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTENT */}
          <div className="dossier-content">
            {/* BIO SECTION */}
            <section className="dossier-section">
              <h3>{"// SUMMARY"}</h3>
              <div className="bio-text">
                {aboutData.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* SKILLS MATRIX (Kept as is, looks cool) */}
            <section className="dossier-section">
              <h3>{"// TECH STACK"}</h3>
              <div className="skill-grid">
                {aboutData.skills.map((skill) => (
                  <div className="skill-bar-container" key={skill.name}>
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-track">
                      <div
                        className="skill-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* EXPERIENCE LOG (Replaced Roadmap) */}
            <section className="dossier-section">
              <h3>{"EXPERIENCE_LOG"}</h3>
              <div className="mission-list">
                {aboutData.timeline.map((item) => (
                  <div className="mission-card" key={item.id}>
                    <div className="mission-header">
                      <span className="mission-id">{item.date}</span>
                      {/* Using the item type to color code if needed */}
                      <span className={`mission-status ${item.type}`}>
                        {item.org}
                      </span>
                    </div>
                    <div className="mission-body">
                      <span className="mission-date">{item.title}</span>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
