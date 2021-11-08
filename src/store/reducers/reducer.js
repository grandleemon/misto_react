import {combineReducers} from "redux";
import womenCardsReducer from "./womenCardsSlice";
import menCardsReducer from "./menCardsSlice";
import shoppingCartReducer from "./shoppingCartSlice";

const rootReducer = combineReducers({
        womenCards: womenCardsReducer,
        menCards: menCardsReducer,
        shoppingCart: shoppingCartReducer
    }
)

export default rootReducer