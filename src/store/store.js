import rootReducer from "./reducers/reducer";
import {createStore} from "redux";

const store = createStore(rootReducer)

window.store = store;
export default store