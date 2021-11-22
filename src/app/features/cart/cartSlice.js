import {createSlice} from "@reduxjs/toolkit";


export const slice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        totalPrice: 0
    },
    reducers: {
        addItemToCart: (state, action) => {
            const pseudoID = (new Date()).getTime(); //id for a cart item
            state.cartItems.push({
                id: pseudoID,
                productID: action.payload.card.id,
                price: action.payload.card.cardPrice,
                image: action.payload.card.cardImage,
                title: action.payload.card.cardTitle,
                quantity: action.payload.card.quantity,
                size: action.payload.size
            })
            state.totalPrice += action.payload.card.cardPrice
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.card.id
            )
            state.totalPrice -= action.payload.card.price
        },
        addToTotalPrice: (state, action) => {
            debugger
            state.totalPrice += action.payload
        },
        removeFromTotalPrice: (state, action) => {
            state.totalPrice -= action.payload;
        }

    }
})

export const getCartItems = state => state.cart.cartItems;
export const getTotalPrice = state => state.cart.totalPrice;

export const {addItemToCart, removeItemFromCart, addToTotalPrice, removeFromTotalPrice} = slice.actions

export default slice.reducer;