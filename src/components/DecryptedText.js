import React, { useState } from "react";
import "./DecryptedText.css";

const DecryptedText = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Professional, concise bio
  const realText =
    "Software Engineer & DevOps enthusiast. Building scalable web applications, automating workflows, and managing infrastructure. My stack revolves around Python, SQL, Docker, and React. Focused on clean code, system efficiency, and solving actual problems.";

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
