import { useRef, useState } from "react";
import Card from "./card";
import { useContext } from "react";
import { ProductsContext, CartContext } from "../App";

export default function Products({ className, ulRef }) {
  const useCards = useContext(ProductsContext);
  const cards = useCards();

  return (
    <ul className={className} ref={ulRef}>
      {cards.map((card) => (
        <li>
          <Card product={card} />
        </li>
      ))}
    </ul>
  );
}
