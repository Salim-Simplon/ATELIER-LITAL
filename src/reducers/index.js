import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import historicReducer from "./historicReducer";

const allReducers = combineReducers({
  users: userReducer,
  products: productReducer,
  history : historicReducer
});

export default allReducers;
