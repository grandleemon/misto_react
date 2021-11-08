import image1 from "./../../images/WomenShopSection/Cards/womenTracksuitQ109.jpg"
import React from "react";

const initialState = [
    {id: 1, image: image1, cardPrice:"$379.99", title:"Women's tracksuit Q109", color: "Blue", size: "S"},
    {id: 2, image: image1, cardPrice:"$379.99", title:"Women's tracksuit Q109", color: "Blue", size: "S"},
    {id: 3, image: image1, cardPrice:"$379.99", title:"Women's tracksuit Q109", color: "Blue", size: "S"},
]

export default function shoppingCartReducer (state=initialState, action){
    switch(action.type){
        case "cart/remove":
            debugger
            return state.filter((card) => card.id !== action.payload)
        default:
            return state
    }
}