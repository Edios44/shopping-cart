export default function Card({ product }) {
  return (
    <>
      <div>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <div>{product.price}$</div>
        <button>Add to cart</button>
        <div>
          <label htmlFor="quantity">Qt.</label>
          <input type="number" id="quantity" />
        </div>
      </div>
    </>
  );
}
