import React from 'react'
import './Navbar.css'
import LogoMagu from '../../Imgs/LogoMagu.png'
import {NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




 const Navbar = () => {


return (

<div className='navbar'>

  <div className='nbAtencion'><p>Shipments all over the world - 100% Exclusive products</p></div>

 <img src={LogoMagu} alt="logo" />

 <div className='navLinks'>

  
 <NavLink to="/"> HOME </NavLink> 

<NavLink to="/Shop"> SHOP  </NavLink>

<NavLink to="/Others"> PRINT DESIGNS </NavLink>

<NavLink to="/Portfolio"> PORTFOLIO</NavLink> 

<NavLink to="/Workshops">WORKSHOPS </NavLink>

<NavLink to="/Contact">CONTACT</NavLink>

<NavLink to="/Widget"><ShoppingCartIcon /></NavLink>

 </div>
  


  </div>
  )
} 




export default Navbar