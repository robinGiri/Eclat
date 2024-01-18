const TheCartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { product, quantity } = action.payload;
      const { id } = product;

      const existingProductIndex = state.cart.findIndex((p) => p.id === id);

      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity += quantity;

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        const cartProduct = {
          ...product,
          quantity,
        };

        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }

    case "UPDATE_QUANTITY":
      const { productId, newQuantity } = action.payload;
      const updatedCart = state.cart.map((product) =>
        product.id === productId ? { ...product, quantity: newQuantity } : product
      );

      return {
        ...state,
        cart: updatedCart,
      };

    default:
      return state;
  }
};

export default TheCartReducer;
