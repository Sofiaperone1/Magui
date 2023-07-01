import React from 'react'
import ejemplo1 from '../../Imgs/ejemplo1.jpg'
import "./Portafolio.css"

const Portafolio = () => {

const diseños = [{nombre:"diseño5" , img:ejemplo1},{nombre:"diseño6" , img:ejemplo1},{nombre:"diseño4" , img:ejemplo1},{nombre:"diseño5" , img:ejemplo1},{nombre:"diseño6" , img:ejemplo1},{nombre:"diseño7" , img:ejemplo1},{nombre:"diseño8" , img:ejemplo1},{nombre:"diseño9" , img:ejemplo1}]

  return (
    <div className='Portafolio'>
        <h1>PORTAFOLIO</h1>
        <div className='portafolioCC'>
        {
         diseños.map((di) => {
          return (
            <div className='portafolioCard'>
              <img src={di.img} alt="card" />
            </div>
          )
         }) 
        }
        </div>
    </div>

  )
}

export default Portafolio