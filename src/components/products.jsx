import { useState } from "react";
import Card from "./card";
import { useContext } from "react";
import { ProductsContext } from "../App";

export default function Products() {
  const useCards = useContext(ProductsContext);
  const cards = useCards();
  console.log(cards);
  return (
    <>
      {cards.map((card) => (
        <>
          <Card product={card} />
        </>
      ))}
    </>
  );
}
