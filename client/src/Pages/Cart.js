import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
    const cart = useSelector(state=>state.cart)
    console.log(cart)
  return (
    <div>Cart</div>
  )
}
