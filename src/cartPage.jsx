import { CartContext } from "./App";
import { useContext } from "react";

export default function CartPage() {
  const cartState = useContext(CartContext);
  return (
    <>
      <h1>cart page</h1>
      <ul>
        {cartState.cart.map((item) => (
          <li>
            <h2>{item.title}</h2>
            <div>{item.price}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
