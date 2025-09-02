import { useRef, useState } from "react";
import Card from "./card";
import { useContext } from "react";
import { ProductsContext, CartContext } from "../App";

export default function Products({ ulClassName, liClassName, ulRef }) {
  const useCards = useContext(ProductsContext);
  const cards = useCards();

  return (
    <ul className={ulClassName} ref={ulRef}>
      {cards.map((card) => (
        <li className={liClassName}>
          <Card product={card} />
        </li>
      ))}
    </ul>
  );
}
