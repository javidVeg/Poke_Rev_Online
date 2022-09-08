import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Container } from '@mui/material';
import ProductItem from '../../Components/ProductItem';
import { getProduct, reset } from '../../Features/product/productSlice';
import LoadingBar from '../../Components/LoadingBar';
import "./HomeItems.css"

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
        <div className="home-items-container" >
            <div className='home-items'>
                {products.slice(0, 6).map((products,_id) => (
                    <div className='items-ea' key={_id} >
                        <ProductItem key= {products._id} products={products} />
                    </div>
                ))}
                <div className='call-action'><button><a href='/store'>Shop The PokeCave Store!</a></button></div>
            </div>
        </div>
    )
  )
}
