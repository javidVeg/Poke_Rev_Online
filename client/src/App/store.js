import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/auth/authSlice";
import productReducer from "../Features/product/productSlice";
import cartReducer from "../Features/cart/cartSlice"


export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        cart: cartReducer
    },
})