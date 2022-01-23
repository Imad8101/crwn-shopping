import { combineReducers } from "redux";
import userReducer from "./users/userReducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
