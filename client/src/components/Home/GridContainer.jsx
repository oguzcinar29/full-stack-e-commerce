import React from "react";
import { Link } from "react-router-dom";

export default function GridContainer() {
  return (
    <div className="grid-container">
      <div className="grid-box">
        <div className="first">
          <div className="box">
            <img src="https://i.imgur.com/QkIa5tT.jpeg" />
            <div className="centered">
              <Link to="/clothes">Clothes</Link>
            </div>
          </div>
          <div className="box">
            <img src="https://i.imgur.com/ZANVnHE.jpeg" />
            <div className="centered">
              <Link to="/electronic">Electronics</Link>
            </div>
          </div>
        </div>
        <div className="second">
          <div className="box">
            <img src="https://i.imgur.com/Qphac99.jpeg" />
            <div className="centered">
              <Link to="/furniture">Furniture</Link>
            </div>
          </div>
        </div>
        <div className="first">
          <div className="box">
            <img src="https://i.imgur.com/qNOjJje.jpeg" />
            <div className="centered">
              <Link to="/shoes">Shoes</Link>
            </div>
          </div>
          <div className="box">
            <img src="https://i.imgur.com/BG8J0Fj.jpg" />
            <div className="centered">
              <Link to="/misc">Miscellaneous</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
