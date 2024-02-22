import React from "react";
import Products from "../Products/Products";

export default function Shoes() {
  return (
    <div className="category-container">
      <div className="category-box">
        <Products category="Shoes" />
      </div>
    </div>
  );
}
