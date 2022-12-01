const reducer = (state, action) => {
  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, cart: action.payload };
  }
};

export default reducer;
