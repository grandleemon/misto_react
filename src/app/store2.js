import {configureStore} from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartSlice'
import womenCategoryReducer from '../features/womenCategory/womenCategorySlice'
import menCategoryReducer from '../features/menCategory/menCategorySlice'
import womenPageReducer from '../features/womenPage/womenPageSlice'
import productsReducer from '../features/products/productsSlice.js'



export default configureStore({
    reducer: {
        cart: cartReducer,
        womenCategory: womenCategoryReducer,
        menCategory: menCategoryReducer,
        womenPage: womenPageReducer,
        products: productsReducer
    }
})