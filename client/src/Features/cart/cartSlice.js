import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice ({
    name: 'cart',
    initialState: {
//! @THIS IS CHECKING IF WE HAVE PRODUCTS IN LOCAL STORAGE, IF NOT IT WILL SET THE STATE TO AN EMPTY ARRAY.
        products: localStorage.getItem('products') 
        ? JSON.parse(localStorage.getItem('products'))
        : [],
        // QUANTITY FOR THE CART ICON IN @NAVBAR
        quantity: 0,
        // TOTAL FOR CART SUBTOTAL @CART.JS
        total: 0,
    },
    reducers: {
//? @ADD PRODUCTS TO CART REDUCER 
        addProduct (state, action) {
            const itemIndex = state.products.findIndex(
                 (item) => item._id === action.payload._id
            );
            if(itemIndex >= 0){
                state.products[itemIndex].cartQuantity += 1
            } else {
                const cartProduct = { ...action.payload, cartQuantity: 1 }
                state.products.push(cartProduct);
            }
            state.quantity += 1;
            if(state.products.push){
                toast.info(`${action.payload.product} added to shopping cart!`, {
                    position: 'top-left',
                })
            } 
//! @PRICE AND QUANTITY COME FROM THE PAYLOAD OF PRODUCTS WHEN "ADD" IS CLICKED.
            state.total += action.payload.price * action.payload.quantity;
//! @THIS ADDS NEW 'products' TO LOCAL STORAGE.
            localStorage.setItem('products', JSON.stringify(state.products))
        },
//? @REMOVE FROM CART REDUCER
//! @FINDS ALL THE PRODUCTS MINUS THE ONE WITH THE ID THAT IS DELETED AND SHOWS THE REMAINING.
        removeFromCart (state, action) {
            state.products.map((product) => { 
                if (product._id === action.payload._id) {
                    const updatedCart = state.products.filter(
                        (item) => item._id !== product._id
                    )
//! @THIS REMOVES 'products' FROM LOCAL STORAGE.
                    state.products = updatedCart
            
                    toast.error(`${action.payload.product} removed from shopping cart!`, {
                        position: 'top-left',
                    });
            }
            localStorage.setItem('products', JSON.stringify(state.products))
            });
        },
//? @CALCULATE TOTALS REDUCER
        cartTotals (state, action) {
//! @cartTotal = OBJECT{total:0, quantity: 0} & procuct GETS ITERATED THROUGH TO CALCULATE TOTALS
            let { total, quantity } = state.products.reduce((cartTotal, product) => {
                const { price, cartQuantity } = product;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;

                return cartTotal;
            },
            {
                total: 0,
                quantity: 0
            }
            );
            state.quantity = quantity;
            state.total = total
        }
    }

});

export const { addProduct, removeFromCart, cartTotals } = cartSlice.actions
export default cartSlice.reducer

