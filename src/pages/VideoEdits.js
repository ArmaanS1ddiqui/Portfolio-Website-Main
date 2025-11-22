import React from "react";
import { videoData } from "../data/creativeData";
import "./CreativeLayout.css";

const VideoEdits = () => {
  return (
    <div className="creative-page">
      <div className="container">
        <div className="page-header">
          <h2 className="section-title">/ GALLERY / VIDEO EDITS </h2>
          <p className="header-subtitle">TIMELINE SEQUENCES // COLOR GRADING</p>
        </div>

        <div className="projects-stack">
          {videoData.map((video) => (
            <div className="creative-project" key={video.id}>
              <div className="project-header">
                <h3 className="project-title">{video.title}</h3>
                <span className="project-meta">{video.description}</span>
              </div>

              <div className="cinematic-wrapper">
                {video.isYoutube ? (
                  <iframe
                    className="media-content"
                    src={video.src}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video src={video.src} className="media-content" controls />
                )}

                {/* HUD Corners */}
                <div className="corner top-left"></div>
                <div className="corner bottom-right"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoEdits;
