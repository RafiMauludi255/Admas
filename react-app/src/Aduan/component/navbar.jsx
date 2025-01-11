import "../style/navbar.css";
import { Link } from "react-router";

export default function Navbar() {
  
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
