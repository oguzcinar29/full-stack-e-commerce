import React from "react";

import { Link } from "react-router-dom";
export default function ProductItems({ id, img, product_name, price }) {
  return (
    <div className="product-item">
      <Link to={`/${id}`}>
        <img alt="" src={img} />
      </Link>
      <span>{product_name}</span>
      <b>${price}</b>
    </div>
  );
}
