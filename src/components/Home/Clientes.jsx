import React from 'react'
import "../../views/Home/Home.css"
import { NavLink } from 'react-router-dom'

const Clientes = () => {
  return (
    <div className='clientes'>
        <div className='first'>
        <h3> ¿Who are our customers?</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita ullam debitis iste odit aperiam dolores velit reiciendis alias, nisi nemo officiis! Ipsum provident saepe quis fugiat accusamus labore et corrupti.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas sed reiciendis incidunt, saepe fuga repudiandae, possimus iusto sunt sint eum cumque voluptas velit voluptate! Ducimus impedit qui veritatis doloribus corporis!
        </p>
        </div>
        <div className='second'>
<h3>Acerca de mi</h3>
<NavLink to="/contact" >Encuentra mas informacion aqui</NavLink>
        </div>
    </div>
  )
}

export default Clientes