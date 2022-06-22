import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

import productService from './productService';

const initialState = { 
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
      }


//! Creates new product
export const createProducts = createAsyncThunk('products/create', async (productData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    console.log(token)
    return await productService.createProduct(productData,token)
  } catch (error) {
    const message = 
      (error.response && error.response.data && error.response.data.message) || 
      error.message || 
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

//! Gets product
export const  getProduct = createAsyncThunk('product/getAll', async(_,thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await productService.getProduct(token)
  } catch (error) {
    const message = 
    (error.response && error.response.data && error.response.data.message) || 
    error.message || 
    error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

//! Delete product
export const deleteProducts = createAsyncThunk(
  'products/delete', async (productId, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    console.log(token)
    return await productService.deleteProduct(productId,token)
  } catch (error) {
    const message = 
      (error.response && error.response.data && error.response.data.message) || 
      error.message || 
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.products.push(action.payload)
      })
      .addCase(createProducts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.products = action.payload
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.products = state.products.filter(
          (products) => products._id !== action.payload.id
        )
      })
      .addCase(deleteProducts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})

export const { reset } = productSlice.actions
export default productSlice.reducer