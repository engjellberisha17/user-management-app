import React from "react"; 
import { useParams } from "react-router-dom"; 
import "../style.css";

function UserDetails({ users }) {
  const { id } = useParams();
  const user = users.find(u => String(u.id) === id);

  if (!user) return <p>User not found</p>;

  return (
    <div className="userlist-container">
      <h2 className="title">User Details</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>Website</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.company?.name}</td>
              <td>{user.website}</td>
              <td>{user.address ? `${user.address.street}, ${user.address.city}` : "-"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserDetails;
