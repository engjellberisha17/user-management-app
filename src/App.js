import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
