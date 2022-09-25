import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Productsearch = () => {
  return (
    <div className="productsearch">
      
        <form action="">
            <div className='search'>

                <input type="text" placeholder='Search Product' />
                <a href=""><FaSearch/></a>
           </div>

        </form>
    </div>

  )
}

export default Productsearch