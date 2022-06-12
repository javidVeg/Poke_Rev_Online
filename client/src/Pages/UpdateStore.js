import { Typography } from '@mui/material'
import React, { useState } from 'react'
import ProductForm from '../Components/ProductForm';


export default function UpdateStore() {

  return (
    <div>
        
        <Typography 
            align="center"
            variant="h2"
            sx={{m:2, p:1, mx: 'auto', mb: 5}}>Add Product</Typography>
        <ProductForm/>
        
        
    </div>
  )
}
