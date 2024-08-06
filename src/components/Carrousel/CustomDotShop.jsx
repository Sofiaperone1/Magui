import React from "react";
import classNames from "classnames";


// Estilo básico para los dots personalizados
import './carousel-with-custom-dots.css'; // Asegúrate de tener este archivo CSS


const CustomDotShop = ({ index, onClick, active, img1, img2 }) => {
    
    const images = [img1, img2];

    return (
    <button
      onClick={(e) => {
        onClick();
        e.preventDefault();
      }}
      className={classNames("custom-dot", {
        "custom-dot--active": active,
      })}
    >
      <img src={images[index]} alt={`Dot ${index}`} className="dot-image" />
    </button>
  );
};

export default CustomDotShop;