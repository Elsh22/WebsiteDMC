import React, { useState, useEffect } from 'react';
import IMG1 from "../../newassest/suitday.jpg";
import IMG2 from "../../newassest/suitday2.jpg";
import IMG3 from "../../newassest/suitday3.jpg";
import IMG4 from "../../newassest/Play4.jpg";
import VIDEO1 from "../../newassest/video1.mp4";
import './SportStyles.css'

function Suitday() {
  const images = [IMG1, IMG2, IMG3, IMG4];
  const videos = [VIDEO1];
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => {
    setModalImage(src);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <>
     <div className="title-container">
        <h1>Suitday</h1>
        <p>In collaboration with Jos. A. Banks, DMC hosts this event where attendees have the opportunity to purchase suits at a discounted rate. It's a great chance for individuals to get high-quality professional attire without breaking the bank.</p>
      </div>
      <div className="image-slider">
        <div className="image-row">
          {images.map((image, index) => (
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="image"
              key={index}
              onClick={() => openModal(image)}
            />
          ))}
        </div>
        <div className="video-container">
          {videos.map((video, index) => (
            <video
            src={video}
            className="video"
            key={index}
            autoPlay
            muted
            loop
            controls
            playsInline
            />          
          ))}
        </div>
      </div>
      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Modal" className="modal-image" />
            <span className="close" onClick={closeModal}>&times;</span>
          </div>
        </div>
      )}
    </>
  );
}
export default Suitday;