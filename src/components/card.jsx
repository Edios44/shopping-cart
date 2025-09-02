import { useContext, useRef } from "react";
import { CartContext } from "../App";
import classes from "./card.module.css";
import Button from "./button";

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
      <div className={classes.container}>
        <img src={product.image} alt={product.title} className={classes.img} />
        <h3 className={classes.title}>{product.title}</h3>
        <div>{product.price}$</div>
        <div className={classes.inputContainer}>
          <label htmlFor="quantity">Qt.</label>
          <input
            type="number"
            id="quantity"
            ref={qtRef}
            min={1}
            defaultValue={1}
            className={classes.input}
          />
        </div>
        <div className={classes.button}>
          <Button
            style={"primary"}
            handler={() => addCartItem(product, qtRef)}
            content={"Add to cart"}
          />
        </div>
      </div>
    </>
  );
}
