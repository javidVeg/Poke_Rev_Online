/* eslint-disable react/jsx-key */
import { Add, Remove } from "@material-ui/icons";
import { Typography, Grid, Button, Container, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'
import { Divider } from "@material-ui/core";



export default function Cart() {
    const cart = useSelector(state=>state.cart)
    const quantity = useSelector(state=>state.cart.quantity)
    console.log(cart)
    const estTotal = cart.total + 8.99
    
    console.log(estTotal)
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
            name='top'
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
            name='Bottom'
            display='flex'
            justifyContent='space-between'
            >
            <Box name='info' flex= '3' key={cart}>
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
                                <b>Details:</b> {product.products.details}
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
                                    <Add/>
                                    <Box
                                        fontSize='20px'
                                        margin='5px'>
                                        {product.products.quantity}
                                    </Box>
                                    <Remove/>
                            </Box>
                            <Box fontSize='30px' fontWeight='200'>
                                        ${product.products.price}
                            </Box>
                    </Box>
            </Box>
            ))}
            <hr 
                background-color='#eee'
                border='none'
                height='1px'
            />
        </Box>
            
           <Grid
            >
                <Box name='summary'
                    flex='1'
                    border='0.5px solid lightgray'
                    borderRadius='10px'
                    padding='20px'
                    height='45vh'>
                    <Typography
                        textAlign='center'
                        variant='h3'
                    >Order Summary</Typography> 
                    <Box
                        margin='30px 0px'
                        display='flex'
                        justifyContent='space-between'
                        >
                        <span>
                            Subtotal
                        </span>
                        <span>
                            ${cart.total}
                        </span>
                    </Box>
                    <Box
                        margin='30px 0px'
                        display='flex'
                        justifyContent='space-between'
                        >
                        <span>
                            Estimated Shipping
                        </span>
                        <span>
                            $8.99
                        </span>
                    </Box>
                    <Box
                        margin='30px 0px'
                        display='flex'
                        justifyContent='space-between'
                        >
                        <span>
                            <b>
                            Estimated Subtotal
                            </b>
                        </span>
                        <span>
                            <b>
                            ${estTotal}
                            </b>
                        </span>
                    </Box>
                    <Box textAlign='center' padding='5px' sx={{color:'gray'}}>
                    <Button variant='outlined' color='inherit'  sx={{color:'gray', width: '100%'}}>
                        Checkout Now
                    </Button>
                    </Box>
                   
                </Box>
                    
            </Grid>
            
        
            

        </Grid>
    </Container>

  )
}
