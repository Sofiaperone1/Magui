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
              
                    <Link to="/Portfolio"> <button>Portafolio</button></Link>
           
                    <Link to="/Contact"> <button>Contactame</button></Link>
               
                    <Link to="/Shop"> <button>Tienda online</button></Link>
              
                    <Link to="/Workshops"> <button>Taller de pintura</button></Link>
              
                    <Link to="/Others"><button>Otros links de interes</button></Link>
          
        </div>
     </div>
      
    </div>
     
  )
}

export default FrontPage