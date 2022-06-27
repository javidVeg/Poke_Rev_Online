import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Container } from '@mui/material';
import ProductItem from '../Components/ProductItem';
import { getProduct, reset } from '../Features/product/productSlice';
import LoadingBar from '../Components/LoadingBar';

export default function StoreFront() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const { products, isLoading, isError, message } = useSelector((state) => state.products)

    useEffect(() => {
        if(isError){
            console.log(message)
        }
        if(!user){
            navigate('/login')
        }
        dispatch(getProduct())
        
        return () => {
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])

  return (
    isLoading ? <LoadingBar/> : (
        <Container fixed>
            <Grid container alignItems='stretch' spacing={3} sx={{mb:10}}>
                {products.map((products,_id) => (
                    <Grid item key={_id} xs={12} sm={6} md={6} lg={3}>
                        <ProductItem key= {products._id} products={products} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
  )
}
