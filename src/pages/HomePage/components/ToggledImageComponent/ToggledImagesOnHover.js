import React, { useState } from 'react';
import './toggledImagesOnHover.css';

//This file is for toggled image hover behavior only. There is no onClick bhavior.

const ToggledImagesOnHover = ({ imageA, imageB }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="toggledImages-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={isHovered ? imageB : imageA} className={isHovered ? "toggledImagesClassNameB" : "toggledImagesClassNameA"} alt="toggledHomepageImage" />
    </div>
  );
};

export default ToggledImagesOnHover;

