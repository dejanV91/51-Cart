const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }

  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, cart: action.payload, loading: false };
  }

  if (action.type === "REMOVE_ALL") {
    return { ...state, total: 0, cart: action.payload };
  }

  if (action.type === "GET_TOTAL") {
    console.log(action.payload);
    if (action.payload === []) {
      return { ...state, total: 0, amount: 0 };
    } else {
      let cartAmount = action.payload.map((item) => {
        return item.amount * item.price;
      });

      let totalAmount = cartAmount.reduce((a, b) => a + b);
      return { ...state, total: totalAmount, amount: cartAmount.length };
    }
  }
};

export default reducer;
