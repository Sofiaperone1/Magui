import React, { useState } from 'react';
import ejemplo1 from '../../Imgs/ejemplo1.jpg';
import "./Portafolio.css";
import ModalGaleria from "../../components/Modal/modal";
import P1 from "../../Imgs/portfolio/P1.jpg"
import P2 from "../../Imgs/portfolio/P2.jpg"
import P3 from "../../Imgs/portfolio/P3.jpg"
import P4 from "../../Imgs/portfolio/P4.jpg"
import P5 from "../../Imgs/portfolio/P5.jpg"
import P6 from "../../Imgs/portfolio/P6.jpg"
import P7 from "../../Imgs/portfolio/P7.jpg"
import P8 from "../../Imgs/portfolio/P8.jpg"
import P9 from "../../Imgs/portfolio/P9.jpg"
import P10 from "../../Imgs/portfolio/P10.jpg"
import P11 from "../../Imgs/portfolio/P11.jpg"
import P12 from "../../Imgs/portfolio/P12.jpg"
import P13 from "../../Imgs/portfolio/P13.jpg"
import P14 from "../../Imgs/portfolio/P14.jpg"
import P15 from "../../Imgs/portfolio/P15.jpg"
import P16 from "../../Imgs/portfolio/P16.jpg"
import P17 from "../../Imgs/portfolio/P17.jpg"
import P18 from "../../Imgs/portfolio/P18.jpg"
import P19 from "../../Imgs/portfolio/P19.jpg"
import P20 from "../../Imgs/portfolio/P20.jpg"
import P21 from "../../Imgs/portfolio/P21.jpg"



const Portafolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);

  const diseños = [
    { nombre: "Rocks", img:P9 ,cat:"sports" },
{ nombre: "Lizard", img:P2 ,cat:"sports" },
 { nombre: "Grey", img:P3 ,cat:"sports" },
{ nombre: "Floralsalpa", img:P4 ,cat:"sports" },
{ nombre: "Fire", img:P5 , cat:"sports" },
{ nombre: "Earth", img: P6 ,cat:"sports" },
{ nombre: "Camuflado", img: P7 ,cat:"sports" },
{ nombre: "Aqua", img:P8, cat:"sports" },
{ nombre: "Abstsalpa", img:P1, cat:"sports" },
{ nombre: "Tortugas", img: P10,cat:"kids" },
{ nombre: "Peces", img: P11 ,cat:"kids" },
{ nombre: "Flores", img: P12,cat:"kids" },
{ nombre: "Tropical", img: P13,cat:"woman" },
{ nombre: "Tigre", img: P14 ,cat:"woman" },
{ nombre: "Flores", img: P15 ,cat:"home&others" },
{ nombre: "Flores2", img: P16 ,cat:"home&others" },
{ nombre: "Flores3", img: P17 ,cat:"home&others" },
{ nombre: "Flores4", img: P18 ,cat:"home&others" },
{ nombre: "Limerence", img: P19,cat:"accessories" },
{ nombre: "TodoModabBYN", img: P20,cat:"accessories" },
{ nombre: "TodoModaPaisley", img: P21,cat:"accessories" },


  ];

  const [stamps, setStamps] = useState(diseños);

  const abrirModal = (imagenes) => {
    setCurrentImages(imagenes);
    setModalIsOpen(true);
  };

  const cerrarModal = () => {
    setModalIsOpen(false);
  };

  const filterByCat = (category) => {
    if (category === 'all') {
      setStamps(diseños);
    } else {
      const filteredStamps = diseños.filter(diseño => diseño.cat === category);
      setStamps(filteredStamps);
    }
  };

  return (
    <div className='Portafolio'>
      <h1>Take a look at this selection of exclusive designs made at the special request of each client</h1>
      <div className='portafolioCats'>
        <li><button onClick={() => filterByCat('all')}>Show all</button></li>
        <li><button onClick={() => filterByCat('sports')}>Sports</button></li>
        <li><button onClick={() => filterByCat('woman')}>Woman</button></li>
        <li><button onClick={() => filterByCat('kids')}>Kids</button></li>
        <li><button onClick={() => filterByCat('home&others')}>Home&Others</button></li>
        <li><button onClick={() => filterByCat('accessories')}>Accessories</button></li>
      </div>
      <div className='portafolioCC'>
        {stamps.map((di, index) => {
          const imagenes = [di.img].filter(Boolean); // Filtra imágenes no definidas
          return (
            <div className='portafolioCard' key={index}>
              <img 
                src={di.img} 
                alt="card" 
                onClick={() => abrirModal(imagenes)} 
                style={{ cursor: 'pointer' }} 
              />
            </div>
          );
        })}
      </div>
      <ModalGaleria 
        isOpen={modalIsOpen} 
        onRequestClose={cerrarModal} 
        images={currentImages} 
      />
    </div>
  );
};

export default Portafolio;

