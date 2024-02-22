import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useData } from "../Context/DataContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { emailAlert, passwordAlert } = useData();
  console.log(emailAlert + " " + passwordAlert);
  return (
    <div className="auth-container">
      <div className="auth-box">
        <form action="/api/auth/login" method="post">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Login" />
        </form>
        {emailAlert && (
          <h5 style={{ color: "red" }}>There is no email like that</h5>
        )}
        {passwordAlert && (
          <h5 style={{ color: "red" }}>You typed wrong the password</h5>
        )}
        <h5>
          Do you have no account ? Get one{" "}
          <span>
            <Link to="/register">Register</Link>
          </span>
        </h5>
      </div>
    </div>
  );
}
