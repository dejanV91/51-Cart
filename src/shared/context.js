import React, { useContext, useEffect, useReducer } from "react";
import data from "./data";
import { reducer } from "./reducer";
const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: data,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchData();
  }, [state]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: data });
  };

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
