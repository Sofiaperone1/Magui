import React from 'react'
import { Link } from 'react-router-dom';
import LogoMagu from "../../Imgs/LogoMagu.png"
import "./FrontPage.css"

const FrontPage = () => {
  return (
    <div className='frontPage'>

     <div className='frontPageCont'>
        <div className='welcome'>
        <p> Bienvenida/os  a  </p>
        <img src={LogoMagu} alt="logo" />
        </div>
       
       <div className='menuFP'>
         
                    <Link to="/Home"> <button>Home</button></Link>
              
                    <Link to="/Portafolio"> <button>Portafolio</button></Link>
           
                    <Link to="/Contacto"> <button>Contactame</button></Link>
               
                    <Link to="/Tienda"> <button>Tienda online</button></Link>
              
                    <Link to="/Taller"> <button>Taller de pintura</button></Link>
              
                    <Link to="/OtrosLinks"><button>Otros links de interes</button></Link>
          
        </div>
     </div>
      
    </div>
     
  )
}

export default FrontPage