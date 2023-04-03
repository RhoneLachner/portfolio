import React, { useState } from 'react';
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

  // return (
  //   <div className="toggledImages-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  //     <img src={isHovered ? imageB : imageA} className={isHovered ? "toggledImagesClassNameB" : "toggledImagesClassNameA"} alt="toggledHomepageImage" onClick={handleImageClick} />

  //     <Modal className="ReactModal" isOpen={isModalOpen} onRequestClose={handleCloseModal}>
  //       <div className="modalButtons-container">
  //           <button className="modalButton" onClick={handleEmailButtonClick}>send  email </button>
  //           <button className="modalButton" onClick={handleCloseModal}>not now</button>
  //       </div>
  //     </Modal>
  //   </div>
  // )
  return (
    <div className="toggledImages-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={isHovered ? imageB : imageA} className={isHovered ? "toggledImagesClassNameB" : "toggledImagesClassNameA"} alt="toggledHomepageImage" onClick={handleImageClick} />

      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <button onClick={handleCloseModal}>Close</button>
        <button onClick={handleEmailButtonClick}>Send Email</button>
      </Modal>
    </div>
  );
};

export default ToggledImagesWithMailModal;
