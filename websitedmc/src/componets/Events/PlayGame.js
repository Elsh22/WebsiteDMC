import React, { useState } from 'react';
import IMG1 from "../../newassest/Play.jpg";
import IMG2 from "../../newassest/Play2.jpg";
import IMG3 from "../../newassest/Play3.jpg";
import IMG4 from "../../newassest/Play4.jpg";
import VIDEO1 from "../../newassest/play.mp4";
import './SportStyles.css';

function PlayGame() {
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
        <h1>Play The Game Look the Part</h1>
        <p>This event is designed to help attendees understand the importance of professional appearance and behaviour in the business world. It provides advice on how to dress appropriately for different professional situations, and how to carry oneself to create a positive impression.</p>
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

export default PlayGame;


// import './PlaygameStyles.css'