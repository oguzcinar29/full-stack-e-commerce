import React from "react";
import Products from "../Products/Products";

export default function Clothes() {
  return (
    <div className="category-container">
      <div className="category-box">
        <Products category="Clothes" />
      </div>
    </div>
  );
}
