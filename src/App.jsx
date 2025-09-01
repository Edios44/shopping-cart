import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { createContext } from "react";

export const ProductsContext = createContext([]);

function useFetchAllProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);
  return products;
}

export default function App() {
  return (
    <>
      <ProductsContext value={useFetchAllProducts}>
        <Navbar />
        <Outlet />
      </ProductsContext>
    </>
  );
}
