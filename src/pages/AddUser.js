import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import "../style.css";

function AddUser({ onAddUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [company, setCompany] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); 
    const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      setError("Name and Email are required.");
      return;
    }

    const newUser = {
      name,
      email,
      phone,
      website,
      company: { name: company || "None" },
      address: { street, city },
    };

    onAddUser(newUser);
    setName(""); setEmail(""); setPhone(""); setWebsite("");
    setCompany(""); setStreet(""); setCity(""); setError("");

    navigate("/");
    window.location.reload();
  };


  return (
    <div className="form-container">
      <h2>Add New User</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Website:</label>
          <input value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Company:</label>
          <input value={company} onChange={(e) => setCompany(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Street:</label>
          <input value={street} onChange={(e) => setStreet(e.target.value)} />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
