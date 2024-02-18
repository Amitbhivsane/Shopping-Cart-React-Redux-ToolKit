import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navebar = () => {
  const item = useSelector((state) => state.cart);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span>Shppping card</span>
      <div>
        <Link className="navLink" to="/" style={{ fontWeight: "bold" }}>
          Home
        </Link>
        <Link
          className="navLink"
          style={{ marginRight: "8px", fontWeight: "bold" }}
          to="/cart"
        >
          Cart
        </Link>
        <span style={{ fontWeight: "bold" }}>Item:{item.length}</span>
      </div>
    </div>
  );
};

export default Navebar;
