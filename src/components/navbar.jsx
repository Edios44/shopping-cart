import { Link } from "react-router-dom";
import classes from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={classes.navigation}>
      <Link to={"/"} className={classes.item}>
        Home
      </Link>
      <Link to={"cart"} className={classes.item}>
        cart
      </Link>
      <Link to={"shop"} className={classes.item}>
        shop
      </Link>
    </div>
  );
}
