import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Container } from '@mui/material';
import ProductItem from '../../Components/ProductItem';
import { getProduct, reset } from '../../Features/product/productSlice';
import LoadingBar from '../../Components/LoadingBar';
import "./StoreFront.css"

export default function StoreFront() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const { products, isLoading, isError, message } = useSelector((state) => state.products)

    useEffect(() => {
        if (isError) {
            console.log(message)
        }
        if (!user) {
            navigate('/login')
        }
        dispatch(getProduct())

        return () => {
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])

    return (
        isLoading ? <LoadingBar /> : (
            <div>
                <h1 className='call-action-storefront'>Shop the PokeRev Store.</h1>
                <h2 className='call-caption-storefront'><span className='sealed'>Sealed </span>booster boxes, cases, and more.</h2>
                <div className="store-container" >
                    {products.map((products, _id) => (
                        <div className='store-items-ea' key={_id} >
                            <ProductItem key={products._id} products={products} />
                        </div>
                    ))}
                </div>
            </div>
        )
    )
}
