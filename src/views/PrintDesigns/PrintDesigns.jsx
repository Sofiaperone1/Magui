import React from 'react'
import e1 from "../../Imgs/estampas/e1.jpeg"
import e2 from "../../Imgs/estampas/e2.jpeg"
import e3 from "../../Imgs/estampas/e3.jpeg"
import e4 from "../../Imgs/estampas/e4.jpeg"
import "./PrintDesigns.css"

const PrintDesigns = () => {
  return (
    <div className='print_cont'>
      <h1>Follow the steps to order a <span>new & original </span>print </h1>
      <div className='print_div'>
        <img src={e1} alt="e1" />
        <img src={e2} alt="e2" />
        <img src={e3} alt="e3" />
        <img src={e4} alt="e4" />
      </div>
    </div>
  )
}

export default PrintDesigns