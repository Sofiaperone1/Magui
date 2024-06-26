import React from 'react'
import "./ProductCard.css"
import { Link } from "react-router-dom";

const ProductCard = ({img1, img2, cat, desc, name, price }) => {

  return (

    <div className='prodCard'>
    <Link to={`/products/${name}`}>
        <img src={img1} alt="img principal" />
        <h3>{name} - <span>${price}</span></h3>
        
        </Link>
    </div>
  )
}

export default ProductCard