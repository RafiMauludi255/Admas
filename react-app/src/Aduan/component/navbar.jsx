import "../style/navbar.css";
import { Link, Route, Routes } from "react-router";
import axios from "axios";

export default function Navbar() {
  // const aboutPages = axios
  //   .get("http://localhost:8001/pages/about")
  //   .then((response) => {
  //     response.data;
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  return (
    <nav>
      <span>Admas</span>
      <ul>
        <li>
          <Link to="/">Beranda</Link>
          <Link to="/pages/about">Tentang&nbsp;Kami</Link>
         
          <Link to="#">Hubungi&nbsp;Kami</Link>
          <Link to="/pages/register">Daftar</Link>
        </li>
      </ul>
      <div className="loginBtn">
        <Link to="/pages/login">
          <input type="button" value="Masuk" />
        </Link>
      </div>
    </nav>
  );
}