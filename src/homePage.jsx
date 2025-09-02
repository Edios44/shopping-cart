import ProductsCarousel from "./components/productsCarousel";
import classes from "./homePage.module.css";

export default function HomePage() {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.title}>Online Store</h1>
        <div className={classes.container}>
          <p>unlock your style!</p>
          <button>Browse Now</button>
        </div>
      </header>
      <main>
        <div className={classes.latestProducts}>
          <h2>Latest Products</h2>
          <ProductsCarousel />
        </div>
      </main>
    </>
  );
}
