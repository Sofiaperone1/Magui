import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import QuienSoy from '../../components/Home/QuienSoy'
import Ayudamos from '../../components/Home/Ayudamos'
import DemoCarousel from '../../components/Carrousel/Carrousel'
import Clientes from '../../components/Home/Clientes'
const Home = () => {
  return (
    <div className='home'>

      <DemoCarousel/>

        <QuienSoy/>
        <Ayudamos/>
        <Clientes/>

    </div>
  )
}
export default Home