import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Box } from '@mui/system'
import FileBase from 'react-file-base64';
import { Button } from '@mui/material';
import { Paper, TextField, Typography } from '@mui/material'
import {createProducts} from "../Features/product/productSlice"


export default function ProductForm() {
    const [productInfo, setProductInfo] = useState({ product: '', price: 0, details: '', quantity: 0, image: ''})

    const dispatch = useDispatch()

    const clear = () => {
        setProductInfo({ product: '', price: 0, details: '', quantity: 0, image: '' });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(productInfo)
        dispatch(createProducts({productInfo}))
        
        clear();

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
                                value={productInfo.product} 
                                onChange={(e) => setProductInfo({ ...productInfo, product: e.target.value })} 
                            />
                            <TextField 
                                sx={{m:1, p:1, mx: 'auto'}}
                                name="price" 
                                variant="outlined" 
                                label="Price" 
                                fullWidth 
                                value={productInfo.price} 
                                onChange={(e) => setProductInfo({ ...productInfo, price: e.target.value })} 
                            />
                            <TextField
                                sx={{m:1, p:1, mx: 'auto'}} 
                                name="details" 
                                variant="outlined" 
                                label="Details" 
                                fullWidth 
                                value={productInfo.details} 
                                onChange={(e) => setProductInfo({ ...productInfo, details: e.target.value })} 
                            />
                            <TextField
                                sx={{m:1, p:1, mx: 'auto'}} 
                                name="quantity" 
                                variant="outlined" 
                                label="Quantity" 
                                fullWidth 
                                value={productInfo.quantity} 
                                onChange={(e) => setProductInfo({ ...productInfo, quantity: e.target.value })} 
                            />
                            <div>
                                <FileBase 
                                    type="file" 
                                    multiple={false} 
                                    onDone={({ base64 }) => setProductInfo({ ...productInfo, image: base64 })}
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



