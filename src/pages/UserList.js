import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";

function UserList({ users, onDeleteUser }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (e, id) => {
    e.preventDefault(); // prevent card link navigation
    if (window.confirm("Are you sure you want to delete this user?")) {
      onDeleteUser(id);
    }
  };

  // Filter users based on search term (name or email)
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="userlist-container">
      <h2 className="title">User List</h2>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="card-grid">
        {filteredUsers.map((user) => (
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
        {filteredUsers.length === 0 && <p>No users found.</p>}
      </div>
    </div>
  );
}

export default UserList;
