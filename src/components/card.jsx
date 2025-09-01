import { useContext, useRef } from "react";
import { CartContext } from "../App";

export default function Card({ product }) {
  const cartState = useContext(CartContext);
  const qtRef = useRef(null);
  function addCartItem(item, qtRef) {
    for (let i = 0; i < qtRef.current.value; i++) {
      cartState.setCart((prevCart) => [...prevCart, item]);
    }
  }
  return (
    <>
      <div>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <div>{product.price}$</div>
        <button onClick={() => addCartItem(product, qtRef)}>Add to cart</button>
        <div>
          <label htmlFor="quantity">Qt.</label>
          <input
            type="number"
            id="quantity"
            ref={qtRef}
            min={1}
            defaultValue={1}
          />
        </div>
      </div>
    </>
  );
}
