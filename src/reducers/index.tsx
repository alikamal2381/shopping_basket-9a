import { combineReducers } from "redux";
import loggedReducer from "./isLogged";
import cartReducers from "./cartReducers";
import orderReducers from "./orderReducers";
import productReducers from "./productReducers";

const rootReducers = combineReducers({
  isLogged: loggedReducer,
  cartReducers: cartReducers,
  orderReducers: orderReducers,
  productReducers: productReducers,
});

export default rootReducers;
