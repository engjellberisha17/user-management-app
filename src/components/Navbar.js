import React from "react";
import { NavLink } from "react-router-dom";
import "../style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-link">
        Users
      </NavLink>
      <NavLink to="/add" className="navbar-link">
        Add User
      </NavLink>
    </nav>
  );
}

export default Navbar;
