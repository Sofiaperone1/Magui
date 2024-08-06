import React from "react";
import classNames from "classnames";
import CI12 from "../../Imgs/carrouselInicio/CI12.jpg";
import CI22 from "../../Imgs/carrouselInicio/CI22.jpg";
import CI32 from "../../Imgs/carrouselInicio/CI32.jpg";
import CI42 from "../../Imgs/carrouselInicio/CI42.jpg";
import CI52 from "../../Imgs/carrouselInicio/CI52.jpg";
import CI62 from "../../Imgs/carrouselInicio/CI62.jpg";

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