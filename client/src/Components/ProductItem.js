/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteProducts } from '../Features/product/productSlice'
import { Button, ButtonBase, Card, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material'
import { addProduct } from '../Features/cart/cartSlice'
import { Add, Remove } from "@material-ui/icons";
import { borderRadius, Box } from '@mui/system'

export default function ProductItem({  products, price }) {
    const [ quantity, setQuantity ] = useState(1)
    const dispatch = useDispatch()
    // console.log(products)

    const openProduct = (e) => {
        
    }
//! UPDATES CART 
    const handleClick = () => {
        dispatch(addProduct({...products, quantity }));
    }

    const handleQuantity = (type) => {
        if(type === "dec") {
            quantity > 1 && setQuantity(quantity -1)
        } else {
            setQuantity(quantity + 1)
        }
    }
  return (
    <div>
        <Card display='flex' flexDirection= 'column' sx={{
            display:'flex',
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            height:'550px', 
            position:'relative',
            mt:5,
            }}>
            <ButtonBase
                    display='block'
                    textAlign= 'initial'
                    component="span"
                    name="test"
                    sx={{ display: 'block', textAlign: 'initial'}}
                    onClick={openProduct}
                    >
                <Grid 
                    container
                    justifyContent='center' 
                    >
                    
                <img 
                    component='image' 
                    height='250' 
                    src={products.image.url || "./maxresdefault-2.jpg"}/>
                </Grid>
                <Typography varient='h6' sx={{p:2}}>{products.product}</Typography>
                </ButtonBase>
                <div display='flex' justifyContent='space-between' margin= '20px'>
                    <CardContent>
                        <Typography variant='body2' color='gray' component='p'>
                            {products.details.split(' ').splice(0, 20).join(' ')}... 
                        </Typography>
                    </CardContent>
                </div>
            

                <CardContent >
                    <Typography variant='caption' color='red' sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    position: 'absolute',
                    bottom: 90}}>
                        Only {products.quantity} available!
                    </Typography>


                </CardContent>
                


                <CardContent>
                    <Typography variant='subtitle1' sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    position: 'absolute',
                    bottom: 50}}>
                        Starting at ${products.price}
{/* QUANTITY AMOUNT */}
                    <Box sx={{ display:'flex', alignItems: 'center', ml: 2, mr: 2}}>
                            <Remove onClick={() => handleQuantity("dec")} />
                                <Box>{quantity}</Box>
                            <Add onClick={() => handleQuantity("inc")} />
                    </Box>
               
                    </Typography>
                </CardContent>
                <Button 
                    sx={{ml: 2, mr:2, bottom: 10}} 
                    variant='outlined' 
                    onClick={handleClick}>
                    <Typography variant='caption'>
                        Add
                    </Typography>
                </Button>
        </Card>
    </div>
  )
}
