import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Redux/cartSlice";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handelremove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="cartWrapper">
      {cartItem.map((item) => (
        <div className="cartCard">
          <img src={item.image} alt="img" />

          <h5>{item.title}</h5>

          <h3>{item.price}</h3>
          <button className="btn" onClick={() => handelremove(item.id)}>
            Remove
          </button>
        </div>
      ))}
      <p style={{ fontWeight: "bolder", marginLeft: "80%" }}>
        Total Rs{" "}
        {cartItem
          .map((item) => item.price)
          .reduce((total, value) => total + value, 0)}
        <button className="btn" style={{ marginLeft: "15px" }}>
          Proceed To payment
        </button>
      </p>
    </div>
  );
};

export default Cart;
