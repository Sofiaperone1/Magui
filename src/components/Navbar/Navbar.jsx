import React from 'react'
import './Navbar.css'
import LogoMagu from '../../Imgs/LogoMagu.png'
import {NavLink } from 'react-router-dom';


 const Navbar = () => {


return (

<div className='navbar'>

  <div className='nbAtencion'><p>Envios a todo el pais - Productos 100% exclusivos</p></div>

 <img src={LogoMagu} alt="logo" />

 <div className='navLinks'>

  
 <NavLink to="/Home"> INICIO </NavLink> 

<NavLink to="/Tienda"> TIENDA  </NavLink>

<NavLink to="/Otros"> DISEÑO DE ESTAMPAS </NavLink>

<NavLink to="/Portafolio"> PORTFOLIO</NavLink> 

<NavLink to="/Talleres">TALLER </NavLink>

<NavLink to="/Acerca">ACERCA DE MI </NavLink>

<NavLink to="/Contacto">CONTACTAME</NavLink>


 </div>
  


  </div>
  )
} 




export default Navbar