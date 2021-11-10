import {configureStore} from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartSlice'
import womenCategoryReducer from '../features/womenCategory/womenCategorySlice'

export default configureStore({
    reducer: {
        cart: cartReducer,
        womenCategory: womenCategoryReducer
    }
})