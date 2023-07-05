import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setInCart] = useState(false)

  function handleClick() {
    setInCart((isInCart) => !isInCart)
  }
  const cart = isInCart ? "in-cart" : ""
  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;

