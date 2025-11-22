import React, { useState } from "react";
import { blenderData } from "../data/creativeData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./CreativeLayout.css";

const BlenderProject = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirst = currentIndex === 0;
    setCurrentIndex(isFirst ? project.media.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    const isLast = currentIndex === project.media.length - 1;
    setCurrentIndex(isLast ? 0 : currentIndex + 1);
  };

  const currentMedia = project.media[currentIndex];

  return (
    <div className="creative-project">
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <span className="project-meta">{project.description}</span>
      </div>

      {/* CINEMATIC VIEWFINDER WRAPPER */}
      <div className="cinematic-wrapper">
        {/* --- LOGIC UPDATE START --- */}

        {currentMedia.type === "video" ? (
          // Case 1: Raw MP4 (Azure/Local)
          <video
            src={currentMedia.url}
            className="media-content"
            controls
            loop
            muted
          />
        ) : currentMedia.type === "embed" ? (
          // Case 2: Embeds (Behance/YouTube)
          <iframe
            src={currentMedia.url}
            className="media-content"
            title={project.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          // Case 3: Images
          <img
            src={currentMedia.url}
            alt={project.title}
            className="media-content"
          />
        )}

        {/* --- LOGIC UPDATE END --- */}

        {/* Navigation Buttons (Only show if more than 1 item) */}
        {project.media.length > 1 && (
          <>
            <button className="slider-btn left" onClick={prevSlide}>
              <FaChevronLeft />
            </button>
            <button className="slider-btn right" onClick={nextSlide}>
              <FaChevronRight />
            </button>
          </>
        )}

        {/* HUD Corners */}
        <div className="corner top-left"></div>
        <div className="corner bottom-right"></div>

        <div className="slide-counter">
          {currentIndex + 1} / {project.media.length}
        </div>
      </div>
    </div>
  );
};

const BlenderGallery = () => {
  return (
    <div className="creative-page">
      <div className="container">
        <div className="page-header">
          <h2 className="section-title">/ GALLERY / BLENDER_RENDERS</h2>
          <p className="header-subtitle">
            3D ASSETS // ENVIRONMENTS // TOPOLOGY
          </p>
        </div>

        <div className="projects-stack">
          {blenderData.map((project) => (
            <BlenderProject key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlenderGallery;
