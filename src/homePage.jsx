import ProductsCarousel from "./components/productsCarousel";

export default function HomePage() {
  return (
    <>
      <header>
        <h1>Online Store</h1>
        <p>unlock your style!</p>
        <button>Browse Now</button>
      </header>
      <main>
        <div className="latestProducts">
          <h2>Latest Products</h2>
          <ProductsCarousel />
        </div>
      </main>
    </>
  );
}
