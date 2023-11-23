// context/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlices";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});

export default store;
