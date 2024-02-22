import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useData } from "../Context/DataContext";
export default function CartItem({
  id,
  img,
  product_name,
  descr,
  count,
  price,
}) {
  const { setCartArr, cartArr } = useData();
  function handleClick() {
    const findItem = cartArr.filter((item) => item.id !== id);
    setCartArr(findItem);
  }
  return (
    <div className="cart-item-box">
      <div className="cart-img">
        <img src={img} />
      </div>
      <div className="cart-info">
        <b>{product_name}</b>
        <p>{descr}</p>
        <span>
          {count} x ${price}
        </span>
      </div>
      <div className="cart-btn">
        <button onClick={handleClick} style={{ color: "red" }}>
          <DeleteOutlineIcon />
        </button>
      </div>
    </div>
  );
}
