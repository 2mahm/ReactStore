import React, { useEffect, useState } from "react";
import Card from "../../pages/Card";
import SingelProduct from "./SingelProduct";
import axios from "axios";
export default function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => setProducts(data.data));
  }, []);
  return (
    <>
      {!products.length ? (
        <h2 className="text-center p-3 my-3 text-red"> Loading ...</h2>
      ) : (
        products.map((product) => {
          return <SingelProduct product={product} key={product.id} />;
        })
      )}
    </>
  );
}
