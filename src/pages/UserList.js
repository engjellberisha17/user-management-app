import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

function UserList({ users }) {
  return (
    <div className="userlist-container">
      <h2 className="title">User List</h2>

      <div className="card-grid">
        {users.map((user) => (
          <Link to={`/users/${user.id}`} key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Company:</strong> {user.company?.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UserList;
