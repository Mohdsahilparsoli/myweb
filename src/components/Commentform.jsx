import React from 'react'
import {FaArrowRight} from "react-icons/fa"
const Commentform = (props) => {
  return (
    <>
    <div className="commentdata">
        <form action="">
           <div className="commentinput">
           <input autoComplete='off' type="text" placeholder='Name' />
            <input autoComplete='off' type="email" placeholder='Email' />
            <input autoComplete='off' type="text" placeholder='Website'  />
           </div>
            <textarea name="" placeholder='Comment' id="" cols="30" rows="4"></textarea>
            <input type="checkbox"  /> <label htmlFor="">Save my name, email, and website in this browser for the next time I comment.</label>
          <a href="#"> Sumbit comment  <span>< FaArrowRight/></span></a>  
          </form>
    </div>
    </>
  )
}

export default Commentform