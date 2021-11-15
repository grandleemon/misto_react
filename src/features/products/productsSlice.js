import {createSlice} from "@reduxjs/toolkit";


export const productsSlice = createSlice({
    name: "products",
    initialState: {
        currentProduct: null
    },
    reducers: {
        setCurrentProduct: (state, action) => {
            state.currentProduct = action.payload
        }
    }
})

export const getCurrentProduct = state => state.products.currentProduct

export const {setCurrentProduct} = productsSlice.actions
export default productsSlice.reducer;