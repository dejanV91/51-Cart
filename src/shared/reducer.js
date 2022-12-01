const reducer = (state, action) => {
  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, cart: action.payload };
  }

  if (action.type === "REMOVE_ALL") {
    return { ...state, total: 0, cart: action.payload };
  }
};

export default reducer;
