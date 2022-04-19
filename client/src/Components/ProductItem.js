import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProducts } from '../Features/product/productSlice'
import { Button, ButtonBase, Card, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material'
import { addProduct } from '../Features/cart/cartSlice'

export default function ProductItem({  products, price }) {
    const dispatch = useDispatch()
    console.log(products)

    const openProduct = (e) => {
        
    }
//! UPDATES CART /
    const handleClick = () => {
        dispatch(addProduct({products, price: products.price}));
    }

  return (
    <div>
        <Card display='flex' flexDirection= 'column' sx={{
            display:'flex',
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            height:'500px', 
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
                    src={products.image || "./maxresdefault-2.jpg"}/>
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
                    bottom: 40}}>
                        Only {products.quantity} available!
                    </Typography>
                </CardContent>


                <CardContent >
                    <Typography variant='subtitle1' sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    position: 'absolute',
                    bottom: 10
                    
                }}>
                        Starting at ${products.price}
                
                <Button 
                    sx={{ml: 1}} 
                    variant='outlined' 
                    onClick={handleClick}>
                    <Typography variant='caption'>
                        Add
                    </Typography>
                </Button>
               
                    </Typography>
                </CardContent>
               

        {/* <button onClick={() => dispatch(deleteProducts(products._id))}>delete</button> */}
        </Card>
    </div>
  )
}
