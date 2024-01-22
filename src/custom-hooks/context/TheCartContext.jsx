import React, { createContext, useContext, useEffect, useReducer } from "react";
import TheCartReducer from "../reducer/TheCartReducer";

const CartContext = createContext();

const getLocalStorageCartData = () => {
  let localStorageData = localStorage.getItem("Abhisek Cart");

  try {
    return localStorageData ? JSON.parse(localStorageData) : [];
  } catch (error) {
    console.error("Error parsing local storage data:", error);
    return [];
  }
};

const initialState = {
  cart: getLocalStorageCartData(),
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TheCartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: { product } });
  };

  const removeItem = (productId) => {
    dispatch({ type: "REMOVE_ITEM", payload: productId });
  };

  const updateItemQuantity = (productId, quantityChange) => {
    dispatch({
      type: "UPDATE_ITEM_QUANTITY",
      payload: { productId, quantityChange },
    });
  };

  useEffect(() => {
    localStorage.setItem("Abhisek Cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const getProductAmount = (productId) => {
    const cartItem = state.cart.find((item) => item.id === productId);
    return cartItem ? cartItem.amount : 1;
  };

  const setProductAmount = (productId, amount) => {
    dispatch({ type: "SET_PRODUCT_AMOUNT", payload: { productId, amount } });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        updateItemQuantity,
        getProductAmount,
        setProductAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
