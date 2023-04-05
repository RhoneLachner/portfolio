import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './toggledImages.css';

//This file includes both onHover and onClick behavior.
//Images are toggled onHover, and an email modal opens onClick.

Modal.setAppElement('#root');

const ToggledImagesWithMailModal = ({ imageA, imageB }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEmailButtonClick = () => {
    window.location.href = 'mailto:fernandclay@gmail.com';
  };

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "";
    };
  }, []);

  return (
    <div className="toggledImages-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={isHovered ? imageB : imageA} className={isHovered ? "toggledImagesClassNameB" : "toggledImagesClassNameA"} alt="toggledHomepageImage" onClick={handleImageClick} />

      <Modal className="ReactModal" isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <div className="modalButtons-container">
            <button className="modalButton" onClick={handleEmailButtonClick}>send an email </button>
            <button className="modalButton" onClick={handleCloseModal}>not now</button>
        </div>
      </Modal>
    </div>
  )
};

export default ToggledImagesWithMailModal;
