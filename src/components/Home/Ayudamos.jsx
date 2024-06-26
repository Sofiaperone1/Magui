import React from 'react'
import { Link } from 'react-router-dom'
import c1 from "../../Imgs/c1.jpg"
import c2 from "../../Imgs/c2.png"
import hacemos from "../../Imgs/hacemos.jpg"

const Ayudamos = () => {
  return (
    <div className='ayudamos'>
         <img className="imgs_to1" src={hacemos} alt="" />
         <div className='imgs_to2'>
          <img src={c2} alt="c1" style={{marginBottom:"3%", borderTopRightRadius:"3%"}}/>
          <img src={c1} alt="c2" style={{ borderBottomRightRadius:"3%"}} />
         </div>
        <div className='ayudamos_l2'>
            <h3>How can we help you?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sed reiciendis perspiciatis. Corporis dicta perferendis modi culpa nemo dolorum, illo, deleniti similique officia eaque assumenda exercitationem molestias, laudantium vel atque!</p>
            <p>Lorem ipsum dolor sit amet . Nesciunt sed reiciendis perspiciatis. Corporis dicta perferendis modi culpa nemo dolorum, illo, deleniti similique officia eaque assumenda exercitationem molestias, laudantium vel atque!</p>
            <button > <Link to="/Shop">More information about our workshops</Link></button>
        </div>
        </div>
  )
}

export default Ayudamos