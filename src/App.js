import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import SingIn from "./components/ManagingUser/addUser";
import VueUser from "./components/ManagingUser/vueUser";

function App() {
  return (
    <Provider store={store}>
      <SingIn />
      <VueUser />
    </Provider>
  );
}

export default App;
