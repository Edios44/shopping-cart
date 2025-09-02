import Products from "./components/products";
import classes from "./shopPage.module.css";

export default function ShopPage() {
  return (
    <>
      <h1>Shop page</h1>
      <Products ulClassName={classes.container} liClassName={classes.card} />
    </>
  );
}
