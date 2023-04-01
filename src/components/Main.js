import React, { useState, useRef } from "react";
import Modal from "./Modal";
function Main({ gifs }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedGif, setSelectedGif] = useState(null);

  function openModal(gif) {
    setSelectedGif(gif);
    setModalOpen(true);
  }

  function closeModal() {
    setSelectedGif(null);
    setModalOpen(false);
  }

  return (
    <main>
      <div className="card-container">
        {gifs.map((gif) => (
          <div className="card" key={gif.id} onClick={() => openModal(gif)}>
            <img src={gif.images.original.url} alt={gif.title} />
            <div className="card-body">
              <p>{gif.title}</p>
            </div>
          </div>
        ))}
      </div>
      <Modal gif={selectedGif} modalOpen={modalOpen} closeModal={closeModal} />
    </main>
  );
}

export default Main;
