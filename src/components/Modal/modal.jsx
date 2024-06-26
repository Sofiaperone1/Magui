import React from 'react';
import Modal from 'react-modal';

import "./modal.css"

Modal.setAppElement('#root');

const ModalGaleria = ({ isOpen, onRequestClose, images }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Galería de Fotos"
    >
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Imagen ${index}`} />
      ))}
  
    </Modal>
  );
};

export default ModalGaleria;
