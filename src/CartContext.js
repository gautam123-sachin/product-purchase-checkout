import React, { createContext, useContext, useReducer } from "react";

// Create a context for the cart
const CartContext = createContext();

// Create a context for the customer info
const CustomerInfoContext = createContext();

// Custom hook to access the cart context
export function useCart() {
  return useContext(CartContext);
}

// Reducer function for the cart state
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.product];
    case "CLEAR_CART":
      return []; // Clear the cart by returning an empty array
    default:
      return state;
  }
}

// Provider component for the cart context
export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to access the customer info context
export function useCustomerInfo() {
  return useContext(CustomerInfoContext);
}

// Reducer function for the customer info state
function customerInfoReducer(state, action) {
  switch (action.type) {
    case "SET_CUSTOMER_INFO":
      return { ...state, ...action.payload };
    case "CLEAR_CUSTOMER_INFO":
      return { firstName: "", lastName: "", email: "", phone: "" }; // Clear the customer info by returning an empty object
    default:
      return state;
  }
}

// Provider component for the customer info context
export function CustomerInfoProvider({ children }) {
  const [customerInfo, dispatch] = useReducer(customerInfoReducer, {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  return (
    <CustomerInfoContext.Provider value={{ customerInfo, dispatch }}>
      {children}
    </CustomerInfoContext.Provider>
  );
}
