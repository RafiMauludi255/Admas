import "../style/register.css";
import Navbar from "../component/navbar";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Register() {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    // format data yang akan dikirim
    const data = {
      email: email,
      whatsapp: whatsapp,
      password: password,
    };

    try {
      // kirim data ke server
      const response = await axios.post(
        "http://localhost:8001/api/register",
        data,

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setMessage("Daftar Akun Berhasil!");
      setTimeout(() => {
        navigate("/pages/login");
      }, 1000);
    } catch (error) {
      console.log(error);
      setMessage("Daftar gagal!, Silahkan coba lagi.");
    }
  };

  return (
    <div className="bodyRegister">
      <Navbar />
      <div className="box">
        <h2>Register</h2>
        <div className="inputRegister">
          <form onSubmit={handleRegister}>
            <p>Email</p>
            <input
              type="email"
              placeholder="gunakan email aktif"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p>No. Whatsapp</p>
            <input
              type="text"
              placeholder="nomor whatsapp aktif"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
            />
            <p>Password</p>
            <input
              type="password"
              placeholder="buat password baru"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Register</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
}
