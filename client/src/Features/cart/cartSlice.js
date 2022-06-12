import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers:{
        addProduct:(state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            //! @PRICE AND QUANTITY COME FROM THE PAYLOAD OF PRODUCTS WHEN "ADD" IS CLICKED
            state.total += action.payload.price * action.payload.quantity;
        }
    }

});

export const { addProduct } = cartSlice.actions
export default cartSlice.reducer

