import { useRef } from "react";
import Products from "./products";
import classes from "./productsCarousel.module.css";

export default function ProductsCarousel() {
  const ulRef = useRef(null);
  function scrollCarousel(direction) {
    if (direction == "next") {
      ulRef.current.scrollLeft += 1000;
    } else if (direction == "prev") {
      ulRef.current.scrollLeft -= 1000;
    }
  }
  return (
    <div className={classes.container}>
      <button onClick={(e) => scrollCarousel("prev")}>Previous</button>
      <Products className={classes.carousel} ulRef={ulRef} />
      <button onClick={(e) => scrollCarousel("next")}>Next</button>
    </div>
  );
}
