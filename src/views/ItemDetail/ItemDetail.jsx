import React, { useState, useContext } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { ItemContext } from "../../components/CartContext/CartContext";
import Swal from 'sweetalert2'
import Button from '@mui/material/Button'
import "./ItemDetail.css";
import P1 from "../../Imgs/productos/P1.jpg"
import P1a from "../../Imgs/productos/P1.1.jpg"
import P2 from "../../Imgs/productos/P2.jpg"
import P2a from "../../Imgs/productos/P2.2.jpg"
import P4 from "../../Imgs/productos/P4.jpg"
import P4a from "../../Imgs/productos/P4.1.jpg"
import P5 from "../../Imgs/productos/P5.jpg"
import P5a from "../../Imgs/productos/P5.1.jpg"
import P6 from "../../Imgs/productos/P6.jpg"
import P6a from "../../Imgs/productos/P6.1.jpg"
import P7 from "../../Imgs/productos/P7.jpg"
import P7a from "../../Imgs/productos/P7.1.jpg"
import P8 from "../../Imgs/productos/P8.jpg"
import P8a from "../../Imgs/productos/P8.1.jpg"
import P9 from "../../Imgs/productos/P9.jpg"
import P9a from "../../Imgs/productos/P9.1.jpg"
import P10 from "../../Imgs/productos/P10.jpg"
import P10a from "../../Imgs/productos/P10.1.jpg"
import P11 from "../../Imgs/productos/P11.jpg"
import P11a from "../../Imgs/productos/P11.1.jpg"
import P12 from "../../Imgs/productos/P12.jpg"
import P12a from "../../Imgs/productos/P12.1.jpg"
import P13 from "../../Imgs/productos/P13.jpg"
import P13a from "../../Imgs/productos/P13.1.jpg"
import P14 from "../../Imgs/productos/P14.jpg"
import P14a from "../../Imgs/productos/P14.1.jpg"
import P15 from "../../Imgs/productos/P15.jpg"
import P15a from "../../Imgs/productos/P15.1.jpg"
import P16 from "../../Imgs/productos/P16.jpg"
import P16a from "../../Imgs/productos/P16.1.jpg"
import P17 from "../../Imgs/productos/P17.jpg"
import P17a from "../../Imgs/productos/P17.1.jpg"
import P18 from "../../Imgs/productos/P18.jpg"
import P18a from "../../Imgs/productos/P18.1.jpg"
import DemoCarouselShop from "../../components/Carrousel/CarrouselShop"


const ItemDetail = ({ products }) => {
  const [quantity, setQuantity] = useState(0);
  const { name } = useParams();
  const {cart, setCount} = useContext (ItemContext)

  const prods = [
    { nombre: "Diseño1", img: P1 , img2: P1a, desc:"lorem ipsum lorem psum lorem", price:5000,order: 1, cat:"woman" },
    { nombre: "Diseño2", img: P2 , img2: P2a, desc:"lorem ipsum lorem psum lorem", price:6000, order: 2, cat:"woman" },
    { nombre: "Diseño4", img: P4 , img2: P4a, desc:"lorem ipsum lorem psum lorem", price:5300, order: 4, cat:"kids" },
    { nombre: "Diseño5", img: P5 , img2: P5a, desc:"lorem ipsum lorem psum lorem", price:3000, order: 5, cat:"kids" },
    { nombre: "Diseño6", img: P6 , img2: P6a, desc:"lorem ipsum lorem psum lorem", price:2000, order: 6, cat:"sports" },
    { nombre: "Diseño7", img: P7 , img2: P7a, desc:"lorem ipsum lorem psum lorem", price:1000, order: 7, cat:"sports" },
    { nombre: "Diseño8", img: P8 , img2: P8a, desc:"lorem ipsum lorem psum lorem", price:5700,order: 8,  cat:"home&others" },
    { nombre: "Diseño9", img: P9 , img2: P9a, desc:"lorem ipsum lorem psum lorem", price:5700,order: 9,  cat:"home&others" },
    { nombre: "Diseño10", img:P10, img2: P10a, desc:"lorem ipsum lorem psum lorem", price:5700,order: 10,  cat:"home&others" },
    { nombre: "Diseño11", img:P11, img2: P11a, desc:"lorem ipsum lorem psum lorem", price:5700,order: 11,  cat:"home&others" },
    { nombre: "Diseño12", img:P12, img2: P12a, desc:"lorem ipsum lorem psum lorem", price:5700,order: 12,  cat:"home&others" },
    { nombre: "Diseño13", img:P13, img2: P13a, desc:"lorem ipsum lorem psum lorem", price:5700,order: 13,  cat:"home&others" },
    { nombre: "Diseño14", img:P14, img2: P14a, desc:"lorem ipsum lorem psum lorem", price:5700,order: 14,  cat:"home&others" },
    { nombre: "Diseño15", img:P15, img2: P15a, desc:"lorem ipsum lorem psum lorem", price:5700,order: 15,  cat:"home&others" },
    { nombre: "Diseño16", img:P16, img2: P16a, desc:"lorem ipsum lorem psum lorem", price:5700,order: 16,  cat:"home&others" },
    { nombre: "Diseño17", img:P17, img2: P17a, desc:"lorem ipsum lorem psum lorem", price:5700,order: 17,  cat:"home&others" },
    { nombre: "Diseño18", img:P18, img2: P18a, desc:"lorem ipsum lorem psum lorem", price:5700,order: 18,  cat:"home&others" },
  ];
  const product = prods.find(prod => prod.nombre === name);

  

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const incrementQuantity = () => {
    if (quantity < 1) {
      setQuantity(1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(0);
    }
  };

  const addToCart = () => { 
    console.log("cart", cart)
    cart.push({cant:1, name:product.nombre,  price:product.price, total:product.price}) ;
                           console.log(cart);
                        
                          const sumall = cart.map(item => item.total).reduce((prev, curr) => prev + curr, 0);
                          console.log("sumall",sumall)
                          setCount(sumall)

                          const Toast = Swal.mixin({
                            toast: true,
                            position: 'bottom-end',
                            showConfirmButton: false,
                            timer: 900,
                        
                          })
                          
                          Toast.fire({
                            icon: 'success',
                            title: 'Producto agregado'
                          })
                          
                        }
   
  return (
    <div className="detailCont">
         <Button
            className='cb_dc'
            >
              <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/Shop'>
              Continue buying 
              </NavLink>
            </Button>
      <div className="detailImgs" style={{width:"40%"}}>

      <div className="carrouselInicio" id="carrouselShop" style={{width:"90%"}}><DemoCarouselShop img1={product.img} img2={product.img2}/> {/* Renderiza el carrusel aquí */}</div>

      </div>
      <div className="detailFacts">
        <h2>{product.nombre}</h2>
        <p>{product.desc}</p>
        <p style={{color:"red", fontWeight:"bold"}}>${product.price}</p>
        <p>Categories: {product.cat}</p>
        <p style={{fontSize:"14px", width:"100%"}}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet  </p>
        
        <div className="counter">
          <button onClick={decrementQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={incrementQuantity}>+</button>
        </div>
        <button className="id_btn" onClick={addToCart} disabled={quantity === 0}>
            {quantity > 0 ? (
              <p>Add to cart</p>
            ) : (
              'Add to cart'
            )}
          </button>
          <button className="id_btn2"> <NavLink to="/Widget"> Go to cart </NavLink></button>
   
      </div>
    </div>
  );
};

export default ItemDetail;


