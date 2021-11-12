import {createSlice} from "@reduxjs/toolkit";


export const slice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            const pseudoID = (new Date()).getTime(); //id for a cart item
            debugger
            state.cartItems.push({
                id: pseudoID,
                productID: action.payload.card.id,
                price: action.payload.card.cardPrice,
                image: action.payload.card.cardImage,
                title: action.payload.card.cardTitle,
                size: "S"
            })
        }
    }
})

export const getCartItems = state => state.cart.cartItems;

export const {addItemToCart} = slice.actions

export default slice.reducer;