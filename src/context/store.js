// context/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlices"; // Import your actual slices

const store = configureStore({
  reducer: {
    auth: authReducer, // Add other slices here
  },
});

export default store;
