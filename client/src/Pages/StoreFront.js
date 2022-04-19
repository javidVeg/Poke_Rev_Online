import {useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Box, Grow, Container } from '@mui/material';
import { Card, CardMedia } from '@mui/material'
import productService from '../Features/product/productService';
import ProductItem from '../Components/ProductItem';
import { getProduct, reset } from '../Features/product/productSlice';
import LoadingBar from '../Components/LoadingBar';

export default function StoreFront() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const { products, isLoading, isError, message } = useSelector(
        (state) => state.products
      )

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

    if(isLoading) {
        return <LoadingBar />
    }
  return (
    isLoading ? <LoadingBar/> : (
    <Grow in>
        <Container maxWidth='xl'>
           
            <Grid container alignItems='stretch' spacing={3} sx={{mb:10}}>
                            {products.map((products) => (
                                <Grid item xs={12} sm={12} md={6} lg={3}>
                                    <ProductItem key= {products._id} products={products} />
                                </Grid>
                                ))}
            </Grid>
        </Container>
    </Grow>
    )
    //   <>
    //     <section>
    //         <h1>
    //             Welcome {user && user.name}
    //         </h1>
    //         <p>
    //             Poke Cave Store Front
    //         </p>
    //     </section>
    //     <section>
    //         {products.length > 0 ? (
    //             <div>
    //                 {products.map((products) => (
    //                     <ProductItem key= {products._id} products={products} />), console.log(products))}
    //             </div>
    //         ) : (<h3>No products in your store</h3>)}
    //     </section>
    //   </>
  )
}
