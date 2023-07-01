import React from 'react'
import { Link } from 'react-router-dom';
import portada from "../../Imgs/portada.jpg"
import logo from "../../Imgs/logo.png"
import "./FrontPage.css"

const FrontPage = () => {
  return (
    <div className='frontPage'>

     <div className='frontPageCont'>
       <img src={logo} alt="logo" />
       <div className='menuFP'>
            <ul>
                <li>
                    <Link to="/Home"> <button>Home</button></Link>
                </li>
                <li>
                    <Link to="/Portafolio"> <button>Portafolio</button></Link>
                </li>
                <li>
                    <Link to="/Contacto"> <button>Contactame</button></Link>
                </li>
                <li>
                    <Link to="/Tienda"> <button>Tienda online</button></Link>
                </li>
                <li>
                    <Link to="/Taller"> <button>Taller de pintura</button></Link>
                </li>
                <li>
                    <Link to="/OtrosLinks"><button>Otros links de interes</button></Link>
                </li>
            </ul>
        </div>
     </div>
      
    </div>
     
  )
}

export default FrontPage