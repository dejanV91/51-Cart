export const reducer = ({ state, action }) => {
  console.log(state);
  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, cart: action.payload };
  }
};
