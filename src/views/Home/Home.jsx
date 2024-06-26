import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import QuienSoy from '../../components/Home/QuienSoy'
import Ayudamos from '../../components/Home/Ayudamos'
import Clientes from '../../components/Home/Clientes'
import DemoCarouselInicio from "../../components/Carrousel/CarrouselInicio"
import EstampasExtras from '../../components/Home/EstampasExtras'
import Adorno from '../../components/Home/Adorno'

const Home = () => {

  const imagenes = ["1", "2"]// Filtra imágenes no definidas

  return (
    <div className='home'>
<div className="carrouselInicio" style={{width:"100%"}}><DemoCarouselInicio /> {/* Renderiza el carrusel aquí */}</div>
<QuienSoy/>
<Ayudamos/>

<Adorno/>

<Clientes/>

  </div>
  )
}
export default Home

/* <QuienSoy/>
<Ayudamos/>
<Clientes/>*/