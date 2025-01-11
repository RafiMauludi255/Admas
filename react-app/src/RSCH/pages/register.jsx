import "../style/register.css";
import Navbar from "../component/navbar";
import axios from "axios";
import { useState } from "react";
import { API_URL } from "../utils/const";


export default function Register() {
   

  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const handelRegister = async () => {
    // format data yang akan dikirim
    const data = {
      email: email,
      whatsapp: whatsapp,
      password: password,
      submitedAt: new Date().toLocaleDateString(),
    };

    try {
      // kirim data ke server
      const response = await axios.post(`${API_URL}/user`, data);
      setMessage("Register Success!");
    } catch (error) {
      console.log(error);
      setMessage("Register Failed!, Please Try Again.");
    }
  };

  return (
    <div className="bodyRegister">
      <Navbar />
      <div className="box">
        <h2>Register</h2>
        <div className="inputRegister">
          <form onSubmit={handelRegister}>
            <p>Email</p>
            <input
              type="email"
              placeholder="your email active"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p>No. Whatsapp</p>
            <input
              type="text"
              placeholder="your no. whatsapp active"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
            />
            <p>Password</p>
            <input
              type="password"
              placeholder="create new password"
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


