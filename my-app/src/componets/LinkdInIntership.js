import React, { useState } from 'react';
import IMG1 from "../newassest/LinkedIn.jpg";
import IMG2 from "../newassest/LinkedIn2.jpg";
import IMG3 from "../newassest/LinkedIn3.jpg";
import IMG4 from "../newassest/LinkedIn4.jpg";
import './SportStyles.css'

function LinkdInInterships() {
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
        <h1>LinkedIn & Interships</h1>
        <p>This event, hosted by DMC, assists attendees in setting up their LinkedIn profiles to boost professional presence online. Furthermore, it guides them in searching for suitable internships, equipping them with strategies to find opportunities that align with their career goals.</p>
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

export default LinkdInInterships;


// LinkdInInterships './LinkdInIntershipStyles.css'