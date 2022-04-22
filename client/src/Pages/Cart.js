import { Typography, Grid, Button, Container } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'
import { Box } from '@mui/system'


export default function Cart() {
    const cart = useSelector(state=>state.cart)
    const quantity = useSelector(state=>state.cart.quantity)
    console.log(cart)
  return (
    <Container padding='20px'>
        <Typography 
            variant='h3'
            textAlign='center'
            fontWeight='300'
            fontFamily='new-courier'  
            sx={{ mt:3}}>
            Your Cart
        </Typography>
        <Grid 
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            padding='20px'> 
            <Link to='/store'>
                <Button variant='outlined'>
                    Continue Shopping 
                </Button>
            </Link>
            <Typography> 
                    You currently have {quantity} items in your cart!
            </Typography>
        </Grid>
        <Grid
            display='flex'
            justifyContent='space-between'
            >
            <Box flex= '3' key={cart}>
            {cart.products.map((product, pos) => (
                <Box 
                    display='flex'
                    justifyContent='space-between'
                    padding='20px'
                    > 
                    <Box flex='2' display='flex'>
                    <img width='150px' src={product.products.image}/>
                    <Box 
                        padding='20px'
                        display='flex'
                        flexDirection='column'
                        justifyContent='space-around'
                        key={pos}>
                        
                        <span>
                            <b>Product:</b> {product.products.product}
                        </span> 
                        <Typography variant='caption'>   
                        <span>
                            <b>SKU:</b> {product.products._id}
                        </span>  
                        </Typography>  
                        <Typography variant='caption'>   
                        <span>
                            <b>Details</b> {product.products.details}
                        </span>  
                        </Typography>  
                        
                    
                    </Box>
                  
                </Box>
                <Box
                        flex='1'
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'>
                            <Box 
                                display='flex'
                                alignItems='center'
                                marginBottom='20px'>
                                    <Box
                                        fontSize='20px'
                                        margin='5px'>
                                            ${product.products.price}

                                    </Box>

                            </Box>

                    </Box>
            </Box>
         
             
                


            ))}
            </Box>

        </Grid>
    </Container>

  )
}
