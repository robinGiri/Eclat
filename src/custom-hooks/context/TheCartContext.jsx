import React, { createContext, useContext, useReducer, useState } from "react";
import reducer from '../reducer/TheCartReducer'; 

// TheCartContext.js
const CartContext = createContext();
const initialState = {
  cart: [],
  // ... other properties
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false); // Add this line

  const addToCart = (product, quantity) => {
    dispatch({ type: "ADD_TO_CART", payload: { product, quantity } });
  };

  const updateQuantity = (productId, newQuantity) => {
    setIsUpdatingQuantity(true); // Set the flag before updating
    dispatch({ type: "UPDATE_QUANTITY", payload: { productId, newQuantity } });
    setIsUpdatingQuantity(false); // Reset the flag after updating
  };

  return (
    <CartContext.Provider value={{ ...state, isUpdatingQuantity, addToCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };

