// TheCartReducer.js

const TheCartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { product, quantity } = action.payload;

    const { id, name, color, amount, images, price, discount, afterdiscount } = product;

    const cartProduct = {
      id,
      name,
      color,
      amount,
      image: images && images.length > 0 ? images[0].url : '',
      price,
      discount,
      afterdiscount,
      quantity,
    };

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }

  return state;
};

export default TheCartReducer;
