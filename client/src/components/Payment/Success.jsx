import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Link } from "react-router-dom";
export default function Success() {
  return (
    <div className="payment-container">
      <div className="payment-box two">
        <AttachMoneyIcon
          style={{
            marginBottom: "10px",
            color: "rgb(17, 190, 17)",
            transform: "scale(2.5)",
          }}
        />
        <h1>Payment Successful</h1>
        <p>Thank you for your payment</p>
        <Link to="/">Continue Shopping</Link>
      </div>
    </div>
  );
}
