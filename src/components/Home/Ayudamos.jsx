import React from 'react'
import { Link } from 'react-router-dom'
import ayudamos from "../../Imgs/ayudamos.jpg"

const Ayudamos = () => {
  return (
    <div className='quienSoy'>
         <img src={ayudamos} alt="" />
        <div>
            <h3>¿En que te ayudamos?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sed reiciendis perspiciatis. Corporis dicta perferendis modi culpa nemo dolorum, illo, deleniti similique officia eaque assumenda exercitationem molestias, laudantium vel atque!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sed reiciendis perspiciatis. Corporis dicta perferendis modi culpa nemo dolorum, illo, deleniti similique officia eaque assumenda exercitationem molestias, laudantium vel atque!</p>
            <button> <Link to="/Tienda">VISITA NUESTRA SECCION DE ESTAMPAS</Link></button>
        </div>
        </div>
  )
}

export default Ayudamos