import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useGlobalContext } from "../shared/context";

const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3>useReducer</h3>
        <div className="nav-container">
          <FaShoppingCart size={"2rem"} />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
