import React from "react";
import Products from "../Products/Products";

export default function Furniture() {
  return (
    <div className="category-container">
      <div className="category-box">
        <Products category="Furniture" />
      </div>
    </div>
  );
}
