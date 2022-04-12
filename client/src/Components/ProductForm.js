import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Box } from '@mui/system'
import FileBase from 'react-file-base64';
import { Button } from '@mui/material';
import { Paper, TextField, Typography } from '@mui/material'
import {createProducts} from "../Features/product/productSlice"


export default function ProductForm() {
    const [productData, setProductData] = useState({ product: '', price: '', details: '', quantity: '', image: ''})

    const dispatch = useDispatch()

    const clear = () => {
        setProductData({ product: '', price: '', details: '', quantity: '', image: '' });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createProducts(productData))
        clear()
        
        
    }

  return (
    <div>
        <Paper 
            elevation = {8}
            sx={{mt:10, display: 'inline-block'}}>
                <Box
                    
                    sx={{m:2, width: '25ch'}}
                    autoComplete="off"
                    noValidate
                    >
                        <form autoComplete="off" onSubmit={handleSubmit}>
                            <TextField
                                sx={{m:1, p:1, mx: 'auto'}}
                                name="product" 
                                variant="outlined" 
                                label="Product" 
                                fullWidth 
                                value={productData.product} 
                                onChange={(e) => setProductData({ ...productData, product: e.target.value })} 
                            />
                            <TextField 
                                sx={{m:1, p:1, mx: 'auto'}}
                                name="price" 
                                variant="outlined" 
                                label="Price" 
                                fullWidth 
                                value={productData.price} 
                                onChange={(e) => setProductData({ ...productData, price: e.target.value })} 
                            />
                            <TextField
                                sx={{m:1, p:1, mx: 'auto'}} 
                                name="details" 
                                variant="outlined" 
                                label="Details" 
                                fullWidth 
                                value={productData.details} 
                                onChange={(e) => setProductData({ ...productData, details: e.target.value })} 
                            />
                            <TextField
                                sx={{m:1, p:1, mx: 'auto'}} 
                                name="quantity" 
                                variant="outlined" 
                                label="Quantity" 
                                fullWidth 
                                value={productData.quantity} 
                                onChange={(e) => setProductData({ ...productData, quantity: e.target.value })} 
                            />
                            <div>
                                <FileBase 
                                    type="file" 
                                    multiple={false} 
                                    onDone={({ base64 }) => setProductData({ ...productData, image: base64 })}
                                />
                            </div>
                            <Button 
                                variant="contained"
                                sx={{m:1, p:1, mx: 'auto'}} 
                                size="large" 
                                type="submit" 
                                fullWidth>
                                    Submit
                            </Button> 
                        </form>
                
                </Box> 
        </Paper>
    </div>
  )
}



