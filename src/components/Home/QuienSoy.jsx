import React from 'react'
import { Link } from 'react-router-dom'
import hacemos from "../../Imgs/hacemos.jpg"

const QuienSoy = () => {
  return (
    <div className='quienSoy'>
        <div>
            <h3>¿Que hacemos en Magu Prints?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sed reiciendis perspiciatis. Corporis dicta perferendis modi culpa nemo dolorum, illo, deleniti similique officia eaque assumenda exercitationem molestias, laudantium vel atque!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sed reiciendis perspiciatis. Corporis dicta perferendis modi culpa nemo dolorum, illo, deleniti similique officia eaque assumenda exercitationem molestias, laudantium vel atque!</p>
            <button> <Link to="/Tienda">VISITA NUESTRA TIENDA ONLINE</Link></button>
        </div>
        <img src={hacemos} alt="" />
        </div>
  )
}

export default QuienSoy