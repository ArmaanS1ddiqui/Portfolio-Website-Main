import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./GalleryHub.css";

// --- ANIMATION: THE CONTINUOUS REACTOR ---
const reactorFrames = [
  `
┌──────────────────────┐
│                      │
│                      │
│                      │
│                      │
│                      │
│                      │
│                      │
└──────────────────────┘
  `,
  `
┌──────────────────────┐
│  ┌────────────────┐  │
│  │                │  │
│  │                │  │
│  │                │  │
│  │                │  │
│  └────────────────┘  │
│                      │
└──────────────────────┘
  `,
  `
┌──────────────────────┐
│  ┌────────────────┐  │
│  │  ┌──────────┐  │  │
│  │  │          │  │  │
│  │  │          │  │  │
│  │  └──────────┘  │  │
│  └────────────────┘  │
└──────────────────────┘
  `,
  `
┌──────────────────────┐
│  ┌────────────────┐  │
│  │  ┌──────────┐  │  │
│  │  │   ████   │  │  │
│  │  │   ████   │  │  │
│  │  └──────────┘  │  │
│  └────────────────┘  │
└──────────────────────┘
  `,
  `
┌──────────────────────┐
│  ┌────────────────┐  │
│  │  ┌──────────┐  │  │
│  │  │          │  │  │
│  │  │          │  │  │
│  │  └──────────┘  │  │
│  └────────────────┘  │
└──────────────────────┘
  `,
  `
┌──────────────────────┐
│  ┌────────────────┐  │
│  │                │  │
│  │                │  │
│  │                │  │
│  │                │  │
│  └────────────────┘  │
│                      │
└──────────────────────┘
  `,
];

const GalleryHub = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % reactorFrames.length);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gallery-hub">
      <div className="container">
        {/* The Reactor Animation */}
        <div className="ascii-container">
          <pre className="hub-ascii">{reactorFrames[currentFrame]}</pre>
        </div>

        <div className="hub-header">
          <h2 className="hub-title">/ MEDIA_DIRECTORY</h2>
          <p className="hub-prompt">SELECT SOURCE DRIVE:</p>
        </div>

        <div className="hub-menu-container">
          <ul className="hub-menu">
            {/* Item 1: Gaming */}
            <li className="hub-item">
              <Link to="/gallery/gaming" className="hub-link">
                <div className="hub-top-row">
                  <div className="hub-left-group">
                    <span className="folder-icon">📁</span>
                    <span className="hub-name">gaming_caps</span>
                  </div>
                  <div className="hub-right-group">
                    <span className="hub-tag">IMG</span>
                    <span className="hub-desc">"// Virtual photography"</span>
                  </div>
                </div>

                <div className="hub-bottom-row">
                  <span className="hub-path">
                    ~/gallery/gaming/capture_data/
                  </span>
                </div>
              </Link>
            </li>

            {/* Item 2: Blender */}
            <li className="hub-item">
              <Link to="/gallery/blender" className="hub-link">
                <div className="hub-top-row">
                  <div className="hub-left-group">
                    <span className="folder-icon">📦</span>
                    <span className="hub-name">blender_renders</span>
                  </div>
                  <div className="hub-right-group">
                    <span className="hub-tag">3D</span>
                    <span className="hub-desc">"// Models & Scenes"</span>
                  </div>
                </div>

                <div className="hub-bottom-row">
                  <span className="hub-path">
                    ~/gallery/blender/cycles_output/
                  </span>
                </div>
              </Link>
            </li>

            {/* Item 3: Videos */}
            <li className="hub-item">
              <Link to="/gallery/videos" className="hub-link">
                <div className="hub-top-row">
                  <div className="hub-left-group">
                    <span className="folder-icon">🎬</span>
                    <span className="hub-name">video_edits</span>
                  </div>
                  <div className="hub-right-group">
                    <span className="hub-tag">MOV</span>
                    <span className="hub-desc">"// Motion Graphics"</span>
                  </div>
                </div>

                <div className="hub-bottom-row">
                  <span className="hub-path">
                    ~/gallery/videos/premiere_renders/
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GalleryHub;
