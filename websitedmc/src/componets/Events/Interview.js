import React, { useState, useEffect } from 'react';
import IMG1 from "../../newassest/lunch.jpg";
import IMG2 from "../../newassest/lunch2.jpeg";
import IMG3 from "../../newassest/Lunch3.jpg";
import IMG4 from "../../newassest/Lunch4.jpg";
import './SportStyles.css'

function Interview() {
  const images = [IMG1, IMG2, IMG3, IMG4];
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
        <h1>Interview over Lunch</h1>
        <p>This event is focused on the etiquette of dining in a professional setting. Attendees learn how to conduct themselves during a meal, including how to eat gracefully and use cutlery correctly. It also includes tips for maintaining engaging conversation and presenting oneself confidently in such an environment.</p>
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
  };
export default Interview;