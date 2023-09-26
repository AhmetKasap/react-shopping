'use client'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    products:[]
}

export const getProduct = createAsyncThunk('getProduct', async() => {   //* api isteğimizi atıyoruz.
    const response = await fetch('http://localhost:5000/products', {
        method : 'GET'
    })
    const data = await response.json()
    return data
})

export const productSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder.addCase(getProduct.fulfilled , (state, action) => {     //fulfilled, işlem gerçekleşti, pending = bekleniyor, rejected = error
            state.products = action.payload
        }) 
    }
})

export default countrySlice.productSlice