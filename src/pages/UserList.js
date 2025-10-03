import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

function UserList({ users, onDeleteUser }) {
  const handleDelete = (e, id) => {
    e.preventDefault(); // prevent card link navigation
    if (window.confirm("Are you sure you want to delete this user?")) {
      onDeleteUser(id);
    }
  };

  return (
    <div className="userlist-container">
      <h2 className="title">User List</h2>
      <div className="card-grid">
        {users.map((user) => (
          <Link to={`/users/${user.id}`} key={user.id} className="user-card">
            <button
              className="delete-btn"
              onClick={(e) => handleDelete(e, user.id)}
            >
              &times;
            </button>
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
