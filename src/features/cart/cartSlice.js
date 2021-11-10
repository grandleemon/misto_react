import {createSlice} from "@reduxjs/toolkit";


export const slice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            alert(action.payload)
        }
    }
})

export const {addItemToCart} = slice.actions

export default slice.reducer;