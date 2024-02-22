import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isEmailUsed, setEmailUsed] = useState(false);

  useEffect(() => {
    fetch("/api/auth/get-register-info")
      .then((res) => res.json())
      .then((data) => setEmailUsed(data.emailUsed));
  }, []);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <form
          action="https://full-stack-e-commerce.onrender.com/api/auth/register"
          method="post"
        >
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Type username..."
            required
          />
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type email..."
            required
          />
          <input
            required
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type password..."
          />
          {isEmailUsed && <h4>The email was already used</h4>}
          <h5>
            Do you have a account?
            <span>
              <Link to="/login">Register</Link>
            </span>
          </h5>
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
}
