import React from "react";
import { collageImages, gameData } from "../data/galleryData";
import GameSlider from "../components/GameSlider";
import "./GamingGallery.css";

const GamingGallery = () => {
  return (
    <div className="gallery-page">
      <div className="container">
        {/* Header */}
        <div className="gallery-header">
          <h2 className="section-title">/ GALLERY / GAMING</h2>
          <p className="gallery-meta">
            REL: 2024-25 // RES: 1920x1080 // SRC: IN-GAME_CAPTURE
          </p>
        </div>

        {/* 1. The Collage */}
        <div className="collage-grid">
          {collageImages.map((image) => (
            <div key={image.id} className="cinematic-wrapper">
              <img src={image.url} alt={image.alt} className="collage-image" />
              {/* These are the styled corners */}
              <div className="corner top-left"></div>
              <div className="corner bottom-right"></div>
            </div>
          ))}
        </div>

        {/* 2. The Game Sliders */}
        <div className="spacer"></div>

        <div className="game-list">
          {gameData.map((game) => (
            <GameSlider key={game.name} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamingGallery;
