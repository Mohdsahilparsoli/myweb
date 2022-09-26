import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Productcart = () => {
  return (
   
<div className="product">
    <Link to={"/singalproduct"} >
      <img src="blackcctv.jpg" className='img-fluid img1' alt="" />
        <div className="productinfo">
          <h6> IP Cctv Camera </h6>
          <h6> $ 13</h6>
          <Link to={""} className='addtocart'>Add To Cart <FaCartPlus/></Link>
        </div> 
    </Link> 
</div>

    )
}

export default Productcart