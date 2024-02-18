import React, { useEffect, useState } from "react";
import { add } from "../Redux/cartSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    // const fetchproduct = () => {
    //   const res = fetch(``);
    //   const data = res.json();
    //   console.log(data);
    // // };
    const fetchproduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchproduct();
  }, []);
  const handel_add = (product) => {
    dispatch(add(product));
  };
  return (
    <div>
      <div className="productsWrapper">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h4>{product.price}</h4>
            <button className="btn" onClick={() => handel_add(product)}>
              Add to card
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
