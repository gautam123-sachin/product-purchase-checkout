// src/context/slices/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, image } = action.payload;

      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        console.log("existingItem)", existingItem);
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id,
          name,
          price,
          image,
          quantity: 1,
        });
      }
    },

    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity -= 1;
      }
    },
    deleteItems: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);

    }
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, deleteItems } =
  cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export default cartSlice.reducer;
