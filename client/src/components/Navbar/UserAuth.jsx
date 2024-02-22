import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../Context/DataContext";

export default function UserAuth() {
  const { currentUser } = useData();

  return (
    <div>
      {currentUser === null && (
        <Link className="btn-user" to="/login">
          Login
        </Link>
      )}
      {currentUser !== null && (
        <form action="/api/auth/logout" method="post">
          <input className="btn-user2 " type="submit" value="Logged Out" />
        </form>
      )}
    </div>
  );
}
