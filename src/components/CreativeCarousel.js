import React from "react";
import "./CreativeSkills.css";
import {
  SiDavinciresolve,
  SiAdobepremierepro,
  SiVegas,
  SiBlender,
} from "react-icons/si";

const CreativeSkillsGrid = () => {
  const creativeSkills = [
    { name: "Da Vinci Resolve", icon: <SiDavinciresolve /> },
    { name: "Premiere Pro", icon: <SiAdobepremierepro /> },
    { name: "Vegas Pro", icon: <SiVegas /> },
    { name: "Blender", icon: <SiBlender /> },
  ];

  return (
    <div className="creative-skills-grid">
      {creativeSkills.map((skill, index) => (
        <div className="creative-skill-card" key={index}>
          <div className="skill-icon">{skill.icon}</div>
          <span className="skill-name">{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CreativeSkillsGrid;
