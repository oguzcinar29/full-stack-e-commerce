import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
export default function Cancel() {
  return (
    <div className="payment-container">
      <div className="payment-box">
        <CloseIcon
          style={{
            marginBottom: "10px",
            color: "red",
            transform: "scale(2.5)",
          }}
        />
        <h1>Payment Canceled</h1>
        <p>Your payment was canceled</p>
        <Link to="/">Return to Home</Link>
      </div>
    </div>
  );
}
