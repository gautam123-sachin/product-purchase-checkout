import React, { createContext, useContext, useReducer  } from 'react';

const CartContext = createContext();
const CustomerInfoContext = createContext();


export function useCart() {
  return useContext(CartContext);
}
function cartReducer(state, action) {
  switch (action.type) {
      case 'ADD_TO_CART':
          return [...state, action.product];
      case 'CLEAR_CART':
          return []; // Clear the cart by returning an empty array
      default:
          return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCustomerInfo() {
  return useContext(CustomerInfoContext);
}

function customerInfoReducer(state, action) {
  switch (action.type) {
    case 'SET_CUSTOMER_INFO':
      return { ...state, ...action.payload };
      case 'CLEAR_CUSTOMER_INFO':
        return []
    default:
      return state;
  }
}

export function CustomerInfoProvider({ children }) {
  const [customerInfo, dispatch] = useReducer(customerInfoReducer, {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  return (
    <CustomerInfoContext.Provider value={{ customerInfo, dispatch }}>
      {children}
    </CustomerInfoContext.Provider>
  );
}

