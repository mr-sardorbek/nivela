import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice"
import { productsApi } from "@/features/products/productsAPI";


export const store = configureStore({
    reducer: {
       products: productReducer,
       [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productsApi.middleware)
})