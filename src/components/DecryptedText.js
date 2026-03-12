import React, { useState } from "react";
import "./DecryptedText.css";

const DecryptedText = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Professional, concise bio
  const realText =
    "Curiosity has always been the common thread behind the things I enjoy working on. I’m drawn to building and experimenting — whether that’s with technology, automation, data-driven ideas, or visual media. Over the years I’ve spent a lot of time learning video editing and exploring different ways of telling stories through visuals, and more recently experimenting with tools like Blender and small technical projects.Most of what I create starts as curiosity rather than a finished plan. This website is simply a space to document those experiments, ideas, and things I’m learning along the way — from automation and data exploration to creative projects. Some of it may turn into something bigger, and some may remain experiments, but the process of building and exploring is what keeps me interested.";

  // Generate a static "Encrypted" version of the same length
  // We use a function so it matches the length perfectly
  const encryptedText = realText
    .split("")
    .map((char) => {
      if (char === " ") return " "; // Keep spaces so word shapes look similar
      const chars = "010101x0F5A9C8B@#%&";
      return chars[Math.floor(Math.random() * chars.length)];
    })
    .join("");

  return (
    <div
      className="decrypt-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className={`decrypt-content ${isHovered ? "solved" : "encrypted"}`}>
        {isHovered ? realText : encryptedText}
      </p>
    </div>
  );
};

export default DecryptedText;
