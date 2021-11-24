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
                cartItem => cartItem.id !== action.payload
            )
        },
       setItemQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const index = state.cartItems.findIndex(card => card.id === id)
            state.cartItems[index].quantity = quantity;
       }

    }
})

export const getCartItems = state => state.cart.cartItems;
export const getCardTotal = state => {
    let total = 0;
    for (const { price, quantity } of state.cart.cartItems){
        Array(quantity).fill().forEach( () => {
            total += price
        })
    }
    return total
}

export const {addItemToCart, removeItemFromCart, setItemQuantity} = slice.actions

export default slice.reducer;