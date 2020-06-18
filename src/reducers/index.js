import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";

const allReducers = combineReducers({
  users: userReducer,
  products: productReducer,
});

export default allReducers;
