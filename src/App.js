import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import AddUser from "./pages/AddUser"; 

function App() {
  const [users, setUsers] = useState([]);


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList users={users} />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
