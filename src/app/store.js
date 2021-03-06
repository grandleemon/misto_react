import {configureStore} from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice'
import womenCategoryReducer from './features/womenCategory/womenCategorySlice'
import menCategoryReducer from './features/menCategory/menCategorySlice'
import productsReducer from './features/products/productsSlice.js'



export default configureStore({
    reducer: {
        cart: cartReducer,
        womenCategory: womenCategoryReducer,
        menCategory: menCategoryReducer,
        products: productsReducer
    }
})