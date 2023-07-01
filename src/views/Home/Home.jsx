import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import QuienSoy from '../../components/Home/QuienSoy'

const Home = () => {
  return (
    <div className='home'>

        <div className='banner'>
        <div className='cardBanner'>
        <p>COLECCIÓN FLORES '23</p>
        <Link to="/Tienda"><button>VER MAS</button></Link>
        </div>
        </div>

        <QuienSoy/>


    </div>
  )
}
export default Home