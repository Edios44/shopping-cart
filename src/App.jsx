import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { createContext } from "react";

export const ProductsContext = createContext([]);
export const CartContext = createContext([]);

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
  const [cart, setCart] = useState([]);

  return (
    <>
      <ProductsContext value={useFetchAllProducts}>
        <CartContext value={{ cart, setCart }}>
          <Navbar />
          <Outlet />
        </CartContext>
      </ProductsContext>
    </>
  );
}
