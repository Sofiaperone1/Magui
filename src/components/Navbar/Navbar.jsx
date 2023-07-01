import React from 'react'
import './Navbar.css'
import logo from '../../Imgs/logo.png'
import { useState } from 'react';
import {NavLink } from 'react-router-dom';


 const Navbar = () => {


return (

<div className='navbar'>

  <div className='nbAtencion'><p>Envios a todo el pais - Productos 100% exclusivos</p></div>

  <img src={logo} alt="logo" />

  <ul className='navbarLinks'>

      <li><NavLink to="/Home"> HOME </NavLink> </li>

      <li> <NavLink to="/Portafolio"> PORTAFOLIO</NavLink> </li>

      <li > <NavLink to="/Contacto">CONTACTAME</NavLink></li>

      <li><NavLink to="/Tienda"> TIENDA ONLINE </NavLink></li>

      <li> <NavLink to="/Talleres">TALLER DE PINTURA</NavLink></li>

      <li> <NavLink to="/Otros"> OTROS LINKS </NavLink></li>

  </ul>

  </div>
  )
} 




export default Navbar