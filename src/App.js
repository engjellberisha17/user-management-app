import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import AddUser from "./pages/AddUser";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const localFetch = fetch("http://localhost:5000/users").then(res => res.json());
    const externalFetch = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

    Promise.all([localFetch, externalFetch])
      .then(([localUsers, externalUsers]) => {
        const sorted = [...localUsers.reverse(), ...externalUsers];
        setUsers(sorted);
      })
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  const handleAddUser = (newUser) => {
    setUsers([newUser, ...users]);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    }).catch(err => console.error("Error saving user:", err));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList users={users} />} />
        <Route path="/users/:id" element={<UserDetails users={users} />} />
        <Route path="/add" element={<AddUser onAddUser={handleAddUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
