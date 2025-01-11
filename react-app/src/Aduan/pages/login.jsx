import "../style/register.css";
import Navbar from "../component/navbar";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validasi form
    if (!email || !password) {
      setMessage("Email dan Password tidak boleh kosong!");
      return;
    }

    if (!email.includes("@")) {
      setMessage("Format tidak sesuai!");
      return;
    }

    const data = { email, password };

    try {
      const response = await axios.post(
        "http://localhost:8001/api/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data) {
        setMessage("Login Berhasil!");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setMessage("Login gagal! Periksa email atau password!");
      }
    } catch (error) {
      console.error(error);
      setMessage("Login gagal! Periksa email atau password!");
    }
  };

  return (
    <div className="bodyRegister">
      <Navbar />
      <form onSubmit={handleLogin}>
        <div className="box">
          <h2>Login</h2>
          <div className="inputRegister">
            <p>Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p>Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button>Login</button>
          </div>
          {message && <p>{message}</p>}
        </div>
      </form>
    </div>
  );
}
