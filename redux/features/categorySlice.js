'use client'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    products:[]
}

export const getCategory = createAsyncThunk('getCategory', async(category) => {   //* api isteğimizi atıyoruz.
    const response = await fetch(`http://localhost:5000/products/${category}`, {
        method : 'GET'
    })
    const data = await response.json()
    return data
})

export const categorySlice = createSlice({
    name : 'products',
    initialState,
    reducers : {
    },
    extraReducers : (builder) => {
        builder.addCase(getCategory.fulfilled , (state, action) => {     //fulfilled, işlem gerçekleşti, pending = bekleniyor, rejected = error
            state.products = action.payload
            console.log('sadasd',state.products)
        }) 
    }
})

export default categorySlice.reducer
