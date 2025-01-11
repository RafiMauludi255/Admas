import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Users from "./Users";

export default function Register() {
  const [nama, setNama] = useState("");
  const [usia, setUsia] = useState("");
  const [status, setStatus] = useState("");
  const [ttl, setTtl] = useState("");
  const [wa, setWa] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8001/api/register",
        {
          nama,
          usia,
          status,
          ttl,
          wa,
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setMessage("Register berhasil:" + response.data.message);
    } catch (error) {
      setMessage("Register Gagal!");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Nama : </label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <label>Usia</label>
        <input
          type="text"
          value={usia}
          onChange={(e) => setUsia(e.target.value)}
        />
        <label>Status</label>
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <label>TTL</label>
        <input
          type="date"
          value={ttl}
          onChange={(e) => setTtl(e.target.value)}
        />
        <label>No Wa</label>
        <input type="text" value={wa} onChange={(e) => setWa(e.target.value)} />
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}

      <BrowserRouter>
        <Routes>
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
