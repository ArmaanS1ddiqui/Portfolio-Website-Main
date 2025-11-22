import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./GameSlider.css";

const GameSlider = ({ game }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? game.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === game.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="game-slider">
      <div className="slider-header">
        <h3 className="game-slider-title">{game.name}</h3>
        <span className="slider-count">
          IMG: {currentIndex + 1} / {game.images.length}
        </span>
      </div>

      {/* We add the 'cinematic-wrapper' here too! */}
      <div className="slider-body cinematic-wrapper">
        <button className="slider-btn left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <img
          src={game.images[currentIndex]}
          alt={`${game.name} screenshot`}
          className="slider-image collage-image"
        />

        {/* The HUD corners */}
        <div className="corner top-left"></div>
        <div className="corner bottom-right"></div>

        <button className="slider-btn right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default GameSlider;
