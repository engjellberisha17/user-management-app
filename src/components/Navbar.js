import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
    <h2 style={styles.brand}>User Management App</h2>
    <ul style={styles.navList}>
        <li>
          <Link to="/" style={styles.link}>Users</Link>
        </li>
        <li>
          <Link to="/" style={styles.link}>Add New User</Link>
        </li>
    </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

  },
  brand: {
    margin: 0,
  },
  navList: {
    display: "flex",
    listStyle: "none",

  },
  link: {
    color: "white",  
},
};

export default Navbar;
