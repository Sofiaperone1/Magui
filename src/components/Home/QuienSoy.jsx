import React from 'react'
import { Link } from 'react-router-dom'
import hacemos from "../../Imgs/hacemos.jpg"
import ayudamos from "../../Imgs/ayudamos.jpg"

const QuienSoy = () => {
  return (
    <div className='quienSoy'>
        <div>
            <h3>What we do at <span>Magu Prints?</span></h3>
            <p>Hello, I'm Magu! Freelance Illustrator and Print Designer. I design illustrations and patterns for women's, children's, sports and accessory textile brands. My designs are very varied, although I am characterized by floral ones. I use many techniques, mainly digital and watercolors.
            <span>I would love for us to work together!</span>
            If you want us to design exclusive prints that enhance your brand, visit our section
            <button> <Link to="/Shop"> Design exclusive prints</Link></button>
            You can also purchase licenses for non-exclusive prints in stock directly from our store! 
            Read the conditions carefully!
            </p>
            <button> <Link to="/Shop">Take a look at our online store</Link></button>
           
           
        </div>
        <img src={ayudamos} alt="" />
        </div>
  )
}

export default QuienSoy