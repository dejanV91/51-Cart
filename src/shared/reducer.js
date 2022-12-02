const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }

  if (action.type === "INCREASE") {
    const tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return { ...cartItem };
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "DECREASE") {
    const tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return { ...cartItem };
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }

  if (action.type === "GET_TOTAL") {
    const totalAmount = state.cart.reduce((container, iterator) => {
      return container + iterator.amount;
    }, 0);
    const totalPrice = state.cart.reduce((container, iterator) => {
      return container + iterator.amount * iterator.price;
    }, 0);

    return { ...state, amount: totalAmount, total: totalPrice.toFixed(2) };
  }

  return state;
};

export default reducer;
