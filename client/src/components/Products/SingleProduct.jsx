import React, { useEffect, useState } from "react";
import { useData } from "../Context/DataContext";
import { useParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
export default function SingleProduct() {
  const { id } = useParams();
  const { products, cartArr, setCartArr } = useData();
  const findItem = products.filter((item) => item.id === parseInt(id));
  const [count, setCount] = useState(1);
  const [bigImg, setBigImg] = useState(
    typeof findItem !== "undefined" && findItem[0]?.img[0]
  );

  function handleClick(type) {
    if (type === "inc") {
      setCount((prevVal) => prevVal + 1);
    } else if (type === "dec") {
      if (count !== 1) {
        setCount((prevVal) => prevVal - 1);
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCartArr(() => {
      if (localStorage.getItem("cart") === "null") {
        const newFindItem = {
          category: findItem[0].category,
          descr: findItem[0].descr,
          id: findItem[0].id,
          img: findItem[0].img,
          price: findItem[0].price,
          product_name: findItem[0].product_name,
          count: count,
        };
        return [newFindItem];
      } else {
        const findItem2 = cartArr.find((item) => item.id === findItem[0].id);
        if (typeof findItem2 !== "undefined") {
          findItem2.count = count;
          return [...cartArr];
        } else {
          const newFindItem = {
            category: findItem[0].category,
            descr: findItem[0].descr,
            id: findItem[0].id,
            img: findItem[0].img,
            price: findItem[0].price,
            product_name: findItem[0].product_name,
            count: count,
          };

          return [...cartArr, newFindItem];
        }
      }
    });
    setCount(1);
  }

  return (
    <div className="single-pro-container">
      <div className="single-pro-box">
        <div className="left">
          <div className="left-imgs">
            {findItem.length !== 0 &&
              findItem[0].img?.map((item, i) => {
                return (
                  <img
                    alt="hey"
                    onMouseMove={() => setBigImg(item)}
                    key={i}
                    src={item}
                  />
                );
              })}
          </div>
        </div>
        <div className="middle">
          {
            <img
              alt="hey"
              src={typeof bigImg !== "undefined" ? bigImg : findItem[0]?.img[0]}
            />
          }
        </div>
        <div className="right">
          <h1>{findItem[0]?.product_name}</h1>
          <h2>${findItem[0]?.price}</h2>
          <p>{findItem[0]?.descr}</p>
          <div className="inc-dec">
            <button onClick={() => handleClick("dec")}>-</button>
            <b>{count}</b>
            <button onClick={() => handleClick("inc")}>+</button>
          </div>
          <form onSubmit={handleSubmit}>
            <button type="submit" className="add-to-cart">
              <AddShoppingCartIcon />
              <span>ADD TO CART</span>
            </button>
          </form>
          <div className="two-add">
            <div>
              <FavoriteBorderIcon />
              <span>ADD TO WISH LIST</span>
            </div>
            <div>
              <BalanceIcon />
              <span>ADD TO COMPARE</span>
            </div>
          </div>

          <span style={{ opacity: "0.6" }}>
            Product Type: {findItem[0]?.category}{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
