import React from 'react'

const Pagenation = () => {
  return (

    <div className="pagenation">
     {
        [1,2,3,4].map(()=>{
            return(<>
            <a href="#">1</a>    
            </>)
        })
     }
        
    </div>
  )
}

export default Pagenation