'use client'
import { configureStore } from '@reduxjs/toolkit'
import productSlice from './features/productSlice'
import categorySlice from './features/categorySlice'

export const store = configureStore({
  reducer: {
    product : productSlice,
    category : categorySlice
  },
})