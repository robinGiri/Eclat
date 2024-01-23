const TheCartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { product } = action.payload;
    console.log("Product is here", product);
    const { id, name, color, images, price, discount, afterdiscount } =
      product;

    const existingProduct = state.cart.find((item) => item.id === id);

    if (existingProduct) {
      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );

      return {
        ...state,
        cart: updatedCart,
      };
    } else {
      const cartProduct = {
        id,
        name,
        color,
        image: images && images.length > 0 ? images[0].url : "",
        price,
        discount,
        afterdiscount,
        amount: 1,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }
  if (action.type === "REMOVE_ITEM") {
    const updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }
  if (action.type === "UPDATE_ITEM_QUANTITY") {
    const { productId, quantityChange } = action.payload;
    const updatedCart = state.cart.map((item) =>
      item.id === productId
        ? { ...item, amount: item.amount + quantityChange }
        : item
    );

    return {
      ...state,
      cart: updatedCart,
    };
  }


  return state;
};

export default TheCartReducer;
