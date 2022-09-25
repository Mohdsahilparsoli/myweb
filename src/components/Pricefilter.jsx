import React from 'react'
import { Box } from '@mui/system'
import { LinearProgress } from '@mui/material'

const Pricefilter = () => {
  return (

    <div className="filterbyprice">
        <h6>Filter By Price</h6>
        <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
    </div>
  )
}

export default Pricefilter