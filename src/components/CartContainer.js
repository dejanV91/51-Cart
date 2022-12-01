import React from "react";
import { useGlobalContext } from "../shared/context";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cart } = useGlobalContext();

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            {"total"}
            <span>{"$ 2999"}</span>
          </h4>
        </div>
        <button className="btn clear-btn">clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
