import React from "react";
import { projectsData } from "../data/projectData";
import "./Projects.css";

const Projects = () => {
  // --- RESTORE THIS LINE ---
  // This takes the array [1, 2, ... 7] and flips it to [7, 6, ... 1]
  const reversedProjects = [...projectsData].reverse();

  return (
    <div className="projects-page">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="timeline">
          {reversedProjects.map((project) => (
            <div className="timeline-item" key={project.id}>
              <div className="timeline-content">
                <div className="terminal-header">
                  <span>
                    root@portfolio:~/projects/
                    {project.title.replace(/\s+/g, "_").toLowerCase()}
                  </span>
                </div>

                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="project-image"
                />

                <h3>{project.title}</h3>

                <p className="desc-short">{project.shortDescription}</p>

                <div className="desc-long-container">
                  <p className="desc-long">{project.longDescription}</p>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      [ OPEN_PROJECT ]
                    </a>
                  )}
                </div>

                <div className="tech-tags">
                  {project.tech.map((tag) => (
                    <span className="tech-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
