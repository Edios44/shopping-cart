import { CartContext } from "./App";
import { useContext } from "react";
import classes from "./cartPage.module.css";

export default function CartPage() {
  const cartState = useContext(CartContext);
  return (
    <div className={classes.page}>
      <h1>cart page</h1>
      <ul className={classes.ulContainer}>
        {cartState.cart.map((item) => (
          <li className={classes.listItem}>
            <img src={item.image} className={classes.image} alt="" />
            <h2 className={classes.titleItem}>{item.title}</h2>
            <div className={classes.priceItem}>{item.price} $</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
