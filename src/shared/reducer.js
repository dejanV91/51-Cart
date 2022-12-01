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
    if (action.payload === []) {
      return { ...state, total: 0, amount: 0 };
    } else {
      let number = 0;
      let cartAmount = action.payload.map((item) => {
        number = number + item.amount;
        return item.amount * item.price;
      });

      let totalAmount = cartAmount.reduce((a, b) => a + b);
      return { ...state, total: totalAmount, amount: number };
    }
  }
};

export default reducer;
