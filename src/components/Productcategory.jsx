import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Productcategory = () => {
  return (
<>

<div className="productcategory">
    <h6>Categories</h6>
    <ul>
      {
        [1,2,3,4].map(()=>{
            return(
            <>
            <li> <a href="#">Product category 1 <FaArrowRight/> </a></li>
            </>)
        })
      }  
    </ul>

</div>

</>
  )
}

export default Productcategory