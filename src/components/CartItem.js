import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useGlobalContext } from "../shared/context";

const CartItem = () => {
  const { state } = useGlobalContext();
  return state.map((item) => {
    const { id, amount, img, price, title } = item;
    return (
      <article key={id} className="cart-item">
        <img src={img} alt={title} />
        <div>
          <h4>{title}</h4>
          <h4 className="item-price">{`$${price}`}</h4>
          <button className="remove-btn">remove</button>
        </div>
        <div>
          <button className="amount-btn">
            <FaAngleUp />
          </button>
          <p className="amount">{amount}</p>
          <button className="amount-btn">
            <FaAngleDown />
          </button>
        </div>
      </article>
    );
  });
};

export default CartItem;
