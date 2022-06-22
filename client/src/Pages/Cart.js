/* eslint-disable react/jsx-key */
import React, {useEffect } from 'react'
import { Add, Remove } from "@material-ui/icons";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Typography, Grid, Button, Container, Box, CssBaseline } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch  } from 'react-redux'
import axios from "axios";
import { cartTotals, removeFromCart } from "../Features/cart/cartSlice";



export default function Cart() {
    //! @ DELETE ?
    // const [itemID, setItemID ] = useState('')
    const cart = useSelector((state)=>state.cart)
    const dispatch = useDispatch();

    const handleDelete = (product) => {
        dispatch(removeFromCart(product))   
    }
    useEffect(() => {
        dispatch(cartTotals)
        console.log(cart)
    },[cart, dispatch])

    
    const estTotal = cart.total + 8.99
    

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
                            You currently have {0} items in your cart!
                    </Typography>
                </Grid>
{/* THIS IS YOUR MAPPED CART ITEMS */}
                <Grid display='flex' justifyContent='space-between'> 
{/* ITEM IN CART INFO */}
                    <Box  flex= '3' key={cart}>
                    {cart.products.map((product, pos) => (
                        <Box display='flex' justifyContent='space-between' padding='20px' key={product._id}> 
                            <Box flex='2' display='flex'>
                                <img width='150px' height= '150px' src={product.image.url}/>
                                    <Box padding='20px' display='flex' flexDirection='column' justifyContent='space-around' key={pos}>
                                        <span>
                                            <b>Product:</b> {product.product}
                                        </span> 
                                        <Typography variant='caption'>   
                                            <span>
                                                <b>SKU:</b> {product._id}
                                            </span>  
                                        </Typography>  
                                        <Typography variant='caption'>   
                                            <span>
                                                <b>Details:</b> {product.details.split(' ').splice(0, 35).join(' ')}...
                                            </span>
                                        </Typography>
                                    </Box>
                            </Box>
                            <Box flex ='1' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                                <Box display='flex' alignItems='center' marginBottom='20px'>
                                    <Add/>
                                        <Box
                                            fontSize='20px'
                                            margin='5px'>
                                            {product.quantity}
                                        </Box>
                                    <Remove/>
                                </Box>
                                <Box fontSize='30px' fontWeight='200'>
                                            ${product.price}
                                </Box>
                                
                                <Button>
                                <DeleteForeverIcon onClick={() => handleDelete(product)} sx={{color: 'red'}}/>
                                </Button>
                                
                            </Box>
                    </Box>
                    ))}
{/* @END ITEM IN CART INFO */}
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
