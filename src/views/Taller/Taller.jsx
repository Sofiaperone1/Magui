import React from 'react'
import Button from '@mui/material/Button'
import {NavLink } from 'react-router-dom';
import t1 from "../../Imgs/taller/t1.jpeg"
import t2 from "../../Imgs/taller/t2.jpeg"
import t4 from "../../Imgs/taller/t4.jpeg"
import T5 from "../../Imgs/taller/T5.jpeg"
import T6 from "../../Imgs/taller/T6.jpeg"
import T7 from "../../Imgs/taller/T7.jpeg"
import T12_2 from "../../Imgs/taller/T12_2.jpeg"
import magu_ac from "../../Imgs/taller/magu_ac.jpeg"
import ExpCards from '../../components/ExpCards/ExpCards';

import "./Taller.css"

const Taller = () => {
  return (
    <div className='taller_cont'>
     <Button
            className='cb_dc'
            >
              <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/'>
              GO BACK
              </NavLink>
            </Button>
    <div className='taller_p1'>
      <img src={t1} alt="t1" style={{width:"32%"}} />
      <img src={t2} alt="t1" style={{width:"32%"}}/>
      <div className='p1_sub' style={{width:"32%"}}>
      <img src={T12_2} alt="T9" />
      <img src={magu_ac} alt="t1"  style={{marginTop:"2%"}} />
      </div>
      
    </div>
    <div className='expCards'>
    <ExpCards/>
    </div>

    <div className='taller_p2'>
    <h3>Combinando nuestras dos pasiones</h3>
    <div className='p2_sub'>
    <img src={t4} alt="t4" />
    <img src={T5} alt="T5" />
    <img src={T6} alt="T6" />
    <img src={T7} alt="T7" />
    </div>
    </div>
    
    {/*
    <div className='taller_p2'>
    
      <img src={T9} alt="T9" />
      <img src={T10} alt="T10" />
      <img src={T12} alt="T12" />
      <img src={T13} alt="T13" />
    </div> */}  
    </div>
  )
}

export default Taller