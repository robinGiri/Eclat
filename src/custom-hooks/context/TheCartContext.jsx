import React, { createContext, useContext, useReducer } from "react";
import reducer from '../reducer/TheCartReducer';

const CartContext = createContext();
const initialState = {
  cart: [],
  total_item: "",
  total_amount: "",
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: { product } });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
