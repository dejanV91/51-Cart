import React from "react";
import CartContainer from "./components/CartContainer";
// import CartItem from "./components/CartItem";
import Navbar from "./components/Navbar";
import { useGlobalContext } from "../src/shared/context";

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
