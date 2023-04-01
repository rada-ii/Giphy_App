import React, { useState, useRef } from "react";

function Modal({ gif, modalOpen, closeModal }) {
  const videoRef = useRef();

  return (
    <>
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              X
            </button>
            <video autoPlay loop playsInline ref={videoRef}>
              <source src={gif.images.original.mp4} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
