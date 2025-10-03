import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams(); 
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching user:", err));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
   <div className="userlist-container">
        <h2 className="title">User List</h2>
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
                <td>{user.address?.street}, {user.address?.city}</td>
              </tr>
          </tbody>
        </table>
      </div>

    
  );
}

export default UserDetails;
