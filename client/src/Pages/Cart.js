/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import { Add, Remove } from "@material-ui/icons";
import { Typography, Grid, Button, Container, Box, CssBaseline } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'
import { Divider } from "@material-ui/core";
import StripCheckout from "react-stripe-checkout"
import axios from "axios";




export default function Cart() {
    const cart = useSelector(state=>state.cart)
    const quantity = useSelector(state=>state.cart.quantity)
    console.log(cart)
    const estTotal = cart.total + 8.99
    const [stripeToken, setStripeToken] = useState(null)
    const KEY = 'pk_test_51KsOhYErtVtSOuC6rebaOArf5ady1Dnmo6RPTvUGWooZsvc7XcYsdJqlJfX46PdwHqzIfRx1h2e9xjwAGzGxkIGN00zkYB4GYJ'
    const url = "http://localhost:5003"

    // const onToken = (token) => {
    //     setStripeToken(token)
    //     console.log(stripeToken)
    // }

    // useEffect(() => {
    //     const makeRequest = async () => {
    //         try {
    //             console.log(stripeToken.id)
    //             const res = await axios.post("http://localhost:5003/api/checkout/payment",
    //             {
    //             tokenId: stripeToken.id,
    //             amount: 25000,
    //             });
    //         console.log(res.data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };
    //     stripeToken && makeRequest();
    // }, [stripeToken])

    const handleCheckout = () => {
        console.log(cart)
        
        axios.post('http://localhost:5003/create-checkout-session', cart)

          .then((response) => {
            if (response.data.url) {
              window.location.href = response.data.url;
            }
          })
          .catch((err) => console.log(err.message));
      };

      
        
        
    
     
    
    
  return (
      <>
      <CssBaseline/>
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
                    <img width='150px' src={product.products.image.url}/>
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
                    {/* <form action="/create-checkout-session" method="POST"> */}
                    
                        
                    
                        
                                <button onClick={() => handleCheckout()}>
                                    Checkout Now
                                </button>
                        
                    
                   
                </Box>
                    
            </Grid>
            
        
            

        </Grid>
    </Container>
</>
  )
}
